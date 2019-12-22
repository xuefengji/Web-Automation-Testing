from demos.business.register_business import RegisterBusiness
from selenium import webdriver
import unittest
import HTMLTestRunner
import os
import sys
class FirstCase(unittest.TestCase):
    def setUpClass(cls):
        cls.filename = 'E:/Imooc/xxx.png'
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get('http://www.baidu.com')
        self.register_b = RegisterBusiness(self.driver)

    def tearDown(self):
        for method_name,error in self._outcome.errors:
            if error:
                case_name = self._testMethodName
                file_path = os.path.join(os.getcwd()+'/report/'+ case_name+'.png')
                self.driver.save_screenshot(file_path)
        self.driver.close()

    def test_user_email_error(self):
        email_error = self.register_b.login_email_error('122','999','111111',self.filename)
        # if email_error == True:
        #     print('注册成功，词条case失败')
        #通过assert断言进行判断error
        self.assertFalse(email_error)

    def test_user_name_error(self):
        name_error = self.register_b.login_name_error('122@qq.com', '999', '111111', self.filename)
        # if name_error == True:
        #     print('注册成功，词条case失败')
        self.assertFalse(name_error)

    def test_user_password_error(self):
        password_error = self.register_b.login_password_error('122@qq.com', '999', '111111', self.filename)
        # if password_error == True:
        #     print('注册成功，词条case失败')
        self.assertFalse(password_error)

    def test_user_code_error(self):
        code_error = self.register_b.login_code_error('122@qq.com', '999', '111111', self.filename)
        # if code_error == True:
        #     print('注册成功，词条case失败')
        self.assertFalse(code_error)

    def test_user_register_success(self):
        register_success = self.register_b.login_success('122@qq.com', '999', '111111', self.filename)
        # if register_success == True:
        #     print('注册成功')
        self.assertTrue(register_success)

if __name__=='__main__':
    # unittest.main()
    suite = unittest.TestSuite()
    filename = os.path.join(os.getcwd()+'/report/'+'frist_report.html')
    f = open(filename,'wb')
    # 添加case
    suite.addTest(FirstCase('test01'))
    # unittest.TestRunner().run(suite)
    runner = HTMLTestRunner.HTMLTestRunner(stream=f,verbosity=2)
    runner.run(suite)