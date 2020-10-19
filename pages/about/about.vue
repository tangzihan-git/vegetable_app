<template>
	<view>
		<view class="d-flex flex-column j-center a-center py-4 my-4">
	     <image src="../../static/bg.jpg" mode="widthFix"
		 style="width: 100rpx;height: 100rpx;"></image>
		 <view class="text-light-muted font-md">
		 	蔬菜批发 1.0.0
		 </view>
		</view>
		<view class="bg-white">
			<uni-list-item title="版本更新" showArrow></uni-list-item>
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
