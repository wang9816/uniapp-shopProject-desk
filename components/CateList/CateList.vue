<template>
	<view class="catedetailContainer">
		<!-- 轮播图 -->
	<swiper class="swiperContainer" :indicator-dots="true" :autoplay="true" :interval="8000" :duration="1000">
		<swiper-item class="swiperItem"
		v-for="(item,index) in cateObj.category.bannerUrlList"
		:key="item"
		>
			<view class="swiper-item">
				<image class="bannerImg" :src="item" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
	<!-- title -->
	<text class="title">{{cateObj.category.name}}</text>
	<text class="desc">{{cateObj.category.frontDesc}}</text>
		<!-- 内容区 -->
	<view class="contentList">
		<view class="shopItem"
		 @click="toDetail(item)"
		v-for="(item,index) in cateObj.itemList"
		:key="item.id"
		>
			<image class="shopImg" :src="item.listPicUrl"></image>
			<view class="shopItemName">{{item.name}}</view>
			<view class="retailPrice">￥{{item.retailPrice}}</view>
		</view>
	</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				indexCateList:[]
			};
		},
		props:['navId'],
		mounted(){
			this.getIndexCateList()
			
		},
		methods:{
			async getIndexCateList(){
				this.indexCateList = await request('/getIndexCateList')
			},
			/* 跳转至详情页 */
			toDetail(item){
				wx.navigateTo({
					url:'/pages/detail/detail?shopItem='+JSON.stringify(item)
				})
			}
		},
		computed:{
			cateObj(){
				return this.indexCateList.find(item=>item.category.parentId===this.navId);
			}
		}
	}
</script>

<style lang="stylus">
.catedetailContainer{
	.swiperContainer{
		.swiperItem{
			.swiper-item{
				.bannerImg{
					width: 100%;
					height: 370rpx;
				}
			}
		}
	}
	.title{
		display: block;
		text-align: center;
		font-size: 34rpx;
		color: #333;
		line-height: 70rpx;
	}
	.desc{
		display: block;
		text-align: center;
		font-size: 24rpx;
		color: #999;
		line-height: 40rpx;
	}
	.contentList{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0 20rpx;
		/* &:after{
			content: '';
			width: 344rpx;
		} */
	
		.shopItem{
			width: 344rpx;
			&:last-child{
				margin-right: auto;
				
			}
			.shopImg{
				width: 344rpx;
				height: 344rpx;
			}
			.shopItemName{
				font-size: 26rpx;
				line-height: 50rpx;
				
			}
			.retailPrice{
				color: #BB2C08;
			}
		}
	}
}
</style>