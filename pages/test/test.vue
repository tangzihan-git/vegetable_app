<template>
	<view>
		<!-- 基础用法 -->
		<uni-swipe-action>
		    <uni-swipe-action-item :options="options" @click="onClick" @change="change">
		        <view class='cont'>SwipeAction 基础使用场景</view>
		    </uni-swipe-action-item>
		</uni-swipe-action>
		<!-- 禁止滑动 -->
		<uni-swipe-action>
		    <uni-swipe-action-item :disabled="true" :options="options">
		        <view class='cont'>SwipeAction 基础使用场景</view>
		    </uni-swipe-action-item>
		</uni-swipe-action>
		
		<!-- 按组使用 -->
		<uni-swipe-action>
		    <uni-swipe-action-item :options="options">
		        <view class='cont'>item1</view>
		    </uni-swipe-action-item>
		    <uni-swipe-action-item :options="options">
		        <view class='cont'>item2</view>
		    </uni-swipe-action-item>
		    <uni-swipe-action-item :options="options">
		        <view class='cont'>item3</view>
		    </uni-swipe-action-item>
		</uni-swipe-action>
	
		
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
	    components: {
	        uniSwipeAction,
	        uniSwipeActionItem
	    },
		data(){
		    return {
		      options:[
		        {
		            text: '取消',
		            style: {
		                backgroundColor: '#007aff'
		            }
		        }, {
		            text: '确认',
		            style: {
		                backgroundColor: '#dd524d'
		            }
		        }
		      ]
		    }
		  },
		  methods:{
		    onClick(e){
		      console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
		    },
		    change(open){
		      console.log('当前开启状态：'+ open)
		    }
		  }
	}
	</script>

<style>

</style>
