<template>
	<view class="p-2">
		<scroll-view scroll-x class="scroll-row " >
			<view class="scroll-row-item rounded bg-light-secondary mr-2" style="width:620rpx;height:380rpx p-2" v-for="item,index in comments">
			 <view class="d-flex a-center mb-1">
				 <image :src="item.userpic"  style="width:70rpx;height:70rpx" class="rounded-circle"></image>
				 <!-- 头像昵称时间 -->
				 <view class="ml-2 px-2">
					 <text class="font-md line-h">{{item.username}}</text>
					 <text class="font text-light-muted d-block">{{item.create_time}}</text>
				 </view>
				 <!-- 点赞 -->
				 <view class="ml-auto iconfont icon-gouwuche-copy-copy text-light-muted font pl-1">{{item.goods_num}}</view>
			 </view>
			 <!-- 评论内容 -->
			 <text class="d-block font-md mb-2">
				 {{item.context}}
			 </text>
			 <view class="row">
			 	<view class="span24-8 px-2" v-for="img in item.imglist">
					<image :src="img" mode="" class="w-100 rounded" style="height: 110rpx;"></image>
				</view>
			 </view>
		</view>
	</scroll-view>
	<!-- 更多 -->
	<view class="d-flex j-center py-2 mt-2 text-primary a-center">
		更多<view class="iconfont icon-jiantou"></view>
	</view>
	</view>
</template>

<script>
	export default{
		props:{
			comments:Array
		}
	}
</script>

<style>
</style>
