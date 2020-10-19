<template>
	<view>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shfrink">收货人:</view>
			<input type="text" v-model="form.name" class="px-1 font-md flex-1"  />
		</view>
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shfrink">手机号码:</view>
			<input type="text" v-model="form.phone" class="px-1 font-md flex-1" />
		</view>
		<divider></divider>
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shfrink">所在地区:</view>
			<input type="text" value="" class="px-1 font-md flex-1" />
		</view>
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shfrink">详细地址:</view>
			<input type="text" v-model="form.detailPath" class="px-1 font-md flex-1" />
		</view>
		<divider></divider>
		<view class="p-2 d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shfrink">设为默认地址:</view>
			<switch color="#45c36f":checked="form.isDefault" @change="form.isDefault = $event.detail.value" class="ml-auto" />
		</view>
		<view class="p-3">
			<view @click="submit" class="text-center w-100 main-bg-color text-white font-md rounded py-2" hover-class="main-bg-hover-class">保存</view>
		</view>
	</view>
</template>

<script>
	
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item.vue'
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default {
	    components: {
	        uniSwipeAction,
	        uniSwipeActionItem
	    },
		data() {
			return {
				index:-1,
				isedit:false,
				form:{
					name:"summer",
					phone:"32432453",
					path:"四川省 成都市 郫县",
					detailPath:"530街道",
					isDefault:true
				}
				
			}
		},
		onLoad({data}){
			if(data){
				let result = JSON.parse(data)
				this.form = result.item
				this.index = result.index
				this.isedit = true//修改状态为编辑
				uni.setNavigationBarTitle({
					'title':'修改收货地址'
				})
			}
			
		},
		methods: {
			...mapActions(['updatePathAction','createPathAction']),
			submit(){
				//现在的状态为编辑
				if(this.isedit){
					this.updatePathAction({
						index:this.index,
						item:this.form
					})
					// uni.showToast({
					// 	title: '修改成功'
					// });
					return uni.navigateBack({
						delta: 1
					});
					// console.log('test12')
				}
				//验证表单
				// console.log('test')
				this.createPathAction(this.form)
				uni.showToast({
					title: '创建成功'
				});
				// console.log(this.$store.state.path.list)
				uni.navigateBack({
					delta:1
				})
				// uni.navigateTo({
				// 	url:'/pages/user-path-list/user-path-list'
				// })
			}
		}
	}
</script>

<style>
page{
	background-color: #eeeeee;
}
</style>
