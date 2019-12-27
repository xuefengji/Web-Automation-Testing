from features.page.base_page import BasePage
from selenium.webdriver.common.by import By
class RegisterPage(BasePage):
    def __init__(self,context):
        super(RegisterPage, self).__init__(context.driver)

    def send_user_email(self,useremail):
        self.find_element(By.ID,'register_email').send_keys(useremail)

    def send_user_name(self,username):
        self.find_element(By.ID,'register_nickname').send_keys(username)

    def send_password(self,password):
        self.find_element(By.ID,'register_password').send_keys(password)

    def send_code(self,code):
        self.find_element(By.ID,'code').send_keys(code)

    def register_get_title(self):
        return self.get_title()

    def click_btn(self):
        self.find_element(By.ID, 'register_btn').click()

    def get_code_error(self):
        return self.find_element(By.ID,'code_text').text()