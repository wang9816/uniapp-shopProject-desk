	import Vue from "vue"
const state = {
	cartList: [
		{
				"selected": false,
				"count": 2,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1579033,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1579033,
		    "sellVolume": 2650,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/4221151d461f269166b8cec5122105d8.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539930846261,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575512579911,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 699,
		    "categoryL2Id": 0,
		    "retailPrice": 455,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 5,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "寻找珍贵的触感，女式V领纯小山羊绒衫2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/8b861989c878661d75f9b18440af2a86.png",
		    "pointsPrice": 0,
		    "simpleDesc": "性感显瘦，简洁坦率",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300011084,
		    "displaySkuId": 300011105,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
				"selected": true,
				"count": 3,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1579038,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1579038,
		    "sellVolume": 573,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/6c6ef2b0a0c379ce87bfd3b67d031a5d.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539335121356,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1576475638162,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 899,
		    "categoryL2Id": 0,
		    "retailPrice": 585,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 3,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "给你妈妈的温暖，女式加厚圆领山羊绒2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/aa947e0c4f062fecc07ce4bffed08535.png",
		    "pointsPrice": 0,
		    "simpleDesc": "以井然有序的优雅迎浪漫冬季",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300005452,
		    "displaySkuId": 300005451,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	]
}


const mutations = {
	/* 
	 添加购物车:已有:+1,无:加项
	 */
	 addShopItemMutation(state,shopItem){
		let shopObj = state.cartList.find(item=>item.id === shopItem.id)
		if (shopObj) {
			shopObj.count+=1
		}else{
			shopItem.selected = true
			shopItem.count = 1
			Vue.set(shopItem,'count',1)
			Vue.set(shopItem,'selected',true)
			state.cartList.push(shopItem)
		}
		
	},
	/* 计数+,-   交互反馈设置弹窗*/
	changeCountMutation(state,{isAdd, index}){
		
		if (isAdd) {
			state.cartList[index].count += 1
		}else{
			if(state.cartList[index].count > 1){
				state.cartList[index].count -= 1
			}else{
				uni.showModal({
					title: '您确定删除吗?',
					success: function (res) {
						if (res.confirm) {
							state.cartList.splice(index,1)
						} else if (res.cancel) {
							state.cartList[index].count = 1
						}
					}
				});
				
				
			}
			
		}
	},
	/* 选中状态按钮的切换 */
	changeSelectedMutation(state,{isSelected, index}){
		state.cartList[index].selected = isSelected
	},
 /* 底部:全选和全不选 */
	changeAllSelectedMutation(state,isSeleted){
		state.cartList.forEach(item => item.selected=isSeleted)
	}
}

const actions = {}

const getters = {
		/* 全选和全不选 */
	isAllSelected(state){
		return state.cartList.every(item => item.selected)
	},
	/* 总数量 */
	totalCount(state){
		return state.cartList.reduce((pre,next)=>{
			return pre += next.selected ? next.count : 0
		},0)
	},
	/* 总价格 */
	totalPrice(state){
		return state.cartList.reduce((pre,next)=>{
			return pre += next.selected ? (next.retailPrice * next.count) : 0
		},0)
	}
	
}

export default {
	state,
	mutations,
	actions,
	getters
}