/**
 * author: xuefengji
 * describe: 添加地址
 */
const https = require('https')
//获取user.json中的数据
const userJson = require('../configs/user.json')

function address(){
//发送数据
    const requestData = JSON.stringify({
    "userId":userJson.userId,
    "receiver":userJson.receiver,
    "phone":userJson.phone,
    "province":userJson.province,
    "provinceNo":userJson.provinceNo,
    "cityNo":userJson.cityNo,
    "city":userJson.city,
    "districtNo":userJson.districtNo,
    "district":userJson.district,
    "addrInfo":userJson.addrInfo,
    "street":userJson.street,
    "streetNo":userJson.streetNo,
    "field1":userJson.field1,
    "lat":userJson.lat,
    "lng":userJson.lng})
//参数
    const options = {
        hostname: "test.api.simplelove.com.cn",
        port: 443, //443
        path: "/api/address/" ,
        json:true,
        method: "POST",
        rejectUnauthorized: false,
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
            "Authorization":userJson.token,
            "Host": "test.api.simplelove.com.cn"
        }

    };
    const req = https.request(options,function(res){
        res.setEncoding('utf-8');
        res.on('data', function (chunk) {  
            console.log(chunk.toString());  
            })
        res.on("error", function (e) {
                console.error("====================================================" + e);
            });
    })
    req.write(requestData);
    req.end();
}

// address()
module.exports = address

  

