<template>
		<view class="categoryContainer">
			<!-- 头部区 -->
			<view class="header">
				<view class="search">搜索商品</view>
			</view>
			<!-- 内容区 -->
			<view class="contentContainer">
				<!-- 内容左侧区 -->
				<view class="leftContainer">
					<scroll-view class="navList" scroll-y="true" >
						<view class="navItem" 
						:class="{active: navIndex === index}"
						v-for="(item,index) in categoryList"
						:key='item.id'
						@click="changeNavActive(index)"
						>{{item.name}}</view>
					</scroll-view>
				</view>
				<!-- 内容右侧区 -->
				<view class="rightContainer">
					<scroll-view scroll-y="true" class="detailSroll">
						<view class="detailList">
							<image class="cateImg" :src="cateListObj.imgUrl" mode=""></image>
							<view class="detailItem"
							v-for="(item,index) in cateListObj.subCateList"
							:key="item.id"
							>
							<image class="subImg" :src="item.wapBannerUrl" mode=""></image>
							<text class="subName">{{item.name}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryList:[],
				navIndex:0
			};
		},
		mounted(){
			this.getCategoryDatas()
		},
		methods:{
			async getCategoryDatas(){
				this.categoryList = await request('/getCategoryDatas')
			},
			changeNavActive(index){
				this.navIndex = index
			}
		},
		computed:{
			cateListObj(){
				return this.categoryList[this.navIndex]
			}
		}
	}
</script>

<style lang="stylus">
.categoryContainer{
	.header{
		padding: 10rpx 0;
		.search{
			width: 92%;
			height: 60rpx;
			margin: 0 auto;
			line-height: 60rpx;
			text-align: center;
			font-size: 26rpx;
			background-color: #eee;
		}
	}
	.contentContainer{
		display: flex;
		height: calc(100vh-80rpx);
		border-top: 1rpx solid #eee;
		box-sizing: border-box;
		.leftContainer{
				width: 20%;
				height: 100%;
				border-left: 1rpx solid #333;
				box-sizing: border-box;
				.navList{
					height: calc(100vh - 82rpx);
					
				}
				.navItem{
					position: relative;
					font-size: 25rpx;
					line-height: 80rpx;
					height: 80rpx;
					text-align: center;
					&.active:before{
						position: absolute;
						top: 10rpx;
						left: 6rpx;
						content:'';
						width: 2rpx;
						height: 60rpx;
						background: #BB2C08;
					}
				}
				
		}
		.rightContainer{
				width: 80%;
				.detailSroll{
					 height: calc(100vh - 82rpx);
					.cateImg{
						display: block;
						width: 520rpx;
						height: 190rpx;
						margin: 10rpx auto;
					}
					.detailList{
						display: flex;
						flex-wrap: wrap;
						.detailItem{
							width: 33.33%;
							text-align: center;
							.subImg{
								height: 144rpx;
								width: 90%;
							}
							.subName{
								font-size: 24rpx;
							}
						}
					}
					
				}
		}
	}
 
}
</style>
