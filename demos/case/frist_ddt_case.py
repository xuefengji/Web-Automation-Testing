import ddt
import unittest

@ddt.ddt
class FirstDdtCase(unittest.TestCase):
    #测试数据，使用ddt.data
    @ddt.data(
        [1,2],
        (3,4)
    )
    #对于元组、列表、字典等数据需要对数据进行分解
    @ddt.unpack
    def test_add(self,a,b):
        print(a+b)

if __name__=='__main__':
    unittest.main()