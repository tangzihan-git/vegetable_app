<template>
	<view class="d-flex line-h font-weight mb-1" :class="color" :style="priceStyle" >
			<view class="font a-self-start line-h font-weight-100 mt-1" :class="iconSize" :style="iconStyle">
				￥</view>
			<slot />
	</view>
</template>

<script>
	export default {
		props:{
			color:{
				type:String,
				default:"price-color"
			},
			priceSize:{
				type:String,
				default:"font-lg"
			},
			iconSize:{
				type:String,
				default:""
			},
			priceStyle:{
				type:String,
				default:"font-size: 30upx"
			},
			iconStyle:{
				type:String,
				default:""
			}
			
		}
	}
</script>

<style>
</style>
