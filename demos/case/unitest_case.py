import unittest

class FirstCase(unittest.TestCase):

    def setUp(self):
        print('前置条件')

    def tearDown(self) -> None:
        print('后置条件')

    def testfirst(self):
        print('这是第一条case')

    def test01(self):
        print('这是第二条case')


if __name__=='__main__':
    unittest.main()