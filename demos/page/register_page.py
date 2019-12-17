from demos.base.find_element import FindElement
class RegisterPage:
    def __init__(self,driver):
        self.fd = FindElement(driver)

    #获取邮箱
    def get_user_email(self):
        return self.fd.get_value("register_email")

    #获取username
    def get_user_name(self):
        return self.fd.get_value("register_name")

    #获取密码
    def get_user_password(self):
        return self.fd.get_value("register_password")

    #获取验证码
    def get_user_code(self):
        return self.fd.get_value("register_code")

    #获取text
    def get_email_error_text(self):
        return self.fd.get_value("email_error")

    def get_name_error_text(self):
        return self.fd.get_value("name_error")

    def get_password_error_text(self):
        return self.fd.get_value("password_error")

    def get_code_error_text(self):
        return self.fd.get_value("code_error")

    #获取注册按钮
    def get_button(self):
        return self.fd.get_value("register_button")