<template>
	<view>
		<!-- 轮播 -->
		<swiper-image :resdata="banners" :height="730" preview></swiper-image>
		<!-- 基础详情 -->
		<base-info :detail="detail"></base-info>
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
		<bottom-btn @addCar="addCar"></bottom-btn>
		<!-- 弹出框 -->
	</view>
</template>

<script>
	import swiperImage from "@/components/index/swiper-image.vue"
	import price from "@/components/common/price.vue"
	import baseInfo from "@/components/detail/base-info.vue"
	import card from "@/components/common/card.vue"
	import bottomBtn from "@/components/detail/bottom-btn.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default {
		components:{
			swiperImage,
			price,
			baseInfo,
			card,
			bottomBtn,
			uniListItem			
		},
		data() {
			return {
				goods:'',
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
				
			}
		},
		created(){
			//初始化商品
			this.goods = uni.getStorageSync('goods');
			this.content = this.goods.goods_desc
			for(let i = 0;i<this.goods.list_pic_url.length;i++){
				let obj = {'src':this.goods.list_pic_url[i]}
				this.banners.push(obj)
			}
			this.detail.title = this.goods.goods_name
			this.detail.desc = this.goods.goods_brief
			this.detail.price = this.goods.unit_price
			 
		},
		methods: {
			...mapActions(['doAddCar','doUpdateCar']),
			addCar(){
			    this.doAddCar(this.goods)
			    uni.setTabBarBadge({
			    	index:2,
			    	text:`${this.countCar}`
			    })
			}
		}
	}
</script>

<style scoped>
img{ 
	width: 100%;
	height: auto;
}

</style>
