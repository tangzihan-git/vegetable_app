<template>
	<view class="p-2">
		<price class="mt-2" priceStyle="font-size:45rpx" iconStyle="font-size:30rpx">{{detail.price}}</price>
		<view class="font-lg">{{detail.title}}</view>
		<view class="font text-light-muted mb-3 line-h-sm">
			{{detail.desc}}
		</view>
		
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	export default {
		components:{
			price
		},
		props:{
			detail:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style>
</style>
