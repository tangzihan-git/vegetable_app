<template>
	<view>
		<view style="height: 100rpx;"></view>
		<view class="d-flex a-stretch bg-white position-fixed left-0 bottom-0 right-0" style="height:100rpx;z-index: 100;">
			<view @click="sc" class="d-flex flex-1 flex-column a-center j-center line-h-md"
			hover-class="bg-light-secondary">
				<view class="iconfont icon-collection-b line-h-md text-muted font"
				hover-class="bg-light-secondary"></view>
				<text>收藏</text>
			</view>
			
				<view @click="jumpCart" class="d-flex flex-1 flex-column a-center j-center line-h-md"
				hover-class="bg-light-secondary">
					<view class="iconfont icon-gouwuche-copy-copy line-h-md text-muted font"></view>
					<view class="position-relative">购物车<uni-badge class="position-absolute" style="width:25rpx;top:-40rpx;top:-40rpx;right:-20rpx;" :text="countCar" type="error"></uni-badge>
					</view>
				</view>
				
			<view @click="addCar" class="d-flex j-center a-center font-md main-bg-color text-white" style="flex:2.5" hover-class="main-bg-hover-color">加入购物车 </view>
		</view>
	</view>
</template>

<script>
	
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default{
		data(){
			return {}
		},
		components:{
			uniBadge
		},
		methods:{
			
			jumpCart(){
				uni.switchTab({
				    url: '/pages/cart/cart'
				});	
			},
			//添加到购物车
			addCar(item){
				this.doAddCar(item)
				uni.setTabBarBadge({
					index:2,
					text:`${this.countCar}`
				})
			},
			addCar(){
				this.$emit('addCar')
			},
			sc(){
				this.$U.showToast('商品没必要收藏\r\n直接添加购物车就行了')
			}
		},
		computed:{
			...mapGetters(['countCar'])
		}
	}
</script>

<style>
</style>
