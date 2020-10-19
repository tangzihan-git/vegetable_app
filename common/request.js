// 封装ajax

import $C from '@/common/config.js';
export default{
	common:{
		method:'get',
		header:{
			"content-type":"application/json"
		},
		data:{}
	},
	request(options={}){
		options.url = $C.webUrl+options.url;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		// return uni.request(options)
		//异常封装
		return new Promise((res,rej)=>{
			uni.request({
				...options,
				success:(result)=>{
					if(result.statusCode>500){
						uni.showToast({
							title: result.data.msg || '服务器内部错误',
							icon:'none'
						});
						//失败
						return rej(result.data)
					}
					//成功
					res(result)
				},
				fail:(error)=>{
					uni.showToast({
						title: error.errMsg || '服务器内部错误',
						icon:'none'
					});
					
					return rej()
				}
			})
		})
	},
	get(url,data={},options={}){
		options.url = url;
		options.data = data;
		return this.request(options)
	},
	post(url,data={},options={}){
		options.url = url;
		options.data = data;
		options.method = 'post'
		return this.request(options)
	},
}