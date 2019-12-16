from demos.business.register_business import RegisterBusiness
class FirstCase(object):
    def __init__(self):
        self.register_b = RegisterBusiness()
    def test_user_email_error(self):
        self.register_b.login('122','999')
        #通过assert断言进行判断error

    def test_user_name_error(self):
        login('122','999')

    def test_user_password_error(self):
        login('122','999')

    def test_user_code_error(self):
        login('122','999')

    def test_user_register_success(self):
        login('122','999')