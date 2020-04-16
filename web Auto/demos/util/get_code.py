from PIL import Image
from demos.ShowapiRequest import ShowapiRequest
import time
class GetCode:
    def __init__(self,driver):
        self.driver = driver
    def save_img(self,filename):
        self.driver.save_screenshot(filename)  # 截图保存
        button = self.driver.find_element_by_id('register_code')
        print(button.location)  # {'x': 728, 'y': 192}
        left = button.location['x']
        top = button.location['y']
        right = button.size['width'] + left
        bottom = button.size['height'] + top
        im = Image.open(filename)  # 打开截图
        img = im.crop((left, top, right, bottom))  # 按坐标进行裁剪
        img.save(filename)
        time.sleep(2)
    #获取验证码
    def get_img_code(self,filename):
        self.save_img(filename)
        r = ShowapiRequest("http://route.showapi.com/1274-2", "62626", "d61950be50dc4dbd9969f741b8e730f5")
        # r.addBodyPara("imgUrl", "http://pic.4j4j.cn/upload/pic/20130528/a9117a5351.jpg")
        r.addFilePara("image", filename)
        res = r.post()
        print(res.text)  # 返回信息
        time.sleep(2)
        return res.json()["showapi_res_body"]["texts"]