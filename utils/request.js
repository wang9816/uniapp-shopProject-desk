import config from "./config.js"
export default (url,data={},method='GET') =>{
	return new Promise((resolve,reject)=>{
		//uniapp API
		uni.request({
			url: config.host+url,
			//url:url,
			data,
			method,
			success: (res) => {
				resolve(res.data);
			},
			fail:(err) => {
				reject(err);
			}
		})
	})
}