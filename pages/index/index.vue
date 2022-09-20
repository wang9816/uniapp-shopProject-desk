<template>
	<view class="indexContainer">
		<!-- 头部区 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" placeholder="search..." placeholder-class="placehold">
			</view>
			<button>会飞的鱼</button>
		</view>
		<!-- 导航滑块 -->
		<scroll-view scroll-x class="navScroll" enable-flex>
			<view class="navItem" :class="{active:navIndex===-1}" @click="changeNavRecommendActive()">推荐</view>
			<view class="navItem" :class="{active:navIndex===index}"
			@click="changeNavActive(index,item.L1Id)"
			v-for="(item,index) in indexData.kingKongModule.kingKongList"
			:key='item.L1Id'
			>{{item.text}}</view>
			
		</scroll-view>
		<!-- 内容区 -->
		<scroll-view scroll-y="true">
			<Recommend v-if="navId===0"></Recommend>
			<CateList v-else :navId='navId'></CateList>
		</scroll-view>
	</view>
</template>

<script>
	import request from '../../utils/request.js';
	import {mapActions,mapState} from 'vuex';
	import Recommend from '../../components/Recommend/Recommend.vue'
	import CateList from '../../components/CateList/CateList.vue'
	export default {
		data() {
			return {
				//indexData:{},
				navIndex:-1,//对应active
				navId:0  //对应tab栏内容区
			};
		},
		components:{
			Recommend,
			CateList
		},
		mounted(){
			//console.log(this.$store.state.home.initData);
			//this.getIndexData()
			//this.$store.dispatch('getINdexDataAction')
			this.getINdexDataAction()
		},
		methods:{
			...mapActions({
				getINdexDataAction:'getINdexDataAction'
			}),
			/* 获取数据 */
			/* async getIndexData(){
				//小程序可以直接获取
				let res = await request('/getIndexData');
				this.indexData = res
				
			}, */
			/* 导航的切换 */
			changeNavActive(index,navId){
				this.navIndex = index
				this.navId = navId
			},
			changeNavRecommendActive(){
				this.navIndex = -1
				this.navId = 0
			},
			
		},
		computed:{
			...mapState({
				indexData:state=>state.home.indexData
			})
		}
	}
</script>

<style lang="stylus">
/* 头部 */
.indexContainer{
	.header{
		display: flex;
		padding: 10rpx 0;
		.logo{ 
			width: 140rpx;
			height: 40rpx;
			margin: 10rpx 20rpx;
		}
		.search{
			position: relative;
			width: 420rpx;
			height: 60rpx;
			background: #eee;
			input{
				width: 370rpx;
				margin-left: 50rpx;
				height: 60rpx;
				font-size: 26rpx
			}
			.iconfont{
				position: absolute;
				font-size: 30rpx;
				top: 15rpx;
				left: 8rpx
			}
			.placehold{
				font-size: 26rpx
			}
			
		}
		button{
			width: 144rpx;
			height: 60rpx;
			line-height: 60rpx;
			font-size: 24rpx;
			padding: 0 4rpx;
		}
	}
}
/* 导航 */
.navScroll{
	display: flex;
	height: 82rpx;
	white-space: nowrap;
	.navItem{
		display:table;
		width: 140rpx;
		height: 80rpx;
		box-sizing: border-box;
		text-align: center;
		line-height: 80rpx;
		font-size: 26rpx;
		&.active{
		border-bottom: 1rpx solid #BB2C08
	}
	}
	
}
	
	

</style>
