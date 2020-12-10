/**
 * author: xuefengji
 * describe: 查询用户是否有地址
 */
const https = require('https')
//获取user.json中的数据
const userJson = require('../configs/user.json')
const address = require('../api/address')
function getAddress(){
    const options = {
        hostname: "test.api.simplelove.com.cn",
        port: 443, //443
        path: "/api/user/"+userJson.userId+"/address/?sort=%5B%7B%22property%22%3A%22createTime%22%2C%22direction%22%3A%22desc%22%7D%5D",
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
            "Authorization":userJson.token,
            "Host": "test.api.simplelove.com.cn"
        }
    }
    const req = https.request(options,function(res){
            res.setEncoding('utf-8');
            res.on('data', function (data) {  
                // console.log(typeof(data));
                const addressData = JSON.parse(data)
                // console.log(typeof(addressData));
                // console.log(addressData.data.total)
                if(addressData.data.total==0){
                    address()
                } 
                })
            res.on("error", function (e) {
                    console.error("====================================================" + e);
                });
        })
        req.end();
}

// getAddress()

module.exports = getAddress