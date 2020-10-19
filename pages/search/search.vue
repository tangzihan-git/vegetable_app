<template>
	<view>
		<card title="热门搜索"></card>
		<!-- 多色按钮 热门搜索 -->
		<view class="px-1 mb-2">
			<color-tag v-for="hot,index in hots" :key="index" :item="hot"></color-tag>
		</view>
		<!-- 常用分类 -->
		<!-- <card title="常用分类" bodyPadding :headBorderBottom="false">
			<color-tag :color="false" v-for="hot,index in hots" :key="index" :hot="hot"></color-tag>
		</card> -->
		<!-- 分割线 -->
		<!-- <divider></divider> -->
		<!-- 搜索记录 -->
		<view class="d-flex j-sb px-1" v-if="this.history!=null">
			<card title="历史记录" bodyPadding :headBorderBottom="false">
				<color-tag :color="false" v-for="item,index in history" :key="index" :item="item"></color-tag>
			</card>
			<view class='a-start iconfont icon-lajitong text-light-muted px-1' @click="clearHistory"></view>
		</view>
		
		
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import colorTag from "@/components/search/color-tag.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			card,
			colorTag,
			uniListItem
		},
		data() {
			return {
				hots:[
					{name:'白菜'},
					{name:'上海青'},
					{name:'莴笋'},
					{name:'土豆'}
				],
				history:[
					{name:'白菜'},
					{name:'上海青'},
					{name:'莴笋'},
					{name:'土豆'}
				]
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index===0){
				uni.navigateTo({
					url: '../search-list/search-list'
				});
			}
		},
		methods: {
			clearHistory(){
				this.history=null
			}
		}
	}
</script>

<style>

</style>
