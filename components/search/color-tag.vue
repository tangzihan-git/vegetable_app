<template>
	<view @click="sendSearch(item.name)" class="px-2 py-1 border d-inline-block m-1" :style="getStyle" >{{item.name}}</view>
</template>

<script>
	export default{
		props:{
			item:{
				type:Object
			},
			color:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			sendSearch(name){
				this.$emit('sendSearch',name)
			}
		},
		computed:{
			getStyle(){
				if(!this.color){
					return 'border:0;background:#f5f5f5'
				}
				let color = {
					borderColor:['#eea6aa','#dd6a4b','#98d5d8','#9dbe93','#bccd99'],
					background:['#f8eae9','#ffbec6','#e8f6f6','#e4f5e2','#f2f6e8']
				}
				let index  = Math.floor(Math.random()*color.borderColor.length)
				let borderColor = color.borderColor[index]
				let background = color.background[index]
			   return `background :${background};border-color:${borderColor}`
			}
		}
	}
</script>

<style>
</style>
