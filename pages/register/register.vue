<template>
	<view>
		<view>
			<view class="iconfont icon-guanbi d-flex a-center j-center font-lg"  style="width:100rpx;height:120rpx;"
			@click="back">
		</view>
		</view>
		<view class="text-center font-lg" style="font-size:55rpx; padding-top: 130rpx;padding-bottom:70rpx ;">用户注册</view>
		<view class="px-2">
			<template v-if="status">
				<!-- 账号密码登录 -->
				
				<view class="mb-2 d-flex a-stretch">
					<view class="border-bottom d-flex a-center j-center font px-2">+86</view>
					<input type="text" v-model="phone" placeholder="手机号" class="border-bottom uni-input p-2 flex-1" />
				</view>
				<view class="mb-2 d-flex a-stretch">
					
					<input type="text" v-model="username" placeholder="用户名" class="border-bottom uni-input p-2 flex-1" />
				</view>
				<view class="mb-2 d-flex a-stretch">
					<input type="text" v-model="password" placeholder="密码" class="border-bottom uni-input p-2 flex-1" />
				</view>
				<view class="mb-2 d-flex j-sb">
					<input @focus='focus' type="text" v-model="random" placeholder="请输入图形验证码" class="border-bottom uni-input p-2" />
					<view @click="getImgCode" class="text-white border-bottom d-flex a-center font text-muted j-center" style="width:180rpx;">
						<image :src="imgCode" style='width:180rpx;height: 80rpx;' mode=""></image>
					</view>
				</view>
				<view class="mb-2 d-flex j-sb">
					<input type="text" v-model="code" placeholder="请输入验证码" class="border-bottom uni-input p-2" />
					<view @click="getCode" :class="codeTime>0?'main-bg-color-disabled' :'main-bg-color'" class="text-white border-bottom d-flex a-center font text-muted j-center" style="width:180rpx;">
						{{codeTime>0?codeTime+'秒':'获取验证码'}}
					</view>
				</view>
			</template>
			<!-- 手机号登录 -->
			
			<main-btn :disabled="disabled" @submit="submit">注册</main-btn>
			<view class="d-flex a-center j-center pt-2 pb-4">
				<view  class="text-primary font-sm" @click="openlogin">{{'返回登录'}}</view>
				<text class="text-muted mx-2">|</text>
				<view class="text-primary font-sm">注册遇到问题</view>
			</view>
			<view class="d-flex a-center j-center text-muted">注册即代表同意<text class="text-primary">《用户隐私策略》</text></view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import mainBtn from '@/components/common/main-btn.vue'
	import otherLogin from '@/components/common/other-login.vue'
	
	export default {
		components:{
			uniStatusBar,mainBtn,otherLogin
		},
		data() {
			return {
				status:true,
				username:"tzh001",
				password:"TZH0810",
				phone:"17628197244",
				code:"1234",
				codeTime:0,
				imgCode:'',
				random:'',
				captcha_key:'',
				verification_key:''
				
			}
		},
		onLoad(){
			this.getImgCode()
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
			openlogin(){
				uni.navigateTo({
				    url: '/pages/login/login'
				});
			},
			//图像验证码
			getImgCode(){
				if(this.phone==''){
					this.$U.showToast('请输入手机号')
					return false;
				}
				uni.request({
				    url: `${this.$C.webUrl}/captchas`, //仅为示例，并非真实接口地址。
				    data: {
				        phone:this.phone
				    },
					method:'POST',
				    success: ({data}) => {
						// console.log(data)
						if(data.errors){
							this.$U.showToast(data.errors.phone[0])
							return false;
						}
						
						this.imgCode = data.captcha_image_content;
						//缓存验证码码key
						uni.setStorage({
						    key: 'captcha_key',
						    data: data.captcha_key,
						});
				    }
				});
			},
			//获取短信验证码
			getCode(){
				if(this.codeTime>0){
					return;
				}
				if(!this.validate())return;
				uni.getStorage({
				    key: 'captcha_key',
				    success: (res)=>{
					   uni.request({
					       url: `${this.$C.webUrl}/verificationCodes`, 
						   method:'POST',
					       data: {
					           captcha_key:res.data,
							   captcha_code:this.random
					       },
					       success: ({data}) => {
					           // console.log(res.data);
							   if(data.message){
								   this.$U.showToast(data.message)
								   return false;
							   }else{
								   // console.log(data)
								   //存储短信验证码key
								   uni.setStorage({
								       key: 'verification_key',
								       data: data.key,
								   });
								   //计时开始
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
							   }
					           // this.text = 'request success';
					       }
					   }); 
				    }
					
				});
			},
			//表单验证
			validate(){
				if(!(/^1[3456789]\d{9}$/.test(this.phone))){ 
					uni.showToast({
						title:'无效的手机号',
						'icon':'none'
					})
					return false; 
				}
				if(this.random==''){
					uni.showToast({
						title:'请输入图像验证码',
						'icon':'none'
					})
					return false;
				}
				 return true
			},
			focus(){
				this.getImgCode()
			},
			
			//提交
			submit(){
				// console.log('trst')
				if(!this.validate())return;
				uni.getStorage({
				    key: 'verification_key',
				    success: (res)=>{
						uni.request({
						    url: `${this.$C.webUrl}/users`, //仅为示例，并非真实接口地址。
							method:'POST',
						    data: {
						       verification_key:res.data,
							   verification_code:this.code,
							   password:this.password,
							   username:this.username,		   
						    },
						    success: (res) => {
								if(res.data.message){
									this.$U.showToast('验证码错误请重新输入')
									return false;
								}
						        this.$U.showToast('注册成功，请返回登录')
								uni.removeStorage({key: 'captcha_key'})
								uni.removeStorage({key: 'verification_key'})
								
						    }
						});
					}
				})
			}
		},
		computed:{
			disabled(){
				if((this.username === '' || this.password === '') && (this.phone ==='' || this.code === ''))return true;
				return false
			}
		}
		
	}
</script>

<style>

</style>
