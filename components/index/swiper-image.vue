<template>
	<view>
	  <swiper :style="getStyle" :circular="circular"  indicator-dots autoplay :interval="3000" :duration="500">
	  	<block v-for="item,index in resdata" :key="index">
			<swiper-item :style="swiperItemStyle">
				<view class="swiper-item" @click="event(item)">
					<image :src="item.src" class="w-100" :style="getStyle" lazy-load></image>
				</view>
			</swiper-item>
	  	</block>
	  
	  </swiper>
	</view>
</template>

<script>
	export default{
		props:{
			resdata:Array,
			swiperStyle:String,
			swiperItemStyle:String,
			height:{
				type:Number,
				default:380
			},
			circular:{
				type:Boolean,
				default:true
			},
			preview:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			event(item,index){
				
				if(this.preview){
					return uni.previewImage({
						current:index,
						urls:this.getUrls,
						indicator:"default"
					})
				}
			}
		},
		computed:{
			getStyle(){
				return `height:${this.height}rpx`
			},
			getUrls(){
				return this.resdata.map(v=>{
					return v.src
				})
			}
		}
	}
</script>

<style>


</style>
