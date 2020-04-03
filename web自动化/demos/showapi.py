from demos.ShowapiRequest import ShowapiRequest


#使用showapi进行图片识别
r = ShowapiRequest("http://route.showapi.com/1274-2","62626","d61950be50dc4dbd9969f741b8e730f5" )
# r.addBodyPara("imgUrl", "http://pic.4j4j.cn/upload/pic/20130528/a9117a5351.jpg")
r.addFilePara("imgFile", "../images/test.png")
res = r.post()
print(res.text) # 返回信息