<template>
	<view class="card"  :class="getCardClass">
		<view v-if="showhead" class="p-2 d-flex j-sb a-center" 
		:class="getHeadClass" 
		:style="headStyle">
			<text class="font-md text-dark"
			:class="getTitleClass" :style="headTitleStyle">{{title}}</text>
			<view class="font d-flex j-sb a-center text-muted" v-if="showheadRight">
				{{headRightText}} <view v-if="showheadRight && showheadRightIcon" class="iconfont icon icon-you text-muted ml" style="font-size: 25upx;"></view>
				<slot name="right" />
			</view>
		</view>
		<view :class="getBodyClass" class="card-body" :style="bodyStyle">
			<image v-if="cover" class="w-100" 
			:src="cover" mode="widthFix"
			:style="getCoverStyle"></image>
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			// 是否显示头部
			showhead:{
				type:Boolean,
				default:true
			},
			// 头部标题
			title:String,
			// 是否头部标题加粗
			titleWeight:{
				type:Boolean,
				default:true
			},
			// 是否显示头部右边
			showheadRight:{
				type:Boolean,
				default:false
			},
			// 头部右边文字
			headRightText:String,
			// 头部上边框
			headBorderTop:{
				type:Boolean,
				default:false
			},
			// 头部下边框
			headBorderBottom:{
				type:Boolean,
				default:false
			},
			// 是否显示头部右边图标
			showheadRightIcon:{
				type:Boolean,
				default:false
			},
			// 封面图
			cover:String,
			// 卡片内容内边距
			bodyPadding:{
				type:Boolean,
				default:false
			},
			// 头部样式
			headStyle:String,
			headTitleStyle:String,
			// 标题样式
			titleFontSize:{
				type:String,
				default:'md'
			},
			// 内容样式
			bodyStyle:String,
			// 卡片边框
			cardBorder:{
				type:Boolean,
				default:false
			},
			// 卡片圆角
			cardRounded:{
				type:Boolean,
				default:false
			},
			// 卡片阴影
			cardShadow:{
				type:Boolean,
				default:false
			},
			// 封面图高度
			coverHeight:String
		},
		computed: {
			getCardClass() {
				let border = this.cardBorder ? 'border border-light-secondary' : '';
				let rounded = this.cardRounded ? 'rounded' : '';
				let shadow = this.cardShadow ? 'shadow' : '';
				return `${border} ${rounded} ${shadow}`;
			},
			getHeadClass(){
				let borderBottom = this.headBorderBottom ? 'border-bottom border-light-secondary':'';
				let borderTop = this.borderTop ? 'border-top border-light-secondary':'';
				return `${borderBottom} ${borderTop}`;
			},
			getTitleClass(){
				let fontWeight = this.titleWeight ? 'font-weight' : '';
				let fontSize = 'font-'+this.titleFontSize;
				return `${fontWeight} ${fontSize}`;
			},
			getBodyClass(){
				return this.bodyPadding ? 'p-2' : '';
			},
			getCoverStyle(){
				if (this.coverHeight) {
					let height = uni.upx2px(parseInt(this.coverHeight));
					return `height:${height}px;`;
				}
			},
		},
	}
</script>

<style scoped>
	.rounded{ border-radius: 12upx!important; }
	.card, .card-body{ overflow: hidden; }
</style>
