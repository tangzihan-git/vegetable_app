<template>
	<view >
		<view style="height: 300rpx;" class="main-bg-color px-3 py-1" >
			<swiper-image :resdata="swipers" class="mt-4" 
			swiperItemStyle="border-radius: 20rpx;">
			</swiper-image>
		</view>
		<!-- 占位 -->
		<view class="mb-5 mt-5" style="height: 1px;"></view>
		<view class="row j-center py-2">
			<view @click="dumpCate()" class="span-5 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary ">
				<image src="/static/images/sc3.png" mode="widthFix" style="width:70rpx;height:70rpx"></image>
				<text>点我跳转</text>
			</view>
			<view class="span-5 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary ">
				<image src="/static/images/sg.png" mode="widthFix" style="width:70rpx;height:70rpx"></image>
				<text>水果批发</text>
			</view>
			<view class="span-5 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary ">
				<image src="/static/images/suic.png" mode="widthFix" style="width:70rpx;height:70rpx"></image>
				<text>水产新鲜</text>
			</view>
			<view class="span-5 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary ">
				<image src="/static/images/rs.png" mode="widthFix" style="width:70rpx;height:70rpx"></image>
				<text>禽畜肉蛋</text>
			</view>
			<view class="span-5 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary ">
				<image src="/static/images/ly.png" mode="widthFix" style="width:70rpx;height:70rpx"></image>
				<text>粮油米面</text>
			</view>
			<view class="span-5 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary ">
				<image src="/static/images/bh.png" mode="widthFix" style="width:70rpx;height:70rpx"></image>
				<text>茶水百货</text>
			</view>
		
			<view class="span-5 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary ">
				<image src="/static/images/gh.png" mode="widthFix" style="width:70rpx;height:70rpx"></image>
				<text>干货调味品</text>
			</view>
			<view class="span-5 d-flex flex-column j-center a-center py-3" hover-class="bg-light-secondary ">
				<image src="/static/images/ky2.png" mode="widthFix" style="width:70rpx;height:70rpx"></image>
				<text>想不到了</text>
			</view>
		
		</view>
		<!-- 广告位一 -->
		<view class="d-flex a-center j-center">
			<image src="../../static/del/1.jpg" class="mx-1" style="width:100% ;height: 220rpx;border-radius: 140rpx;"  mode=""></image>
		</view>
		<!-- 推荐位 -->
		<view class="">
			<!-- 头部 -->
			<view class="d-flex a-center j-sb py-2 px-3 border-bottom border-light-secondary">
				<view class="header-left mr-2"></view>
				<view style="font-size: 35rpx;" class="header-text">精选推荐</view>
				<view class="main-text-color ml-auto">更多</view>
			</view>
			<!-- 商品列表 -->
			<view class="d-flex">
				<scroll-view scroll-x="true" class="scroll-row">
					<view class="scroll-row-item p-2" style="width: 215rpx;" v-for=" i in 10" :key="i">
						<view class="d-flex flex-column a-center j-center text-center ">
							<image src="/static/del/12.jpg" style="width: 215rpx;height: 180rpx;" mode=""></image>
							<text class="font-sm over-flow-eli" style="width: 200rpx;">精品精品面</text>
							<price priceStyle="font-size:35rpx">1.9</price>
							<view class="d-flex a-center j-center font-sm main-bg-color text-white px-2" style="height: 35rpx;border-radius: 35rpx;">
								+ 购物车
							</view>
						</view>
					</view>
				</scroll-view>
				<view >
				</view>
				<!-- <view class="d-flex flex-column a-center j-center text-center p-2 border-right border-light-secondary">
					<image src="/static/del/12.jpg" style="width: 211rpx;height: 180rpx;" mode=""></image>
					<text class="font-sm over-flow-eli" style="width: 200rpx;">精品精品面</text>
					<price priceStyle="font-size:35rpx">1.9</price>
					<view class="d-flex a-center j-center font-sm main-bg-color text-white px-2" style="height: 35rpx;border-radius: 35rpx;">
						+ 购物车
					</view>
				</view> -->
			
			</view>
		</view>
		<!-- 新鲜蔬菜 -->
		<view class="d-flex flex-column j-center py-2">
			<view class="px-2">
				<image src="../../static/bg.jpg" mode="" class="" style="width:100% ;height: 230rpx;border-radius: 10rpx;"></image>
			</view>
			
			<block v-for="item,index in list" :key="index">
				<search-list :item="item" :index="index"></search-list>
			</block>
			<view class="text-center text-light-muted py-1" >查看更多 ></view>
		</view>
		<!-- 新鲜水果 -->
		<view class="d-flex flex-column j-center py-2">
			<view class="px-2">
				<image src="../../static/bg.jpg" mode="" class="" style="width:100% ;height: 230rpx;border-radius: 10rpx;"></image>
			</view>
			
			<block v-for="item,index in list" :key="index">
				<search-list :item="item" :index="index"></search-list>
			</block>
			<view class="text-center text-light-muted py-1" >查看更多 ></view>
		</view>
		<!-- 肉蛋 -->
	</view>
</template>

<script>
	
import uniBadge from "@/components/uni-ui/uni-badge/uni-badge.vue"
import swiperImage from "@/components/index/swiper-image.vue"
import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
import uniGrid from "@/components/uni-ui/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-ui/uni-grid-item/uni-grid-item.vue"
import price from "@/components/common/price.vue"
import searchList from "@/components/search-list/search-list.vue"
export default {
	components: {uniBadge,swiperImage,uniNavBar,uniGrid,uniGridItem,price,searchList},
	data() {
		return {
			list:[
				{
					title:'白菜',
					cover:"/static/del/1.jpg",
					desc:"好好都i为佛教哦i文件发客人分回复额我发你",
					price:"1.5",
					paynum:"23",
				},
				{
					title:'白菜',
					cover:"/static/del/1.jpg",
					desc:"好好都i为佛教哦i文件发客人分回复额我发你",
					price:"1.5",
					paynum:"23",
				}
			],
			swipers:[
				{
					src:"/static/images/gg1.jpg",
					
				},
				{
					src:"/static/images/gg2.jpg",
					
				},
				{
					src:"/static/images/gg3.jpg",
					
				}
			]
		}
	},
	onLoad() {
		
	},
	onNavigationBarSearchInputClicked(){
		uni.navigateTo({
			url: '/pages/search/search'
		});
	},
	methods: {
		dumpCate(){
			uni.switchTab({
			    url: '/pages/class/class'
			});
		}
	}
}
</script>

<style>

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.header-text{
		position: relative;
	}
	.header-left{
		width: 8rpx;
		height: 35rpx;
		background-color: #45C36F;
	}
	
</style>
