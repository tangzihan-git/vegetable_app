<template>
	<view>
		<view>
			<view class="iconfont icon-guanbi d-flex a-center j-center font-lg"  style="width:100rpx;height:120rpx;"
			@click="back">
		</view>
		</view>
		<view class="text-center font-lg" style="font-size:55rpx; padding-top: 130rpx;padding-bottom:70rpx ;">{{status?'账号密码登录':'验证码登录'}}</view>
		<view class="px-2">
			<template v-if="status">
				<!-- 账号密码登录 -->
				<view class="mb-2">
					<input type="text" v-model="username" placeholder="手机号" class="border-bottom uni-input p-2" />
				</view>
				<view class="mb-2 d-flex justify-between">
					<input type="text" v-model="password" placeholder="请输入密码" class="border-bottom uni-input p-2" />
					<view class="border-bottom d-flex a-center font text-muted j-center" style="width:150rpx;">
						忘记密码？
					</view>
				</view>
			</template>
			<!-- 验证码登录 -->
			<template v-else>
				<view class="mb-2 d-flex a-stretch">
					<view class="border-bottom d-flex a-center j-center font px-2">+86</view>
					<input type="text" v-model="username" placeholder="手机号" class="border-bottom uni-input p-2 flex-1" />
				</view>
				<view class="mb-2 d-flex j-sb">
					<input type="text" v-model="code" placeholder="请输入验证码" class="border-bottom uni-input p-2" />
					<view @click="getCode" :class="codeTime>0?'main-bg-color-disabled' :'main-bg-color'" class="text-white border-bottom d-flex a-center font text-muted j-center" style="width:180rpx;">
						{{codeTime>0?codeTime+'秒':'获取验证码'}}
					</view>
				</view>
			</template>
			<!-- 手机号登录 -->
			
			<main-btn :disabled="disabled" @submit="submit">登录</main-btn>
			<view class="d-flex a-center j-center pt-2 pb-4">
				<view  class="text-primary font-sm" @click="changeStatus">{{status?' 验证码登录':'账号密码登录'}}</view>
				<text class="text-muted mx-2">|</text>
				<view class="text-primary font-sm">登录遇到问题</view>
				<text class="text-muted mx-2">|</text>
				<view class="text-primary font-sm" @click="openRegister">立即注册</view>
			</view>
			<view class="d-flex a-center j-center">
				<view style="height: 1rpx; background-color: #dddddd;width: 100rpx;"></view>
				<view class="mx-2 text-muted">社交账号登录</view>
				<view style="height: 1rpx; background-color: #dddddd;width: 100rpx;"></view>
			</view>
			<!--  三方登录-->
			<other-login></other-login>
			<view class="d-flex a-center j-center text-muted">登录即代表同意<text class="text-primary">《用户隐私策略》</text></view>
		</view>
	</view>
</template>

<script>
	// import uniStatusBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import mainBtn from '@/components/common/main-btn.vue'
	import otherLogin from '@/components/common/other-login.vue'
	
	export default {
		components:{
			mainBtn,otherLogin
		},
		data() {
			return {
				status:true,
				username:"17628197244",
				password:"11111111",
				phone:"17628197244",
				code:"1234",
				codeTime:0,
				ema:''
			}
		},
		onLoad(){
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},//初始化表单
			initForm(){
				this.username = this.password = this.phone = this.code = ''
			},
			//切换登录方式
			changeStatus(){
				this.initForm()
				this.status=!this.status
			},//获取验证码
			getCode(){
				if(this.codeTime>0){
					return;
				}
				if(!this.validate())return;
				this.codeTime = 60
				var timer=''
				 timer = setInterval(()=>{
					// clearInterval(timer)
					
					if(this.codeTime>=1){
						this.codeTime--
					}else{
						this.codeTime=0
						clearInterval(timer)
					}
				},1000)
				this.$.get(`sendCode/${this.username}`).then(data=>{
					//缓存验证码
					if(data.statusCode==201){
						this.ema = data.data.key
					}
				})
				
				
			},
			//表单验证
			validate(){
				if(!(/^1[3456789]\d{9}$/.test(this.username))){ 
					uni.showToast({
						title:'无效的手机号',
						'icon':'none'
					})
					return false; 
				}
				 return true
			},
			//注册页
			openRegister(){
			
				uni.navigateTo({
					url: '/pages/register/register'
				});
			},
			//提交
			submit(){
				if(!this.status){
					return this.$.post('ema',{
						captcha_key:this.ema,
						mobile:this.username,
						captcha_code:this.code
					}).then(data=>{
						if(data.data.code==401){
							return this.$U.showToast(data.data.message)
						}
						uni.setStorageSync('access_token', data.data.access_token);
						uni.reLaunch({
						    url: '/pages/my/my?access_token='+data.data.access_token
						});
					})
				}
				
				if(!this.validate())return;
				
				this.$.post('authorizations',{
					username:this.username,
					password:this.password
				}).then(res=>{
					if(res.data.code==401){
						return this.$U.showToast(res.data.message)
					}
					if(res.data.access_token){
						//缓存token方便授权认证
						// console.log(res.data)
						 uni.setStorageSync('access_token', res.data.access_token);
						 uni.reLaunch({
						     url: '/pages/my/my?access_token='+res.data.access_token
						 });
					}
				})
				
			}
		},
		computed:{
			disabled(){
				if((this.username === '' || this.password === '') && (this.username ==='' || this.code === ''))return true;
				return false
			}
		}
	}
</script>

<style>

</style>
