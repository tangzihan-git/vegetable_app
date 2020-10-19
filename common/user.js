import $chat from './chat.js';
import $ from './request.js';
export default{
	// to,
	// userinfo:uni.getStorageSync('usermsg')
	token:false,
	userinfo:false,
	counts:{},
	userbind:false,
	//初始化
	__init(){
		//获取用户信息
		this.userinfo = uni.getStorageSync('usermsg');
		this.token = uni.getStorageSync('access_token');
		this.counts = uni.getStorageSync('counts')|| 0;
		this.userbind = uni.getStorageSync('userbind');
		// this.OnUserCounts();
		//如果用户id存在则连接
		if(this.userinfo.id){
			//连接socket
			$chat.Open();
		}
	}
	// },
	// //登录
	// async login(options = {}){
	// 	uni.showLoading({
	// 		title:'登录中',
	// 		mask:true
	// 	})
	// 	//请求登录
	// 	let [err,res] = await $.post()
	// }
}