from demos.handle.register_handle import RegisterHandle
class RegisterBusiness(object):
    def __init__(self,driver):
        self.register_h = RegisterHandle(driver)

    def send_info(self,email,name,pwd,code):
        self.register_h.send_user_email(email)
        self.register_h.send_user_name(name)
        self.register_h.send_user_pwd(pwd)
        self.register_h.send_user_code(code)
        self.register_h.click_button()

    #执行操作
    def login_email_error(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
        if self.register_h.get_text_elemt('email_error')==None:
            print('邮箱检验不成功')
            return True
        else:
            return False

    def login_name_error(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
        if self.register_h.get_text_elemt('name_error')==None:
            print('用户名检验不成功')
            return True
        else:
            return False

    def login_password_error(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
        if self.register_h.get_text_elemt('password_error')==None:
            print('密码检验不成功')
            return True
        else:
            return False

    def login_code_error(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
        if self.register_h.get_text_elemt('code_error')==None:
            print('验证码检验不成功')
            return True
        else:
            return False


    def login_success(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
