from PIL import Image
import pytesseract
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('http://www.baidu.com')
driver.save_screenshot('E:\\test1.png')    #截图保存
button = driver.find_element_by_id('su')
print(button.location)     #{'x': 728, 'y': 192}
left = button.location['x']
top = button.location['y']
right = button.size['width'] + left
bottom = button.size['height'] + top
im = Image.open('E:\\test1.png')   #打开截图
img = im.crop((left,top,right,bottom))   #按坐标进行裁剪
img.save('E:\\test.png')

image = Image.open('../images/test.png')
text = pytesseract.image_to_string(image)
print(text)
driver.close()