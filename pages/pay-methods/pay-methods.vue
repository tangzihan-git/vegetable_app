<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5">
			<text class="font-md text-light-muted">支付金额</text>
			<price priceStyle="font-size:50upx" iconStyle="font-size:30upx">23.00</price>
		</view>
		<view class="">
			<label @click="pay('zfb')">
				<uni-list-item title="支付宝支付" :showExtraIcon="true" otherIcon="icon-zhifubaozhifu text-primary" otherIconStyle="font-size:60rpx" note="推荐使用支付宝支付">
				<radio slot="right" value="1" :checked="zfbSelected" color="#45C36F"/>
				</uni-list-item>
			</label>
			<label  @click="pay('wx')">
				<uni-list-item title="微信支付" :showExtraIcon="true" otherIcon="icon-weixinzhifu text-success" otherIconStyle="font-size:60rpx">
				<radio slot="right" value="1" :checked="wxSelected" color="#45C36F" @click="wx()"/>
				</uni-list-item>
			</label>
			<view class="mt-3 p-3 d-flex j-center a-center">
				<view class="rounded main-bg-color text-white border w-100 text-center py-2 font-md"
					hover-class="main-bg-hover-color" @click="surePay">
						确认支付
				</view>
			</view>
	 	</view>
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			price,
			uniListItem
		},
		data() {
			return {
				zfbSelected:true,
				wxSelected:false
			}
		},
		methods: {
			pay(type){
				switch (type){
					case 'zfb':
					this.zfbSelected=!this.zfbSelected
					break;
					case 'wx':
					this.wxSelected=!this.wxSelected
					break;
				}
				
			},
			surePay(){
				uni.navigateTo({
					url: '/pages/pay-result/pay-result'
				});
			}
		}
	}
</script>

<style>

</style>
