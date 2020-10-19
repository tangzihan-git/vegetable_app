<template>
	<view class="bg-white" @click.stop="openDetail">
		<divider></divider>
		<!-- 头部 -->
		<view class="d-flex a-center p-2 border-bottom border-light-secondary">
			<text class="text-light-muted font-md">{{item.created_time}}</text>
			<text class="main-text-color ml-auto font-md">{{item.status}}</text>
		</view>
		<!-- 身体 -->
		<view class="px-2">
			<view class=" border-bottom d-flex a-center py-2 border-light-secondary">
				<image style="width:150rpx;height: 150rpx;" :src="item.cover" mode="widthFix" class="rounded mx-2 flex-shfrink"></image>
				<view class="flex-1">
					<view class="d-flex a-center">
						<text class="font-md text-dark">{{item.title}}</text>
						<text class="font-md text-light-muted ml-auto">￥{{item.price}}</text>
					</view>
					<view class="d-flex a-center">
						<text class="font-md text-light-muted">{{item.desc}}</text>
						<text class="font-md text-light-muted ml-auto">x{{item.num}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="d-flex a-center p-2">
			<text class="text-dark font-md ml-auto">
				共{{item.total_num}}间商品 合计 ￥{{item.total_price}}
			</text>
		</view>
		<view class="d-flex j-end a-center px-2 pb-2">
			<view class="rounded border border-light-secondary py-1 px-2 text-secondary" hover-class="bg-light-secondary" @click.stop="logistics">
				查看物流
			</view>
			<view class="ml-2 rounded border border-light-secondary py-1 px-2 text-secondary" hover-class="bg-light-secondary">
				确认收货
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
		},
		methods:{
			openDetail(){
				uni.navigateTo({
					url: '/pages/order-detail/order-detail',
				});
			},
			logistics(){
				uni.navigateTo({
					url: '/pages/logis-detail/logis-detail',
				});
			}
		}
	}
</script>

<style>
</style>
