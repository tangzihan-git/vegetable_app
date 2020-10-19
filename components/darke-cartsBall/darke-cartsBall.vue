<template>
	<view>
		<view class="ball-wrap" v-for="(item, k) of balls" :key="k"
			:style="{
				opacity: item.show,
				top: item.start.y + 'px',
				left: item.start.x + 'px',
				transitionDuration: (item.show?(duration/1000):0)+'s',
				'transition-timing-function': xTimeFunction[!item.ani?0:1],
				transform: 'translate3d('+item.offset.x+'px,0,0)',
				zIndex
			}"
		>
			<view class="ball" :class="{ball3d:is3dSheet}"
				:style="{
					marginLeft: -size/2 + 'px',
					marginTop: -size/2 + 'px',
					padding: size + 'px',
					backgroundImage: ballImage,
					backgroundColor: ballColor,
					transitionDuration: (item.show?(duration/1000):0)+'s',
					transform: 'translate3d(0,'+item.offset.y+'px,0)',
					'transition-timing-function': yTimeFunction[item.ani?0:1]
				}"
			></view>
		</view>
	</view>
</template>

<script>
	// 节流函数
	function debounce(func, delay, context) {
		return function () {
			func.id && clearTimeout(func.id);
			func.id = setTimeout(() => {
				func.apply(context,arguments)
			}, delay)
		}
	}
	export default {
		props: {
			size: {
				type: Number,
				default: 18
			},
			is3dSheet: {
				type: Boolean,
				default: true
			},
			endPos: {
				type: Object,
				default(){
					return {
						x: 150,
						y: 150
					}
				}
			},
			duration: {
				type: Number,
				default: 1000
			},
			zIndex: {
				type: Number,
				default: 9999
			},
			ballImage: {
				type: String,
				default: ''
			},
			ballColor: {
				type: String,
				default: 'red'
			}
		},
		data() {
			return {
				balls: [],
				xTimeFunction: ['ease-in', 'ease-out'],
				yTimeFunction: ['cubic-bezier(0.23,-0.85, 0.84,-0.01)', 'cubic-bezier(0, 0.59, 0.46, 2.15)']
			};
		},
		mounted() {
			this.initBalls()
		},
		methods: {
			drop(pos){
				let ball
				for (var i = 0; i < this.balls.length; i++) {
					if(this.balls[i].show){continue}
					ball = this.balls[i]
				}
				ball.start.x = pos.x
				ball.start.y = pos.y
				ball.offset.x = this.endPos.x - pos.x 
				ball.offset.y = this.endPos.y - pos.y
				if(ball.offset.y>0){
					ball.ani = 1
				}else{
					ball.ani = 0
				}
				ball.show = 1
				
				// 无限加载
				this.balls.push({
					show: 0,
					start: {
						x: 0,
						y: 0
					},
					offset: {
						x: 0,
						y: 0
					},
					ani: 0
				})
				setTimeout(()=>{
					ball.show = 0
				}, this.duration)
				debounce(this.initBalls, this.duration+200, this)()
			},
			initBalls(){
				const balls = []
				// 解决微信自带浏览器渲染慢问题，先加载几个
				for (var i = 0; i < 3; i++) {
					const ball = {
						show: 0,
						start: {
							x: 0,
							y: 0
						},
						offset: {
							x: 0,
							y: 0
						},
						ani: 0
					}
					balls.push(ball)
				}
				this.balls = balls
			}
		}
	}
</script>

<style lang="stylus" scoped>
.ball-wrap
	position fixed
	transform translateZ(0)
	z-index 999
	transition-property transform
	pointer-events none
	.ball
		width 0
		height 0
		padding 40rpx
		border-radius 40rpx
		overflow hidden
		background-repeat no-repeat
		background-size cover
		transform translateZ(0)
		transition-property transform opacity
		&.ball3d
			position relative
			&::after
				content ''
				display block
				position absolute
				left -15rpx
				right -15rpx
				top -15rpx
				bottom -15rpx
				opacity 0.35
				background-image radial-gradient(30% 30%,white,transparent,black)
				background-size 100%
				background-repeat no-repeat
				background-position: -5rpx -5rpx;
</style>
