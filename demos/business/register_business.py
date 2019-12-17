from demos.handle.register_handle import RegisterHandle
class RegisterBusiness(object):
    def __init__(self):
        self.register_h = RegisterHandle()

    def send_info(self,email,name,pwd,code):
        self.register_h.send_user_email(email)
        self.register_h.send_user_name(name)
        self.register_h.send_user_pwd(pwd)
        self.register_h.send_user_code(code)

    #执行操作
    def login_email_error(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
        if self.register_h.get_text_elemt('email_error'):
            print('邮箱检验成功')
            return True
        else:
            return False

    def login_name_error(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
        if self.register_h.get_text_elemt('name_error'):
            print('用户名检验成功')
            return True
        else:
            return False

    def login_password_error(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
        if self.register_h.get_text_elemt('password_error'):
            print('密码检验成功')
            return True
        else:
            return False

    def login_code_error(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
        if self.register_h.get_text_elemt('code_error'):
            print('验证码检验成功')
            return True
        else:
            return False


    def login_success(self,email,name,pwd,code):
        self.send_info(email,name,pwd,code)
