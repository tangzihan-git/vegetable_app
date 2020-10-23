<template>
	<view class="d-flex a-center j-center px-5 py-3">
		<view  v-for="item,index in providerList" :key="index" class="flex-1 d-flex a-center j-center">
			<view :class="item.icon + ' '+item.bgColor" class="iconfont  text-white  d-flex a-center j-center rounded-circle" style="width:100rpx;height:100rpx;font-size: 40rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				providerList:[]
			}
		},
		created() {
		    uni.getProvider({
		        service: 'oauth',
		        success: (result) => {
		            this.providerList = result.provider.map((value) => {
		                let providerName = '';
						let icon = '';
						let bgColor = '';
		                switch (value) {
		                    case 'weixin':
		                        providerName = '微信登录'
								icon = 'icon-weixin1'
								bgColor = 'bg-success'
		                        break;
		                    case 'qq':
		                        providerName = 'QQ登录'
								icon = 'icon-qq'
								bgColor = 'bg-primary'
		                        break;
		                    case 'sinaweibo':
		                        providerName = '新浪微博登录'
								icon = 'icon-weibo'
								bgColor = 'bg-danger'
		                        break;
		                }
		                return {
		                    name: providerName,
		                    id: value,
							icon:icon,
							bgColor:bgColor
		                }
		            });
		
		        },
		        fail: (error) => {
		            console.log('获取登录通道失败', error);
		        }
		    });
		}
	}
</script>

<style>
</style>
