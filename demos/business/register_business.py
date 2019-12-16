from demos.handle.register_handle import RegisterHandle
class RegisterBusiness(object):
    def __init__(self):
        self.register_h = RegisterHandle()

    #执行操作
    def login(self,email,name,pwd,code):
        self.register_h.send_user_email(email)
        if self.register_h.get_user_text('请输入有效的电子邮件格式'):
            print('邮箱检验成功')
            return True
        elif self.register_h.get_user_text('xxxxx'):
            print('用户名检验成功')
        self.register_h.send_user_name(name)
        self.register_h.send_user_pwd(pwd)
        self.register_h.send_user_code(code)