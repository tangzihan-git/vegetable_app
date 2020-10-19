<template>
	<view class="position-absolute top-0 left-0 right-0 bottom-0 d-flex flex-column j-center a-center animated fadeIn faster">
		<image :src="getImage" 
		mode="widthFix" lazy-load style="width: 243upx;"></image>
		<text class="text-light-muted font-md mt-3">{{msg}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			icon:{
				type:String,
				default:"no_pay"
			},
			msg:{
				type:String,
				default:"暂无消息"
			}
		},
		computed:{
			getImage(){
				return `../../static/images/nothing/${this.icon}.png`;
			}
		}
	}
</script>

<style>
</style>
