<template>
	<view>
		<!-- 轮播 -->
		<swiper-image :resdata="banners" :height="730" preview></swiper-image>
		<!-- 基础详情 -->
		<base-info :detail="detail"></base-info>
		<!-- 滚动商品属性 -->
		<!-- <scroll-attrs></scroll-attrs> -->
		
		
		<!-- 属性选择 -->
		<!-- <view class="p-2">
			<view class="rounded border bg-light-secondary">
				<uni-list-item showNote @click="show('attr')">
					<view clas="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>火焰红 64G 标配</text>
					</view>
				</uni-list-item>
				<uni-list-item showNote @click="show('express')">
					<view clas="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2">泸州 龙马潭区</text>
						<text class="main-text-color">现配</text>
					</view>
				</uni-list-item>
				<uni-list-item showNote  @click="show('service')">
					<view class="d-flex a-center">
						<view class="text-muted font d-flex a-center">
							<view class="iconfont icon-finish main-text-color mr-2"></view>
							小米自营
						</view>
					
					</view>
				</uni-list-item>
			</view>
		</view> -->
		<!-- 横向列表滚动 评论-->
		<!-- <scroll-comment :comments="comments"></scroll-comment> -->
		
		<!-- 富文本内容 -->
		<divider></divider>
		<card title="商品详情" titleFontSize="lg">
			<uni-list-item  showNote>
			<view class="d-flex a-center j-sb" style="width:250rpx">
				<text class="text-light-muted">规格</text>
				<text>1.5</text>
			</view>
			</uni-list-item>
			<uni-list-item  showNote>
			<view class="d-flex a-center j-sb" style="width:250rpx">
				<text class="text-light-muted position-relative">产地</text>
				<text >中国</text>
			</view>
			</uni-list-item>
			<uni-list-item  showNote>
			<view class="d-flex a-center j-sb" style="width:250rpx">
				<text class="text-light-muted position-relative">规格</text>
				<text >1箱</text>
			</view>
			</uni-list-item>
			<uni-list-item  showNote>
			<view class="d-flex a-center j-sb" style="width:250rpx">
				<text class="text-light-muted position-relative">重量</text>
				<text >5斤*10</text>
			</view>
			
			</uni-list-item>
			<uni-list-item  showNote>
			<view class="d-flex a-center j-sb" style="width:250rpx">
				<text class="text-light-muted position-relative">保质期</text>
				<text >5天</text>
			</view>
			
			</uni-list-item>
	
		</card>
		<divider></divider>
		<view v-html="content" class="p-2"></view>
		<!-- 为您推荐-->
		<!-- <card title="热门推荐">
			 
		</card> -->
		<!-- 底部操作条 -->
		<!-- 占位 -->
		<bottom-btn></bottom-btn>
		<!-- 弹出框 -->
		<common-popup :popupClass="popup.attr" @hide="hide('attr')">
			<!-- 属性筛选框 -->
			<view class="d-flex a-center" style="height: 275rpx;">
				<image src="../../static/bg.jpg" mode="widthFix" style="height: 180rpx;width: 180rpx;" class="border rounded"></image>
				<view class="pl-2">
					<price priceStyle="font-size:45rpx" iconStyle="font-size:30rpx">23</price>
					<text class="d-block">火焰红 64G</text>
				</view>
			</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y class="w-100" style="height: 660rpx;">
				<card title="颜色" v-for="item,index in selects" :key="index">
					<scradio-group @change="changeRadio" :label="item" :selected.sync='item.selected'></scradio-group>
				</card>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<uni-number-box :min="1" :value="detail.num" @change="detail.num=$event"></uni-number-box>
				</view>
			</scroll-view>
			<!-- 按钮 -->
			<navigator url="../cart/cart">
			<view class="d-flex a-center j-center main-bg-color text-white font-md" style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" hover-class="main-bg-hover-color" @tap="hide('attr')">
				<text>加入购物车</text>
			</view>
			</navigator>
		</common-popup>
		
		<!-- 收货地址 -->
		<common-popup :popupClass="popup.express" @hide="hide('express')">
			<view style="height: 100rpx;" class="d-flex a-center j-center font-md border-bottom border-light-secondary">收货地址</view>
			<scroll-view scroll-y class="w-100" style="height: 835rpx;">
				<uni-list-item showNote>
					<view class="iconfont icon-dingwei font-weight">
						测试人
					</view>
					<view class="font text-light-muted">四川省 泸州市 江阳区</view>
				</uni-list-item>
				
			</scroll-view>
			<view class="d-flex a-center j-center main-bg-color text-white font-md" style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" hover-class="main-bg-hover-color" @tap="hide('express')">
				<text>选择新的地址</text>
			</view>
		</common-popup>
		<!-- 服务说明 -->
		<common-popup :popupClass="popup.service" @hide="hide('service')">
			<view style="height: 100rpx;" class="d-flex a-center j-center font-md border-bottom border-light-secondary">服务说明</view>
			<scroll-view scroll-y class="w-100" style="height: 835rpx;">
				<view class="py-1">
					<view class="d-flex a-center" >
						<view class="iconfont icon-finish main-text-color mr-1" >
							老子自营
						</view>
					</view>
					<text class="text-light-muted font pl-4">
						包邮包邮
					</text>
				</view>
				
			</scroll-view>
			<view class="d-flex a-center j-center main-bg-color text-white font-md" style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" hover-class="main-bg-hover-color" @tap="hide('service')">
				<text>确定</text>
			</view>
		</common-popup>
		
	</view>
</template>

<script>
	import swiperImage from "@/components/index/swiper-image.vue"
	import price from "@/components/common/price.vue"
	import baseInfo from "@/components/detail/base-info.vue"
	// import scrollAttrs from "@/components/detail/scroll-attrs.vue"
	// import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	// import scrollComment from "@/components/detail/scroll-comment.vue"
	import uParse from "@/components/uni-ui/feng-parse/parse.vue"
	import card from "@/components/common/card.vue"
	import bottomBtn from "@/components/detail/bottom-btn.vue"
	import commonPopup from "@/components/common/common-popup.vue"
	import scradioGroup from "@/components/common/scradio-group.vue"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			swiperImage,
			price,
			baseInfo,
			uParse,
			card,
			bottomBtn,
			commonPopup,
			scradioGroup,
			uniNumberBox,
			uniListItem
			// uniListItem,
			// scrollComment
		},
		
		data() {
			return {
				goods:'',
				selects:[
					{	
						title:"颜色",
						selected:0,
						list:[
							{name:"蓝色"},
							{name:"红色"},
							{name:"黄色"}
						]
					
					},
					{
						title:"容量",
						selected:0,
						list:[
							{name:"64GB"},
							{name:"128GB"},
							{name:"512GB"}
						]
					
					},
					{
						title:"套餐",
						selected:0,
						list:[
							{name:"标配"},
							{name:"套餐一"},
							{name:"套餐二"}
						]
					
					}
				],
				// popupClass:"none",
				popup:{
					attr:"none",
					express:"none",
					service:"none"
				},
				content:'',
				detail:{
					title:"",
					desc:"",
					price:"",
					num:1,
					max:100
				},
				banners:[
					
				],
				comments:[
					{
						userpic:'/static/del/1.jpg',
						username:'test1',
						create_time:'2020-09-09',
						goods_num:23,
						context:'评论内容',
						imglist:[
							"/static/del/1.jpg",
							"/static/del/1.jpg",
							"/static/del/1.jpg"
						]
					},
					{
						userpic:'/static/del/1.jpg',
						username:'test1',
						create_time:'2020-09-09',
						goods_num:23,
						context:'评论内容',
						imglist:[
							"/static/del/1.jpg",
							"/static/del/1.jpg",
							"/static/del/1.jpg"
						]
					}
				]
			}
		},
		//监听页面返回
		onBackPress() {
			for(let key in this.popup){
				if(this.popup[key] !== "none"){
					this.hide(key)
					return true
				}
			}
			
		},
		beforeCreate() {
			
		},
		created(){
			this.goods = uni.getStorageSync('goods');
			this.content = this.goods.goods_desc
			for(let i = 0;i<this.goods.list_pic_url.length;i++){
				let obj = {'src':this.goods.list_pic_url[i]}
				this.banners.push(obj)
			}
			this.detail.title = this.goods.goods_name
			this.detail.desc = this.goods.goods_brief
			this.detail.price = this.goods.unit_price
			 
			console.log(this.goods)
		},
		methods: {
			hide(key){
				console.log(key)
				this.popup[key] ='hide'
				console.log('0')
				setTimeout(()=>{
					this.popup[key] ='none'
				},200)
			},
			show(key){
				this.popup[key] = 'show'
				// this.popupClass='show'
				// console.log('hello')
			},
			changeRadio(index){
				this.label.item.selected = index
			}
		}
	}
</script>

<style>
img{
	width: 100%;
	height: auto;
}

</style>
