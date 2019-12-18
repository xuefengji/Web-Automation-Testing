import unittest

class FirstCase(unittest.TestCase):

    def setUp(self):
        print('前置条件')

    def tearDown(self) -> None:
        print('后置条件')

    def testfirst(self):
        print('这是第001条case')

    def test01(self):
        print('这是第002条case')


if __name__=='__main__':
    # unittest.main()
    #添加容器
    suite = unittest.TestSuite()
    #添加case
    suite.addTest(FirstCase('test01'))
    unittest.TestRunner().run(suite)
