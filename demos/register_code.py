#封装注册代码
from selenium import webdriver
from PIL import Image
from demos.ShowapiRequest import ShowapiRequest
from demos.find_element import FindElement
import time
import random


class RegisterFunction(object):
    #初始化
    def __init__(self,url):
        self.driver = self.get_driver(url)

    # 获取driver
    def get_driver(self,url):
        driver = webdriver.Chrome()
        driver.get(url)
        driver.maximize_window()
        time.sleep(5)
        return driver

    # 定位元素
    def send_info(self,key,data):
        return self.find_element(key).sendkeys(data)

    def find_element(self,key):
        element = FindElement(self.driver)
        return element.get_value(key)

    #获取随机数
    def get_range_user(self):
        user_info = random.sample('1234sdfdg', 5)
        user_info = ''.join(user_info)
        return user_info

    #截图保存
    def save_img(self,filename,key):
        self.driver.save_screenshot(filename)  # 截图保存
        button = self.find_element(key)
        print(button.location)  # {'x': 728, 'y': 192}
        left = button.location['x']
        top = button.location['y']
        right = button.size['width'] + left
        bottom = button.size['height'] + top
        im = Image.open(filename)  # 打开截图
        img = im.crop((left, top, right, bottom))  # 按坐标进行裁剪
        img.save(filename)

    #获取验证码
    def get_img_code(filename):
        r = ShowapiRequest("http://route.showapi.com/1274-2", "62626", "d61950be50dc4dbd9969f741b8e730f5")
        # r.addBodyPara("imgUrl", "http://pic.4j4j.cn/upload/pic/20130528/a9117a5351.jpg")
        r.addFilePara("image", filename)
        res = r.post()
        print(res.text)  # 返回信息
        return res.json()["showapi_res_body"]["texts"]

    #主程序
    def run_main(self):
        user_name_email = self.get_range_user() + '@163.com'
        user_name = self.get_range_user()
        filename = 'E:/images/test.png'
        self.save_img('register_code')
        text = self.get_img_code(filename)
        self.send_info('register_email',user_name_email)
        self.send_info('register_name', user_name)
        self.send_info('register_password', '11111')
        code_error = self.find_element('code_error')
        if code_error == None:
            print('注册成功')
        else:
            self.driver.save_screenshot('E:/images/code_error.png')
        time.sleep(5)
        self.send_info('register_code',text)
        self.driver.close()


if __name__=='__main__':
    reg_fun = RegisterFunction('http://www.baidu.com')
    reg_fun.run_main()