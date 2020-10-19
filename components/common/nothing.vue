<template>
	<view class="position-absolute d-flex flex-column a-center j-center top-0 left-0 right-0 bottom-0" style="background-color: #f5f5f5;">
		<image :src="getIcon" mode="widthFix" style="width:250rpx"></image>
		<view style="color:#b2b2b2">{{msg}}</view>
	</view>
</template>

<script>
	export default{
		props:{
			icon:{
				type:String,
				default:"no_comment"
			},
			msg:{
				type:String,
				default:"没有订单"
			}
		},
		computed:{
			getIcon(){
				return `/static/nothing/${this.icon}.png`
			}
		}
	}
</script>

<style>
</style>
