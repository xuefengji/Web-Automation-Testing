import ddt
import unittest
from demos.business.register_business import RegisterBusiness
from selenium import webdriver
import unittest
import HTMLTestRunner
import os
@ddt.ddt
class FirstDdtCase(unittest.TestCase):
    def setUpClass(cls):
        cls.filename = 'E:/Imooc/xxx.png'

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get('http://www.baidu.com')
        self.register_b = RegisterBusiness(self.driver)

    def tearDown(self):
        for method_name, error in self._outcome.errors:
            if error:
                case_name = self._testMethodName
                file_path = os.path.join(os.getcwd() + '/report/' + case_name + '.png')
                self.driver.save_screenshot(file_path)
        self.driver.close()

        # 测试数据，使用ddt.data

    @ddt.data(
        ['123@qq.com','1233','1111','code','assertCode']
    )
    # 对于元组、列表、字典等数据需要对数据进行分解
    @ddt.unpack
    def test_register_login(self,email,username,password,code,assertCode):
        text = self.register_b.register_function(email,username,password,code,assertCode)
        self.assertFalse(text,'测试失败')


if __name__=='__main__':
    unittest.main()