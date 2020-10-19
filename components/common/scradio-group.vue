<template>
	<view class="row">
		<view class="span24-8 px-2 mb-2" v-for="item,index in label.list" :key="index">
			<view style="font-weight: 200;" class=" px-2 py-1 bg-light-secondary font-md text-center " :class="label.selected==index?'scradio-active':''" @click="changeRadio(index)">
				{{item.name}}
			</view>
		</view>
	
	</view>
</template>

<script>
	export default{
		props:{
			label:Object
		},
		methods:{
			changeRadio(index){
				this.$emit('change',index)
			}
		}
	}
</script>

<style>
.scradio-active{
	background-color: #E3F8E9!important;
	color:#45C36F;
	font-weight: 100
}
</style>
