<template>
	<view @click="detailShop" class="row p-2 border-bottom border-light" style="border">
		<view class="span-6 d-flex a-center">
			<image :class="['w-100','borderRadiusNum']"   :style="borderRadius" mode="widthFix" :src="item.primary_pic_url" ></image>
		</view>
		<view class="span-14 pl-3 d-flex flex-column">
			<view class="font-md font-weight-100">{{item.goods_name}}</view>
			<view class="font text-light-muted line-h-md mb-auto over-flow-eli">
				{{item.goods_brief}}
			</view>
			<!-- 标签 -->
			<view class="d-flex my-1">
				<text class="font text-center px-1 mr-2"
				style="background-color: #FFF1F0;color:#FA6465;border-radius: 10rpx;min-width: 70rpx;">
					损坏即赔
				</text>
				<text class="font text-center px-1 mr-2"
				style="background-color: #FFF1F0;color:#FA6465;border-radius: 10rpx;min-width: 70rpx;">
					包邮
				</text>
			</view>
			
			
			<view class="d-flex">
				<price>{{item.retail_price}}</price>
				<view @click.stop="addCar" class=" ml-auto text-center position-relative text-white main-bg-color iconfont icon-gouwuche font-weight-100 d-flex a-center j-center" style="width:50rpx;height:50rpx;border-radius: 50%;font-size: 35rpx;">
					<view v-for="car in car_list" v-if="car.id==item.id" class='car-badge d-flex a-center j-center'>{{car.num}}</view>
				</view>
			</view>
			
				<!-- <view class="font-sm text-light-muted">
					{{item.paynum}}人付款
				</view> -->
			
			<!-- 购物车 -->
			
		</view>
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default{
		components:{
			price
		},
		props:{
			item:Object,
			index:Number,
			borderRadiusNum:{
				type:Number,
				default:0
			}
		},
		methods:{
			...mapActions(['doAddCar','doUpdateCar']),
			detailShop(){
				uni.setStorage({
					key:'goods',
					data:this.item
				})
				uni.navigateTo({
					url: '/pages/detail/detail',
				});
			},
			//添加到购物车
			addCar(){
				console.log('h')
				this.doAddCar(this.item)
				uni.setTabBarBadge({
					index:2,
					text:`${this.countCar}`
				})
				return;
			}
		},
		computed:{
			...mapState({
				car_list: state => state.cart.list
			}),
			...mapGetters(['countCar']),
			borderRadius(){
				return `border-radius:${this.borderRadiusNum}rpx`
			}
		
				
			
		}
	}
</script>

<style>
	.car-badge{
		position: absolute;
		top:-4px;
		left:30rpx;
		width:30rpx;
		height: 30rpx;
		font-size: 20rpx;
		border-radius: 50%;
		background-color: #FF5D60;
	}
</style>
