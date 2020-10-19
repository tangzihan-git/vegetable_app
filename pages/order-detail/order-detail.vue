<template>
	<view>
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
			<view class="mb-3">
				<view class="font-lg">
					卖家已发货
				</view>
				<view class="font">还差3天</view>
			</view>
			<view class="iconfont icon-huoche1"  style="font-size: 90rpx;"></view>
		</view>
		<!-- 地址 -->
		<view class="p-3 bg-white">
			<view class="text-light-muted font-md">
				<text class="font-lg text-dark mr-3">唐老板</text>
				<text>17622197244</text>
			</view>
			<view class="text-light-muted font-md">
				四川省 泸州市 龙马潭区 四川警察学院
			</view>
		</view>
		<!-- 商品 -->
		<divider></divider>
		<!-- 商品信息 -->
		<uni-list-item showNote>
			<text class="font-md text-light-muted">商品总价</text>
			<view slot="right" class="font-md text-light-muted">
			￥56
			</view>
		</uni-list-item >
		<uni-list-item showNote>
			<text class="font-md text-light-muted">快递</text>
			<view slot="right" class="font-md text-light-muted">
			￥0.00
			</view>
		</uni-list-item>
		<uni-list-item showNote>
			<text class="font-md text-light-muted">优惠券</text>
			<view slot="right" class="font-md text-light-muted">
			￥0.00
			</view>
		</uni-list-item>
		<uni-list-item showNote>
			<text class="font-md text-light-muted">商品总价</text>
			<view slot="right" class="font-md text-light-muted">
			￥56
			</view>
		</uni-list-item>
		<uni-list-item showNote>
			<text class="font-md text-light-muted price-color">实际付款</text>
			<view slot="right" class="font-md text-light-muted">
			<price>45</price>
			</view>
		</uni-list-item>
		<divider></divider>
		<card class="" title="订单信息">
			<uni-list-item showNote title="订单编号">
				<view slot="right" class="font-md text-light-muted">
				 <text>1233455679</text>
				</view>
			</uni-list-item>
		</card>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "@/components/common/price.vue"
	import card from "@/components/common/card.vue"
	export default {
		components:{
			uniListItem,price,card
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
