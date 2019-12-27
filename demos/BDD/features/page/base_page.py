class BasePage:
    def __init__(self,driver):
        self.driver = driver
    def find_element(self):
        self.driver.find_element_by_id()
