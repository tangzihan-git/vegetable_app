<template>
	<view style="background-color: #f5f5f5;" class="animated fadeIn faster">
		<!-- 页面初始化白屏 -->
		<loading-plus v-if="beforReady" ></loading-plus>
		
		<uni-nav-bar fixed :right-text="isedit?'完成':'编辑'" title="购物车" statusBar :shadow="false" @click-right="isedit=!isedit"></uni-nav-bar>
		<!-- 购物车空 -->
		<view class="py-5  d-flex a-center j-center bg-white" v-if="disabledAll">
			<view class="iconfont icon-gouwuche text-light-muted" style="font-size:50upx"></view>
			<text class="text-light-muted mx-2">购物车还是空的</text>
			<view class="px-2 py-1 border border-light-secondary rounded" hover-class="bg-light-secondary">
				去逛逛
			</view>
		</view>
		<!-- 购物车列表 -->
		<view class="bg-white px-2">
			<view v-for="item,index in list" :key="item.id" class='d-flex a-center py-3 border-bottom border-light-secondary'>
				<label class="radio d-flex a-center j-center flex-shrink" style="width: 100upx;height:100upx;" @click="selectIndex(index)">
					<radio value="1" color="#45C36F" :checked="item.checked" />
				</label>
				<image :src="item.cover" mode="widthFix" style="height: 150rpx;width: 150rpx;" class="border border-light-secondary p-2 rounded flex-shrink">
				</image>
				<!-- 右边区域 -->
				<view class='flex-1 d-flex flex-column pl-2'>
					<view class="text-dark" style="font-size: 35upx;">
						{{item.title}}
					</view>
					<view class="d-flex text-light-muted mb-1">
						<text class="mr-1 ">绿色</text>
						<text class="mr-1 ">健康</text>
						<text class="mr-1 ">次日达</text>
					</view>
					<view class="mt-auto d-flex j-sb">
						<price>{{item.price}}</price>
						<view class="a-self-end">
							<uni-number-box :min="item.minnum" :max="item.maxnum" :value="item.num" @change="changeNum($event,item,index)">
							</uni-number-box>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 占位 -->
		<!-- <view style="height: 100upx;"></view> -->
		<!-- 合计 -->
		<template v-if="!isedit">
			<view v-if="!disabledAll" class="d-flex a-center position-fixed left-0 right-0 bottom-0 j-center border-top border-light-secondary a-stretch "
			 style="height: 100upx;z-index: 100;">
				<label class="radio d-flex a-center j-center flex-shfrink" style="width: 120upx;">
					<radio @click="doSelect" color="#45c36f" :checked="selectAll" :disabled="disabledAll" />
				</label>
				<view class="flex-1 d-flex a-center j-center font-md">
					合计<price>{{countPrice}}</price>
				</view>
				<view class="flex-1 d-flex j-center a-center main-bg-color text-white font-md a-stretch " hover-class="bg-hover-bg-color">
					<view class="d-flex j-center a-center" @click="orderConfirm">
						结算
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view v-if="!disabledAll" class="d-flex a-center position-fixed left-0 right-0 bottom-0 j-center border-top border-light-secondary a-stretch "
			 style="height: 100upx;z-index: 100;">
				<label class="radio d-flex a-center j-center flex-shfrink" style="width: 120upx;">
					<radio @click="doSelect" color="#45c36f" :checked="selectAll" :disabled="disabledAll" />
				</label>
				<view class="flex-1 d-flex a-center j-center font-md ">

				</view>
				<view @click="delGoods" class="flex-1 d-flex j-center a-center main-bg-color text-white font-md a-stretch "
				 hover-class="bg-hover-bg-color">
					<view class="d-flex j-center a-center">
						删除
					</view>
				</view>
			</view>
		</template>
		
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import price from "@/components/common/price.vue"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default {
		mixins:[loading],
		components: {
			uniNavBar,
			price,
			uniNumberBox
		},
		data() {
			return {
				beforReady:true,
				isedit: false,

			}
		},
		onReady() {
			
		
			
		},
		methods: {
			...mapActions(['doSelect', 'doDelGoods']),
			...mapMutations(['selectIndex']),
			selectItem(item) {
				item.checked = !item.checked
				// list[item]
			},
			changeNum(e, item, index) {
				item.num = e
				// console.log(e)
				//请求后台更新购物车数量
				this.$.post('cart-update',{
					id:item.id,
					number:e
				}).then(data=>{
					// console.log(data)
				})
				
				uni.setTabBarBadge({
					index:2,
					text:`${this.countCar}`
				})
			},
			orderConfirm(){
				uni.navigateTo({
					url: '/pages/order-comfirm/order-comfirm'
				});
			},
			delGoods(){
				this.doDelGoods()
				console.log('hello word')
				uni.setTabBarBadge({
					index:2,
					text:23
				})
			}
		},
		computed: {
			...mapState({
				list: state => state.cart.list
			}),
			...mapGetters(['selectAll', 'countPrice', 'disabledAll','countCar']),
		}
	}
</script>

<style>

</style>
