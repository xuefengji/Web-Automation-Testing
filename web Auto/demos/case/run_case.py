import unittest
import os
class RunCase(unittest.TestCase):
    def testrun_cases(self):
        case_dir = os.path.join(os.getcwd())
        suite = unittest.defaultTestLoader.discover(case_dir,'unittest_case*.py')
        unittest.TextTestRunner().run(suite)
if __name__=='__main__':
    unittest.main()