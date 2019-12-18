import unittest
import os
class RunCase(unittest.TestCase):
    def testrun_cases(self):
        case_dir = os.path.join(os.getcwd(),'case')
        suite = unittest.defaultTestLoader.discover(case_dir,'unittest_*.py')

        unittest.TestRunner().run(suite)

if __name__=='__main__':
    unittest.main()