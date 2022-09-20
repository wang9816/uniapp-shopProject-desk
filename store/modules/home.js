import request from "../../utils/request.js"
const state = {
	initData:'init data',
	indexData:{},
}
const mutations = {
	changeIndexDataMutation(state,indexData){
		state.indexData = indexData
	}
	
}
const actions = {
	async getINdexDataAction({commit}){
		let res = await request('/getIndexData')
		commit('changeIndexDataMutation',res)
	}
}

export default {
	state,
	mutations,
	actions
}