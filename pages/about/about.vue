<template>
	<view>
		<view class="d-flex flex-column j-center a-center py-4 my-4">
	     <image src="/static/images/02.jpg" mode="widthFix"
		 style="width: 100rpx;height: 100rpx;"></image>
		 <view class="text-light-muted font-md">
		 	蔬菜批发 1.0.0
		 </view>
		</view>
		<view class="bg-white">
			<uni-list-item showNote>
				<view class="d-flex a-center j-sb" style="width:350rpx">
					
					<text>邮箱：2197486242@qq.com</text>
				</view>
			</uni-list-item>
			<uni-list-item showNote>
				<view class="d-flex a-center j-sb" style="width:350rpx">
					
					<text>微信：qz17628197244</text>
				</view>
			</uni-list-item>
			<uni-list-item showNote>
				<view class="d-flex a-center j-sb" style="width:250rpx">
					<text>QQ：2197486242</text>
				</view>
			</uni-list-item>
			<uni-list-item showNote>
				<view class="d-flex a-center j-sb" style="width:250rpx">
					<text>加好友请注明来意</text>
				</view>
			</uni-list-item>
			
		</view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			uniListItem
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
