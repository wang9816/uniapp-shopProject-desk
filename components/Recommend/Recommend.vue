<template>
	<view class="recommendContainer">
	<!-- 轮播图 -->
	<swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="8000" :duration="5000">
		<swiper-item>
			<view class="swiper-item">
				<image src="https://yanxuan.nosdn.127.net/fbb75aa5dfea5242193b16beb6c112a3.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="https://yanxuan.nosdn.127.net/static-union/16624564108d1d32.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="https://yanxuan.nosdn.127.net/static-union/1660726777ac1bbd.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image>
			</view>
		</swiper-item>
	</swiper>
	<!-- 三个政策图标 -->
	<view class="policyDisplayList" v-if="indexData.policyDescList">
		<view class="policyItem" v-for="(item,index) in indexData.policyDescList" :key="index">
			<image :src="item.icon" mode="true"></image>
			<text>{{item.desc}}</text>
		</view>
	</view>
	<!-- 商品分类10个图标 -->
	<view class="kingKongList" v-if="indexData.kingKongModule">
		<view class="kingKongItem" v-for="(item,index) in indexData.kingKongModule.kingKongList">
			<image :src="item.picUrl"></image>
			<text>{{item.text}}</text>
		</view>
	</view>
	<!-- 图片展示区 -->
	<view class="categoryPictureContainer">
		<view class="categoryItem"
		v-for="(item,index) in indexData.categoryModule"
		:key="item.titlePicUrl"
		>
			<image class="titlePic" :src="item.titlePicUrl" mode=""></image>
			<scroll-view class="shopListScroll" scroll-x="true" enable-flex>
				<view class="shopItem"
				v-for="item2 in item.itemList"
					:key="item2.id"
				>
					<image class="shopPic" :src="item2.showPicUrl" mode=""></image>
					<view class="shopName">{{item2.name}}</view>
				</view>
				<view class="shopItem checkMore">
					查看更多>
				</view>
			</scroll-view>
		</view>
	</view>
	
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
			
			};
		},
		mounted(){
		
		},
		methods:{
		
		},
		computed:{
			...mapState({
				indexData:state=>state.home.indexData
			})
			
		},
	}
</script>

<style lang="stylus">
.recommendContainer{
	height: 100%;
	.banners{
		width: 100%;
		height: 350rpx;
		image{
			width: 100%;
			height: 350rpx;
		}
	}
	.policyDisplayList{
		display: flex;
		
		.policyItem{
			vertical-align: middle;
			flex:1;
			text-align: center;
			image{
				width: 32rpx;
				height: 32rpx;
				
			}
			text{
				font-size: 24rpx;
			}
		}
	}
	.kingKongList{
		
		display: flex;
		flex-wrap: wrap;
		.kingKongItem{
			display: flex;
			width: 20%;
			flex-direction: column;
			align-items: center;
			image{
				width: 110rpx;
				height: 110rpx;
				margin: 20rpx 0;
			}
			text{
				font-size: 24rpx;
			}
		}
	}
	.categoryPictureContainer{
		.categoryItem{
			margin-bottom: 20rpx;
			.titlePic{
				width: 100%;
				height: 370rpx;
			}
			.shopListScroll{
				white-space: nowrap;
				.shopItem{
					&.checkMore{
						width: 200rpx;
						height: 200rpx;
						background-color: #eee;
						text-align: center;
						font-size: 28rpx;
						line-height: 200rpx;
					}
					display: inline-block;
					width: 200rpx;
					vertical-align: top;
					margin-right: 20rpx;
					.shopPic{
						width: 200rpx;
						height: 200rpx;
						background-color: #eee;
					}
					.shopName{
						font-size: 26rpx;
						white-space: pre-wrap;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
				
			}
		}
		
	}
}
</style>