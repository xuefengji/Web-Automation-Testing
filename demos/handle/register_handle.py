from demos.page.register_page import RegisterPage
class RegisterHandle(object):
    def __init__(self):
        self.register_p = RegisterPage()
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
    def send_user_code(self,code):
        self.register_p.get_user_code().send_keys(code)

    def get_text_elemt(self, info):
        if info == 'email_error':
            text =  self.register_p.get_email_error_text().get_attribute('value')
        elif info == 'username_error':
            text =  self.register_p.get_name_error_text().get_attribute('value')
        elif info == 'password_error':
            text =  self.register_p.get_password_error_text().get_attribute('value')
        else:
            text = self.register_p.get_code_error_text().get_attribute('value')
        return text
    #获取点击按钮
    def click_button(self):
        self.register_p.get_button().click()