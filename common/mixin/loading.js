export default{
	data(){
		return {
			beforReady:true
		}
	},
	onReady(){
		// 页面被渲染出来执行
		this.$nextTick(()=>{
			this.beforReady=false
		})
	}
}