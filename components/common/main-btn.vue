<template>
	<view class="py-2 px-3">
		<button :disabled="disabled" class="main-bg-color text-white" :class="disabled?'main-bg-color-disabled':''" @click="submit">
			<slot></slot>
		</button>
		
	</view>
</template>
`
<script>
	export default{
		props:{
			disabled:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			submit(){
				this.$emit('submit')
			}
		}
	}
</script>

<style>
</style>
