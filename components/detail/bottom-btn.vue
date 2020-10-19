<template>
	<view>
		<view style="height: 100rpx;"></view>
		<view class="d-flex a-stretch bg-white position-fixed left-0 bottom-0 right-0" style="height:100rpx;z-index: 100;">
			<view class="d-flex flex-1 flex-column a-center j-center line-h-md"
			hover-class="bg-light-secondary">
				<view class="iconfont icon-xihuan line-h-md text-muted font"
				hover-class="bg-light-secondary"></view>
				<text>收藏</text>
			</view>
			
				<view @click="jumpCart" class="d-flex flex-1 flex-column a-center j-center line-h-md"
				hover-class="bg-light-secondary">
					<view class="iconfont icon-gouwuche-copy-copy line-h-md text-muted font"></view>
					<view class="position-relative">购物车<uni-badge class="position-absolute" style="top:-10rpx" :text="countCar" type="primary"></uni-badge>
					</view>
				</view>
				
			<view class="d-flex j-center a-center font-md main-bg-color text-white" style="flex:2.5"
			hover-class="main-bg-hover-color">加入购物车 </view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default{
		components:{
			uniBadge
		},
		methods:{
			jumpCart(){
				uni.switchTab({
				    url: '/pages/cart/cart'
				});	
			}
		},
		computed:{
			...mapGetters(['countCar'])
		}
	}
</script>

<style>
</style>
