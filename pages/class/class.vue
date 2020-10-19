<template>
	<view class="container">
		<loading-plus v-if="beforReady" ></loading-plus>
		<view class="px-2 mt-2" style="height: 150rpx;">
			<scroll-view scroll-x="true" class="scroll-row">
				<view class="scroll-row-item mx-1" v-for="i in 10 " :key="i">
					<view class="d-flex flex-column a-center j-center">
						<view class="d-flex a-center" :class="i==1?'cateActive':''">
							<image src="../../static/bg.jpg" style="width:75rpx;height:75rpx;border-radius: 32rpx;"></image>
						</view>
						<view class="d-flex a-center j-center font-sm mt-1 px-1"
						 style="height: 35rpx;border-radius: 40rpx;" :class="i==1?'main-bg-color text-white':'text-dark'">
							一级分类
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="d-flex">
			<scroll-view id="nav-left" :scroll-top="leftScrollTop" class="nav-left animated fadeIn faster" scroll-y>
				<view style="background-color: #F8F8F8;font-size: 25rpx;" class="nav-left-item  d-flex a-center j-center border-color text-dark"  v-for="item,index in cate" :key="index" @tap="changeCate(index)" :class="activeIndex===index?'active':''">
				 {{item.name}}</view>
			</scroll-view>
				<view class="border-bottom  border-light-secondary d-flex a-center r-reverse border-danger position-absolute right-0"
				 style="left:22%;height: 81rpx;">
					<view class="px-2" @click="changeSort(0)" :class="cateSort==0?'main-text-color font-weight':'text-muted '">价格</view>
					<view class="px-2" @click="changeSort(1)" :class="cateSort==1?'main-text-color font-weight':'text-muted '">销量</view>
					 <view class="px-2" @click="changeSort(2)" :class="cateSort==2?'main-text-color font-weight':'text-muted '">综合</view>
				</view>
				<scroll-view class="nav-right" :scroll-top="scrollTop" 
				scroll-y style="margin-top: 100rpx;"
				@scroll="scroll">
				<!-- 性能问题取消动画 scroll-with-animation  -->
					<!-- 商品列表 -->
						<view v-for="item,index in list" class=" right-item  row" :key="index">
							<!-- <view class="nav-right-item " v-for="item2,index2 in item.list" :key="index2">
									<image :src="item2.src" style="width: 160rpx;min-height: 150rpx"></image>
									<view style="color: #333333;width:170rpx;" class="over-flow-eli">{{item2.name}}</view>
							</view> -->
							<search-list :borderRadiusNum="28" :item="item" v-for="i in 80"></search-list>
						</view>
				</scroll-view>
			<!-- </view> -->
		</view>
		
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	import searchList from "@/components/search-list/search-list.vue"
	export default {
		mixins: [loading],
		components:{
			searchList
		},
		data() {
			return {
				cateSort:0,
				beforReady:true,
				showLoading:true,
				scrollTop:0,
				//当前选中的分类
				activeIndex:0,
				cate:[],
				// list:[],
				leftDomsTop:[],//左边所有元素离top的距离
				rightDomsTop:[],//右边所有元素离to的距离
				cateItemHeight:0,//左边元素的高度
				leftScrollTop:0,
				list:[
					{
						title:'白菜',
						cover:"/static/del/1.jpg",
						desc:"好好都i为佛教哦i文件发客人分回复额我发你",
						price:"1.5",
						paynum:"23",
					},
					{
						title:'白菜',
						cover:"/static/del/1.jpg",
						desc:"好好都i为佛教哦i文件发客人分回复额我发你",
						price:"1.5",
						paynum:"23",
					}
				],
			}
		},
		onLoad() {
			//假数据
			this.getData()
			//监听
		},
		watch:{
			activeIndex(newValue,oldValue){
				//当左边选项切换时
				//1.获取scrolol-view高度
				//2.scrollTop的信息
				const query = uni.createSelectorQuery().in(this);
				query.select('#nav-left').fields({
					size:true,
					scrollOffset:true
				},data => {
					let h = data.height
					let st = data.scrollTop
					//下边 
					if((this.leftDomsTop[newValue]+this.cateItemHeight)>(h+st)) {
						 return this.leftScrollTop = this.leftDomsTop[newValue]+this.cateItemHeight -h 
					
						 //使当前滚动是 当前离top的高度加上自身的高度
				
					 }
					//上边
					// this.leftDomsTop[newValue]+this.cateItemHeight//当前top值+每个分类的高度			
					if(st>this.cateItemHeight){
						this.leftScrollTop = this.leftDomsTop[newValue]
					}
				
				}).exec();
			}
		},
		onReady() {
			//页面加载的时候获取菜单和商品项离顶部的距离
			const query = uni.createSelectorQuery().in(this);
			//----获取左边菜单元素离页面顶部的距离
			let left = []
			let right = []
			query.selectAll('.nav-left-item').fields({
				size:true,
				rect:true
			},data => {
			 // console.log(data)
			 left = data.map(v=>{
				 this.cateItemHeight = v.height//获取左边节点高度
				 return v.top
			 })
			 this.leftDomsTop = left
			 // console.log(this.leftDomsTop)
			}).exec();
			//-----end
			//----获取右边分类离页面顶部的距离
			query.selectAll('.right-item').fields({
				size:false,
				rect:true
				
			},data => {
			 // console.log(data)
			 right = data.map(v=>{
				 return v.top
			 })
			 // console.log(right)
			  this.rightDomsTop = right
			}).exec();
			//----end
		},
		methods:{
			//获取节点信息
			// getElInfo(obj={}){
			// 	let option = {
			// 		size:obj.size?true:false,
			// 		rect:obj.rect?true:false  
			// 	}
			// 	const query = uni.createSelectorQuery().in(this);
			// 	let  q = query.selectAll(.'nav-left-item')
			// 	q.fields({
			// 		size:true,
			// 		rect:true
			// 	},data => {
			// 	 // console.log(data)
			// 	 left = data.map(v=>{
			// 		 this.cateItemHeight = v.height//获取左边节点高度
			// 		 return v.top
			// 	 })
			// 	 this.leftDomsTop = left
			// 	 // console.log(this.leftDomsTop)
			// 	}).exec();
				
			// },
			//点击左边分类时，时右边菜单定位到指定位置
			changeCate(index){
				this.activeIndex = index
				this.scrollTop =  this.rightDomsTop[index]-50
				// console.log(this.scrollTop)
			},
			getData(){
				for(let i=0;i<20;i++){
					this.cate.push({
						name:'二级类'+i
					})
				}
				// for(let i = 0;i<this.list.length;i++){
				// 	for(let j = 0;j<20;j++){
				// 		this.list[i].list.push({
				// 			src:"/static/del/1.jpg",
				// 			name:`分类${i}的东西${j}`
				// 		})
				// 	}
				// }

				
			},
			async scroll(e){
				// console.log()
				//匹配当前scrollTop对应的索引
				//v=存放在数组里面的每个右边分类距离顶部的高度
				//当滚动时，对数组进每个高度进行遍历，并-判断如果，当前数组的高度小于滚动的高度时，则当前数组索引赋予当前被选中分类			
				this.rightDomsTop.forEach((v,k)=>{
					if(v<e.detail.scrollTop+53){
						this.activeIndex = k
						return false
					}
				})
			},
			changeSort(index){
				this.cateSort=index
			}
		}
	}
</script>

<style scoped>
.border-color{
	border-color: #ECECEC;
}
.nav-left {
	width: 22%;
	background: #FEFEFE;
	position: absolute;
	left: 0;
	top: 150rpx;
	bottom: 0;
}
.nav-left text{
	border-left: 8upx solid #FEFEFE;
	border-right: 8upx solid #FEFEFE;
}
.nav-left-item {
	height: 100upx;
	font-size: 30upx;
}

.nav-right {
	width: 78%;
	position: absolute;
	left: 22%;
	top: 160rpx;
	bottom: 0;
}

.nav-right-item {
	width: 28%;
	height: 220rpx;
	float: left;
	text-align: center;
	padding: 11rpx;
	font-size: 28rpx;
}

.nav-right-item image {
	width: 120upx;
	height: 120upx;
}

.active {
	border-left:8upx solid #45C36F;
	background-color: #ffffff !important;
	font-weight:bold
	
}
.active text{
	border-left: 8upx solid #FD6B04;
	width: 100%;
	text-align: center;
}
.border-bottom{ border-color: #F4F4F4; }
.cateActive{
	border:1px solid #45C36F;
	border-radius: 32rpx;
	padding: 2rpx;
}
.cateActive image{}
</style>
