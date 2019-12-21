from demos.page.register_page import RegisterPage
from util.get_code import GetCode
class RegisterHandle(object):
    def __init__(self,driver):
        self.driver = driver
        self.register_p = RegisterPage(self.driver)
    #输入邮箱
    def send_user_email(self,email):
        self.register_p.get_user_mail().send_keys(email)

    #输入用户名
    def send_user_name(self,username):
        self.register_p.get_user_name().send_keys(username)

    #输入密码
    def send_user_pwd(self,password):
        self.register_p.get_user_password().send_keys(password)


    #输入验证码
    def send_user_code(self,filename):
        get_code= GetCode(self.driver)
        code = get_code.get_img_code(filename)
        self.register_p.get_user_code().send_keys(code)

    def get_text_elemt(self, info):
        if info == 'email_error':
            text =  self.register_p.get_email_error_text().text
        elif info == 'username_error':
            text =  self.register_p.get_name_error_text().text
        elif info == 'password_error':
            text =  self.register_p.get_password_error_text().text
        else:
            text = self.register_p.get_code_error_text().text
        return text
    #获取点击按钮
    def click_button(self):
        self.register_p.get_button().click()

    def get_button_text(self):
        return self.register_p.get_button().text()