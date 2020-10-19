<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="iconfont icon-zhifuchenggong main-text-color " style="font-size: 90rpx;"></text>
			<text class="text-dark font-lg">支付成功</text>
		</view>
		<view class="px-5">
			<view class="rounded main-bg-color text-white border w-100 text-center py-2 font-md"
				hover-class="main-bg-hover-color" @click="surePay">
			 查看订单
			</view>
			<view class="rounded font-md text-dark border w-100 text-center py-2 mt-3"
				hover-class="bg-light-secondary" @click="surePay">
			返回首页
			</view>
		</view>
	</view>
</template>

<script>
	import mainBtn from "@/components/common/main-btn.vue"
	export default {
		components:{
			mainBtn
		},
		data() {
			
			return {
				
			}
		},
		methods: {
			surePay(){
				
			}
		}
	}
</script>

<style>

</style>
