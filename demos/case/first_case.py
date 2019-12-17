from demos.business.register_business import RegisterBusiness
class FirstCase(object):
    def __init__(self):
        self.register_b = RegisterBusiness()
    def test_user_email_error(self):
        email_error = self.register_b.login_email_error('122','999','111111','111111')
        if email_error == True:
            print('注册成功，词条case失败')
        #通过assert断言进行判断error

    def test_user_name_error(self):
        name_error = self.register_b.login_name_error('122@qq.com', '999', '111111', '111111')
        if name_error == True:
            print('注册成功，词条case失败')

    def test_user_password_error(self):
        password_error = self.register_b.login_password_error('122@qq.com', '999', '111111', '111111')
        if password_error == True:
            print('注册成功，词条case失败')

    def test_user_code_error(self):
        code_error = self.register_b.login_code_error('122@qq.com', '999', '111111', '111111')
        if code_error == True:
            print('注册成功，词条case失败')

    def test_user_register_success(self):
        register_success = self.register_b.login_success('122@qq.com', '999', '111111', '111111')
        if register_success == True:
            print('注册成功')