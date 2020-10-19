export default{
	state:{
		list:[
			{
				name:"summer",
				phone:"32432453",
				path:"四川省 成都市 郫县",
				detailPath:"左滑进行修改操作",
				isDefault:false
			},
			{
				name:"summer",
				phone:"32432453",
				path:"四川省 南充市 营山县",
				detailPath:"左滑进行删除操作",
				isDefault:false
			}
		]
		
	},
	getters:{
		//返回一个默认地址
		defaultPath:(state)=>{
			return state.list.filter(v=>{
				return v.isDefault
			})
		}
	},
	mutations:{
		//创建收货地址
		createPath(state,item){
			state.list.unshift(item)
		},
		delPath(state,index){
			state.list.splice(index,1)
		},
		//修改收货地址
		updatePath(state,{index,item}){
			for(let key in item){
				state.list[index][key] = item[key]
			}
			// state.list[index] = item //数据不刷新
			console.log(state.list[index])
		},
		//取消默认地址
		removeDefault(state){
			state.list.forEach(v=>{
				if(v.isDefault){
					v.isDefault = false
				}
			})
		}
	},
	actions:{
		//修改地址
		updatePathAction({commit},obj){
			if(obj.item.isDefault){
				commit('removeDefault');
			}
			commit('updatePath',obj)
		},
		//添加地址
		createPathAction({commit},item){
			if(item.isDefault){
				commit('removeDefault');
			}
			commit('createPath',item)
		}
	}
}