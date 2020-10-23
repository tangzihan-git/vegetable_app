import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'
import divider from '@/components/common/divider.vue'
import noThing from '@/components/common/no-thing.vue';
import loading from "@/components/common/loading.vue";
import loadingPlus from "@/common/mixin/loading-plus.vue"

Vue.component('divider',divider)
Vue.component('no-thing',noThing)
Vue.component('loading',loading)
Vue.component('loading-plus',loadingPlus)
//配置文件
import $C from '@/common/config.js'
// 挂载配置文件
// 访问 直接 this.$C.webUrl
Vue.prototype.$C = $C
//助手函数
import $U from '@/common/util.js'
Vue.prototype.$U = $U
//请求函数
import $ from '@/common/request.js'
Vue.prototype.$ = $;
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App,
	// store
	
})
app.$mount()
