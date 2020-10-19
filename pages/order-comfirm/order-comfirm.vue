<template>
	<view style="background-color: #ffffff;min-height: 100%;height: auto;">
		<!-- 地址选择 -->
		<view  @click="openPathList" class="main-bg-color text-white d-flex a-center px-3" style="height:250rpx;" hover-class="main-bg-hover-color">
			<view>
				<template v-if="path">
					<view  class="font-weight  font-md d-flex a-center font-lg">
						<text>{{path.name}} {{path.phone}}</text>
						<view class="border border-white rounded px-1 ml-2 font" 
						v-if="path.isDefault">默认</view>
					</view>
				</template>
				<template v-else>
					<view  class="font-weight  font-md d-flex a-center font-lg">
						<text>请选择收货地址</text>
					</view>
				</template>
				
				<view>
					{{path.path}} {{path.detailPath}}
				</view>
			</view>
			<view class="iconfont icon-jiantou ml-auto"></view>
		</view>
		<!-- 商品信息 -->
		<view style="border-top-left-radius: 30rpx;border-top-right-radius: 25rpx;margin-top: -25rpx;overflow: hidden;">
			<view style="height: 500rpx;" class="bg-white">
				<uni-list-item showArrow showNote showArrow >
					<view class="d-flex a-center">
						<image src="/static/bg.jpg" mode="" style="width:100rpx;height:100rpx" class="rounded mr-2"></image>
						<image src="/static/bg.jpg" mode="" style="width:100rpx;height:100rpx" class="rounded mr-2"></image>
					</view>
					<view slot="rightContent">
						共3件商品
					</view>
				
				</uni-list-item>
				<uni-list-item title="商品总价">
					<view slot="rightContent">
						<price color="text-dark">20.00</price>
					</view>
				</uni-list-item>
				<uni-list-item title="运费">
					<view slot="rightContent">
						包邮
					</view>
				</uni-list-item>
				<uni-list-item title="优惠劵">
					<view slot="rightContent">
						无可用
					</view>
					<view slot="right">
						<text class="iconfont icon-jiantou"></text>
					</view>
				</uni-list-item>
				<uni-list-item  showNote>
					<text class="main-text-color font-md">小计</text>
					<view slot="rightContent">
						<price>45.99</price>
					</view>
				</uni-list-item>
				<divider></divider>
			</view>
		</view>
		<!-- 结算 -->
		<view class="position-fixed d-flex a-center j-end bg-white p-2 font-md border bottom-0 left-0 right-0">
			<text>合计:</text>
			<view class="ml-2">
				<price>45.99</price> 
			</view>
			
			<view class="ml-2 px-2 py-1 text-white  main-bg-color" hover="main-bg-hover-color " style="border-radius:60rpx" @click="openPay">去支付</view>
		</view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "@/components/common/price.vue"
	import {mapGetters} from "vuex"
	export default {
		components:{
			uniListItem,price
		},	
		data() {
			return {
				path:false
			}
		},
		onLoad(){
			if(this.defaultPath.length){
				this.path = this.defaultPath[0]
			}
			//开启监听更新收货地址事件
			uni.$on('choosePath',res=>{
				this.path = res
				console.log('接受到参数')
			})
			
		},
		onUnload(){
			//关闭监听
			uni.$off('choosePath')
		},
		methods: {
			openPathList(){
				uni.navigateTo({
					url: '/pages/user-path-list/user-path-list?type=choose'
				});
			},
			openPay(){
				uni.navigateTo({
					url: '/pages/pay-methods/pay-methods'
				});
			}
			
		},
		computed:{
			...mapGetters(['defaultPath'])
		}
	}
</script>

<style>

</style>
