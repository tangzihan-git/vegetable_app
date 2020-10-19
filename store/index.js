import Vue from 'vue';
import Vuex from 'vuex';
import cart from '@/store/modules/cart.js'
import path from '@/store/modules/path.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		test:1
	},
	mutations:{
		addTest(state){
			
			state.test+=1
			console.log(state.test)
			
		}
	},
	actions:{
		
		doAddTest({commit}){
			
			commit('addTest')
		}
	},
	modules:{
		cart,
		path
	}
})