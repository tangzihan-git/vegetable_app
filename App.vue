<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style>
	/*每个页面公共css */
	@import './common/uni.css';
	/* 布局库 */
	@import './common/tzh-layout.css';
	/* 图标库 */
	@import './common/icon.css';
	/* 引入动画库 */
	@import './common/animate.css';
	/* 引入项目公共样式文件 */
	@import './common/common.css';
	/* 全局 */
	@import "./common/iconfont-shucai.css";
</style>
