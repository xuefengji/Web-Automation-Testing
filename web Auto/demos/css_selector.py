from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
import time
import random

for i in range(5):
    username = random.sample('1234sdfdg',5)
    user = ''.join(username)
    print(user)

driver = webdriver.Chrome()
driver.get('http://www.baidu.com')
time.sleep(5)
element = driver.find_elements_by_css_selector('input[name=wd]')[0]
element.__getattribute__('value')


locator = (By.CSS_SELECTOR,'input[name="wd"]')

wait = WebDriverWait(driver,5).until(EC.visibility_of_element_located(locator),'元素找到')

driver.close()

