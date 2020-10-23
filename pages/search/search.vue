<template>
	<view>
		<!-- 热门搜索 -->
		<view v-if="this.hots!=null" class="px-1 mb-2">
			<tag v-for="hot,index in hots" :key="index" :item="hot"></tag>
		</view>
		
		<!-- <divider></divider> -->
		<!-- 搜索记录 -->
		<view class="d-flex j-sb px-1" v-if="this.histories!=null">
			<card title="历史记录" bodyPadding :headBorderBottom="false">
				<tag @sendSearch="sendSearch" :color="false" v-for="item,index in histories" :key="index" :item="item"></tag>
			</card>
			<view class='a-start iconfont icon-lajitong text-light-muted px-1' @click="clearHistory"></view>
		</view>
		
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import Tag from "@/components/search/tags.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			card,
			Tag,
			uniListItem
		},
		data() {
			return {
				hots:[
					// {name:'白菜'},
					// {name:'上海青'},
					// {name:'莴笋'},
					// {name:'土豆'}
				],
				histories:[
					{}
				],//历史记录
				word:''
			}
		},
		onLoad() {
			
			
		},
		onShow() {
			this.histories = uni.getStorageSync('history') ? uni.getStorageSync('history') : []
			// console.log(this.histories)
		},
		onNavigationBarButtonTap(e){
			if(e.index===0){
				if(this.word==''){
					return this.$U.showToast('请输入搜索内容')
				}
				this.search()
				
			}
		},
		onNavigationBarSearchInputChanged(e){
			this.word = e.text
		},
		methods: {
			clearHistory(){
				this.histories=[]
				uni.removeStorageSync('history')
			},
			sendSearch(data){
				this.word  = data
				this.search()
			},
			search(){
				if(uni.getStorageSync('history')){
				   this.histories = uni.getStorageSync('history')
				   //去重
				  this.histories  = this.histories.filter(item=>{
					  return item.name != this.word
				  })
				   this.histories.push({name:this.word})
					uni.setStorage({
						key: 'history',
						data: this.histories,
						success: function () {
							console.log(uni.getStorageSync('history'));
						}
					});
				}else{
					
					
					this.histories.push({name:this.word})
					
					uni.setStorage({
						key: 'history',
						data: this.histories,
						success: function (){
							console.log(uni.getStorageSync('history'));
						}
					});
				}
				//搜索按钮被点击				
				uni.navigateTo({
					url: '/pages/search-list/search-list?word='+this.word
				});
			}
		}
	}
</script>

<style>

</style>
