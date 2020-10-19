<template>
	<!-- 没有数据显示 -->
	<!-- <view class="position-relative" style="height:400rpx">
		<nodata icon="no_pay" msg="空空如也"></nodata>
	</view> -->
	<view class="">
	<view class="d-flex bg-white a-center font-md text-muted border-top border-bottom border-light-secondary">
		<view v-for="item,index in tabBars" :key="index" 
		 class="flex-1 d-flex a-center j-center py-2" 
		 :class="tabIndex===index?'tabActive':''" @click="changeTab(index)">
		 {{item.name}}
		 </view>
	</view>
	<block v-for="tab,tabI in tabBars">
		<view class="position-relative"  v-show="tabI===tabIndex" style="min-height: 440rpx;">
			<!-- 订单列表 -->
			<template v-if="tab.list.length>0">
				<block v-for="item,index in tab.list" :key="index">
				<order :item="item" :index="index"></order>
				</block>
			</template>
			<template v-else>
				<nodata icon="no_pay" msg="空空如也"></nodata>
			</template>
			
			<!-- 默认无 -->
		</view>

	</block>
	
	
	<!-- 列表 -->
	</view>
	
	</view>
</template>

<script>
	import nodata from "@/components/common/nothing.vue"
	import order from "@/components/order/order.vue"
	export default {
		components:{
			nodata,order
		},
		onLoad({index}) {
			if(!index)return
			this.changeTab(Math.floor(index))
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{
						name:'全部',
						id:0,
						no_nothing:'no_pay',
						list:[
							{
								created_time:"2020-20-02",
								status:"已发货",
								cover:"/static/del/1.jpg",
								title:"白菜",
								price:67,
								desc:"测试测测测测测存储",
								num:3,
								total_num:3,
								total_price:455
							},
							{
								created_time:"2020-20-02",
								status:"已发货",
								cover:"/static/del/1.jpg",
								title:"白菜",
								price:67,
								desc:"测试测测测测测存储",
								num:3,
								total_num:3,
								total_price:455
							}
						]
					},
					{
						name:'待派送',
						id:1,
						no_nothing:'no_pay',
						list:[]
					},
					{
						name:'待收货',
						id:2,
						no_nothing:'no_pay',
						list:[]
					},
					{
						name:'退款中',
						id:3,
						no_nothing:'no_pay',
						list:[]
					}
				],
				
			}
		},
		methods: {
			changeTab(index){
				this.tabIndex = index
			}
		}
	}
</script>

<style>
.tabActive{
 border-bottom: 5rpx solid #45C36F;
 color:#45C36F;
 margin-bottom: -5rpx;
}
</style>
