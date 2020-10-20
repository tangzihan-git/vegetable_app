import $ from '@/common/request.js';
export default{
	state:{
		list:[
			// {
			// 	checked:false,
			// 	id:1,
			// 	'title':'商品标题',
			// 	cover:'/static/logo.png',
			// 	price:234,
			// 	num:1,
			// 	minnum:1,
			// 	maxnum:10,	
			// },
			// {
			// 	checked:false,
			// 	id:2,
			// 	'title':'商品标题',
			// 	cover:'/static/logo.png',
			// 	price:234,
			// 	num:4,
			// 	minnum:1,
			// 	maxnum:400,
				
			// }
		],
		//选中商品id
		selectedList:[]
	},
	getters:{
		//是否全选
		selectAll:(state)=>{
			// console.log(state.list.length === state.selectedList.length)
			return state.list.length === state.selectedList.length
		},
		//合计价格
		countPrice:(state)=>{
			//
			let total = 0
			
			state.list.forEach(v=>{
				if(state.selectedList.indexOf(v.id)>-1){
					total+=v.price*v.num
				}
			})
			return total
		},
		//合计商品
		countCar:(state)=>{
			let arr = state.list.map(function(item){
			    return item.num;
			})
			if(arr.length==0)return
			let res = arr.reduce(function(tem,item,index){
			    return tem+item;
			})
			return res
		},
		//禁止全选
		disabledAll:(state)=>{
			return state.list.length === 0
		}
	},
	mutations:{
		//单个选择
		selectIndex(state,index){
			let id = state.list[index].id
			//判断商品是否在选中列表
			let i = state.selectedList.indexOf(id)
			if(i>-1){
				//之前选中，取消选中
				state.list[index].checked=false
				return state.selectedList.splice(i,1)
			}else{
				//之前没有选中
				state.list[index].checked=true
				return state.selectedList.push(id)
			}
		},
		//添加购物车
		addCar(state,item){
			
			let goods = state.list.find(car=>{
				return car.id == item.id
			})
			
		
			if(!goods){
				state.list.push({
					'checked':false,
					'id':item.id,
					'title':item.goods_name,
					'cover':item.primary_pic_url,
					'price':item.unit_price,
					'num':1,
					'minnum':1,
					'maxnum':10,	
				})
			}else{
				goods.num++
			}
			console.log(state.list)
		},
		//删除选中商品
		delGoods(state){
			state.list = state.list.filter(v=>{
				return state.selectedList.indexOf(v.id)===-1
			})
			
			
		},
		//全选
		selectAll(state){
			state.selectedList = state.list.map(v=>{
				v.checked = true
				return v.id
			})//将购物车所有商品id赋予list
			
		},
		//取消全选
		unselectAll(state){
			state.selectedList = []
			state.list.forEach(v=>{
				v.checked = false
			})
		},
		updateCar(state,items){
			items.forEach(item=>{
				let obj =  {
					checked:false,
					id:item.id,
					'title':item.goods_name,
					cover:item.primary_pic_url,
					price:item.market_price,
					num:item.number,
					minnum:1,
					maxnum:10,	
			    }
			    state.list.push(obj)
				// console.log(state.list)
				
			})
		
		
		},
		cartest(){
			console.log('123')
		}
	},
	actions:{
		//全选与取消全选
		doSelect({commit,getters}){
			
			getters.selectAll?commit('unselectAll'):commit('selectAll')
			// console.log(getters.selectAll)
		},
		doDelGoods({commit,rootState}){
			
			uni.showModal({
				content:'是否要删除选中',
				success:(res)=>{
					if(res.confirm){
						let ids = rootState.cart.selectedList
						for(let i = 0 ;i<ids.length;i++){
							//发送后台删除购物车
							$.post('cart-delete',{
								goodsIds:ids[i]
							}).then(data=>{
								//更新角标
								uni.setTabBarBadge({
									index:2,
									text:`${data.data.data.cartTotal.checkedGoodsCount}`
								})
								
							})
						}
					
						commit('delGoods')
						uni.showToast({
							title: '删除成功'
						});
					}
				}
			})
		},
		doAddCar({commit},item){
			//发送请求添加购物车到数据库
			$.post('cart-add',{
				'goodsId':item.id,
				'product_id':1,
				'number':1
			}).then(data=>{
				if(data.data.code){}
			})
			commit('addCar',item)
		},
		//更新购物粗
		doUpdateCar({commit},items){
			$.get('cart-index').then(data=>{
				
				commit('updateCar',data.data.data.cartList)
			})
			
			
		}
	}
}