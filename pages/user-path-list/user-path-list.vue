<template>
	<view>
		<uni-list-item title="楚绵" showNote extraStyle="width:10%"
		titleStyle="display:flex;color:#F06B0B;font-size:20upx;">
			<block slot="title">
				<text class="mx-1 text-secondary">158****531</text> 
				<text>[默认]</text>
			</block>
			<block slot="note">
				<text>广东 广州 白云区 \n XXXX街道</text>
			</block>
		</uni-list-item>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue";
	export default {
		components: {
			uniListItem
		},
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../user-path-edit/user-path-edit'
			});
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
