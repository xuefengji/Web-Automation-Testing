from util.read_config import ReadConfig

class FindElement(object):
    # 获取driver
    def __init__(self,driver):
        self.driver = driver

    #获取配置文件
    def get_value(self,key):
        read_ini = ReadConfig()
        data = read_ini.get_value(key)
        by = data.split('>')[0]
        value = data.split('>')[1]
        try:
            if by == 'id':
                return self.driver.find_element_by_id(value)
            elif by == 'class':
                return self.driver.find_element_by_class_name(value)
            elif by == 'name':
                return self.driver.find_element_by_name(value)
        except:
            self.driver.save_screenshot('E:\\test1.png')
            return None
