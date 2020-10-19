// 帮助函数

import $ from "./request.js"
export default{
	//检测网络状态
	onNetWork(){
		let func = (res)=>{
			if(res.networkType==='none'){
				uni.showToast({
					title:'没有网络',
					icon:'none'
				})
			}
		}
		uni.getNetworkType({
		    success:func
		});
		uni.onNetworkStatusChange(func);
	},
	//热更新
	update(showToast = false){
		// #ifdef APP-PLUS  
		// 
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
			$.post('update',{
				varsion:widgetInfo.version,//当前版本号
			}).then((res)=>{
				console.log(res)
				let result = res;
				//错误处理
				
				// if(err)return;
				
				var data = result.data.data[0];
				// if(data.length==0)return;
			
				// console.log(data)
				if(!data)return;
				if(!data.url){
					//无需更新
					if(showToast){
						uni.showToast({
							title: '当前是最新版本'
						});
					}
				}else{
					uni.showModal({
						title: '发现新的版本',
						content: '最新版本'+data.version,
						cancelText: '稍后更新',
						confirmText: '立即更新',
						success: res => {
							if(res.confirm){
								uni.downloadFile({
								    url: data.url,  
								    success: (downloadResult) => {  
								        if (downloadResult.statusCode === 200) {  
								            plus.runtime.install(downloadResult.tempFilePath, {  
								                force: false  
								            }, function() {  
								                console.log('install success...');  
								                plus.runtime.restart();  
								            }, function(e) {  
								                console.error('install fail...');  
								            });  
								        }  
								    }  
								});  
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}
				
				
			})
		});  
		// #endif
	},
	//弹框
	showToast(msg){
		uni.showToast({
			title:msg,
			'icon':'none'
		})
	}
	
	
}