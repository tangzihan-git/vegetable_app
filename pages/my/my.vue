<template>
	<view class="animated fadeIn faster"> 
	<!-- 页面初始化白屏 -->
		<loading-plus v-if="beforReady" ></loading-plus>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center" style="height: 320rpx;">
		    <!-- 消息按钮 -->
			<!-- <view class="iconfont icon-xiaoxi position-absolute text-white" style="font-size: 50rpx;top:75rpx;right:20rpx;z-index: 100;"></view> -->
			<!-- 背景图片 -->
			<image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468000183,662932090&fm=26&gp=0.jpg" style="height: 320rpx;width: 100%;" mode=""></image>
			<!-- 用户相关 -->
			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom:50rpx">
				<image :src="avatar?avatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3512222076,2472343844&fm=26&gp=0.jpg'" style="width:145rpx;height: 145rpx;border:5rpx solid" 
				class="ml-4 rounded-circle border-light" mode=""></image>
				<navigator url="../login/login">
					<view v-if="!avatar" class="ml-2 text-white font-lg">登录/注册</view>
				</navigator>
				<view class="d-flex a-center j-center a-self-end ml-auto mr-5 px-4" 
				style="height: 60rpx;background-color: #ffd43f;color:#cc4a00;border-radius: 40rpx;">
					<view class="line-h  mr-1">
						去购物
					</view>
				</view>
			</view>
		</view>
		<!-- 图标分类 -->
		<card >
			<view solt="title" class="pb-1 px-2 d-flex a-center j-sb border-bottom">
				<text class="font-md font-weight">我的订单</text>
				<view class="text-secondary font " @click="navigate('order')">
					全部订单 <text class="iconfont icon-arrow-right font mr-1"></text>
				</view>
			</view>
			<view class="d-flex a-center">
				<view @click="openOrder('ps')" class="flex-1 d-flex flex-column a-center j-center py-3"
				hover-class="bg-light-secondary">
					<view class="iconfont icon-huoche line-h" style='font-size: 40upx; '></view>
					<view>待配送</view>
				</view>
				<view @click="openOrder('sh')" class="flex-1 d-flex flex-column a-center j-center py-3"
				hover-class="bg-light-secondary">
					<view class="iconfont icon-shouhuo line-h" style='font-size: 40upx; '></view>
					<view>待收货</view>
				</view>
				<view @click="openOrder('tk')" class="flex-1 d-flex flex-column a-center j-center py-3"
				hover-class="bg-light-secondary">
					<view class="iconfont icon-tuikuanshouhou1 line-h" style='font-size: 40upx; '></view>
					<view>退款/售后 </view>
				</view>
			</view>
		</card>
		<!-- 广告图 -->
		<!-- 广告图
		<view class="animated fadeIn faster d-flex a-center j-center">
			<image src="../../static/bg.jpg" style="width: 100%;"
			style="height: 300upx;"></image>
		</view> -->
		<divider></divider>
		<uni-list-item title="收货地址" :showExtraIcon="true" @click="navigate('user-path-list')" ></uni-list-item>
		<uni-list-item title="帮助中心" :showExtraIcon="true"  otherIconStyle="color:red"></uni-list-item>
		<uni-list-item title="意见反馈" :showExtraIcon="true"  otherIconStyle="color:red"></uni-list-item>
		<uni-list-item title="联系客服" :showExtraIcon="true"   otherIconStyle="color:red"></uni-list-item>
		<uni-list-item title="关于我们" :showExtraIcon="true" @click="navigate('about')" ></uni-list-item>
		<divider></divider>
		
		<uni-list-item @click="navigate('user-set')" title="更多设置" :showExtraIcon="true"  otherIconStyle="color:red"></uni-list-item>
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	import card from '@/components/common/card.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import {mapState,mapActions} from 'vuex'
	export default {
		mixins:[loading],
		components:{
			card,
			uniListItem
		},	
		data() {
			return {
				'avatar':'',
				name:'',
				
			}
		},
		onLoad(e) {
			//根据token获取用户信息
			if(e.access_token){
				this.getUserInfo(e.access_token)
			}else if(uni.getStorageSync('access_token')){
				this.getUserInfo(uni.getStorageSync('access_token'))
			}
		},
		methods: {
			...mapActions(['doAddTest']),
			//获取用户信息
			getUserInfo(token){
				this.$.get('user',{
					
				},{
					header:{
						Accept:'application/json',
						Authorization:'Bearer '+token
					}
					
				}).then(data=>{
					console.log(data)
					if(data.statusCode == 401){
						uni.showModal({
							title: '提示',
							content: '身份认证过期请重新登录',
							showCancel: true,
							cancelText: '取消',
							confirmText: '确定',
							success: res => {
								if(res.confirm){
									uni.navigateTo({
										url: '/pages/login/login',
				
									});
								}
							},
							fail: () => {},
							complete: () => {}
						});
					}
					this.avatar = data.data.data.avatar
					this.name = data.data.data.name
					
				})
			},
			navigate(path){
				// console.log('fg')
				if(!path){
					console.log('没有该页面')
					return;
				}else{
					// console.log('有')
				}
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				});
				
			},
			openOrder(type){
				switch (type){
					case 'ps':
					 uni.navigateTo({
						url: `/pages/order/order?index=1`
					 });
					break;
					case 'sh':
					 uni.navigateTo({
						url: `/pages/order/order?index=2`
					 });
					break;
					case 'tk':
					 uni.navigateTo({
						url: `/pages/order/order?index=3`
					 });
					break;
				}
			},
			jumpIndex(){
				uni.navigateTo({
					url: '../index/index.vue'
				});
			}
			
		},
		computed:{
			...mapState(['test'])
		}
	}
</script>

<style>
@font-face {
	  font-family: 'iconfont';  /* project id 1968838 */
	  src: url('//at.alicdn.com/t/font_1968838_44p1sibni2n.eot');
	  src: url('//at.alicdn.com/t/font_1968838_44p1sibni2n.eot?#iefix') format('embedded-opentype'),

	  url('//at.alicdn.com/t/font_1968838_44p1sibni2n.ttf') format('truetype'),

	}
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	
	}
</style>
