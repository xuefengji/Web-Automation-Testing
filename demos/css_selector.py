from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get('http://www.baidu.com')
locator = (By.CSS_SELECTOR,'input[name="wd"]')

wait = WebDriverWait(driver,5).until(EC.visibility_of_element_located(locator),'元素找到')



