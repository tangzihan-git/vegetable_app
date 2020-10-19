<template>
	<scroll-view scroll-x class="scroll-row">
		<view 
		v-for="i in 10" :key="i" 
		class="scroll-row-item" 
		style="width:170rpx;height:110rpx">
			<view class="d-flex flex-column a-center j-center">
				<view class="iconfont icon-gouwuche-copy-copy line-h-sm"></view>
				<view class="line-h-sm">绿色</view>
				<view class="text-light-muted font-sm line-h-sm">测测测测测 测测从额测</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>
