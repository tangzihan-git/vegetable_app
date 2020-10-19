<template>
	<view>
		<card v-for="item,index in list" :key="index" :title="item.label" bodyStyle="background:#ffffff">
			<uni-list-item  v-for="(list,listIndex) in item.value" :key="listIndex" :title="list.title" 
			@click="navigate(list.path)">	
			</uni-list-item>
		</card>
		
		<view class="p-3">
			<button type="default" class="bg-white" >退出登录</button>
		</view>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			card,
			uniListItem
		},	
		data() {
			return {
				list:[
					{
						label:'账号管理',
						value:[
							{title:'个人资料',path:'user-info'},
							{title:'个人资料',path:''},
							{title:'个人资料',path:''},
							
						]
					},
					{
						label:'关于',
						value:[
							{title:'个人资料',path:''},
							{title:'个人资料',path:''},
							{title:'个人资料',path:''},
							
						]
					}
				]
			}
		},
		methods: {
			navigate(path){
				if(!path)return
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				});
				// console.log('1411111111154')
				
			},
			test(){
				console.log('hello')
			}
		}
	}
</script>

<style>
page{
	background-color: #EEEEEE;
}
</style>
