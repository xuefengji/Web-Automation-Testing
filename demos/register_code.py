#封装注册代码
from selenium import webdriver
from PIL import Image
from demos.ShowapiRequest import ShowapiRequest
import time
import random

driver = webdriver.Chrome()
#初始化driver
def driver_init(url):
    driver.get(url)
    driver.maximize_window()
    time.sleep(5)

#获取元素
def get_element(id):
    element = driver.find_element_by_id(id)
    return element

#获取随机数
def get_range_user():
    user_info = random.sample('1234sdfdg', 5)
    user_info = ''.join(user_info)
    return user_info


#截图保存
def save_img(filename):
    driver.save_screenshot(filename)  # 截图保存
    button = driver.find_element_by_id('su')
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
def run_main():
    user_name_email = get_range_user() + '@163.com'
    user_name = get_range_user()
    filename = 'E:/images/test.png'
    driver_init('http://www.baidu.com')
    get_element('register_email').send_keys(user_name_email)
    get_element('register_name').send_keys(user_name)
    get_element('register_password').send_keys('11111')
    save_img(filename)
    text = get_img_code(filename)
    time.sleep(5)
    get_element('img_code').send_keys(text)
    driver.close()
