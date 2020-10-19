<template>
	<view>
		<!-- 排序|筛选 -->
		<view class="d-flex border-top border-bottom a -center" style="height:100upx">
			<view class="flex-1 d-flex a-center j-center font-md" 
			v-for="item,index in screen.list" :key="index" @click="changeScreen(index)">
				<text :class="screen.currentIndex===index?'main-text-color':'text-muted'">{{item.name}}</text>
				<view>
				<!-- 排序按钮 -->	
					<view  class="iconfont icon-jiangxu1-copy line-h" style="font-size: 10px;" :class="item.status===1?'main-text-color':'text-light-muted'"></view>
					<view  class="text-light-muted iconfont icon-jiangxu1 line-h" style="font-size: 10px;" :class="item.status===2?'main-text-color':'text-light-muted'"></view>
				</view>
			</view>
			<view class="flex-1 d-flex a-center j-center font-md" @click="openDrawer">
				<text class="text-muted main-text-color">筛选</text>
			</view>
			
		</view>
		<!-- 筛选 -->
		<uni-drawer :visible="true" ref="drawer" mode="right" :width="280">
		    <!-- <view style="padding:30rpx;"> -->
			<card title="one" >
				<!-- 单选按钮 -->
				<scradio-group :label="label" @change="changeRadio">
				</scradio-group>
			</card>
		        <!-- 按钮 -->
				<view class="d-flex position-fixed right-0 bottom-0 w-100">
					<view class="border-top border-light-secondary flex-1 main-bg-color font-md py-2 text-white text-center" hover-class="bg-hover-color">确定</view>
					<view class="flex-1 font-md py-2 text-center" hover-class="bg-light-secondary">重置</view>
				</view>
		    <!-- </view> -->
		</uni-drawer>
		<!-- 商品列表 -->
		<block v-for="item,index in list " :key="index">
			<search-list :item="item" :index="index"></search-list>
		</block>
		
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-ui/uni-drawer/uni-drawer.vue"
	import card from "@/components/common/card.vue"
	import scradioGroup from "@/components/common/scradio-group.vue"
	
	import searchList from "@/components/search-list/search-list.vue"
	export default {
	    components: {uniDrawer,card,scradioGroup,searchList},
		data() {
			return {
				screen:{
					currentIndex:0,
					list:[
						{name:'综合',status:1},
						{name:'销量',status:0},
						{name:'价格',status:0},
						
					]
				},
				label:{
					selected:0,
					list:[
						{name:'one'},
						{name:'two'},
						{name:'three'}
					]
				},
				list:[
					{
						title:'白菜',
						cover:"/static/del/1.jpg",
						desc:"好好都i为佛教哦i文件发客人分回复额我发你",
						price:"1.5",
						paynum:"23",
					}
				]
				
			}
		},
		methods: {
			changeScreen(index){
				//判断当前是否是激活状态
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				//处于激活状态
				if(oldIndex===index){
					return oldItem.status = oldItem.status===1?2:1
				}
				let newItem = this.screen.list[index]
				//移除已激活状态
				oldItem.status=0
				this.screen.currentIndex=index
				//增加激活状态
				newItem.status=1
		},
		 openDrawer(){
			 this.$refs.drawer.open()
		 },
		 changeRadio(index){
			 this.label.selected = index
		 }
	}
}
</script>

<style>

</style>
