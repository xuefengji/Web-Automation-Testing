import logging
import os
import datetime

class UserLog:
    def __init__(self):
        self.logger = logging.getLogger()
        self.logger.setLevel(logging.DEBUG)   #设置log等级

        #输出日志
        # consle = logging.StreamHandler()
        # logger.addHandler(consle)

        #写入log文件
        file_path = os.path.dirname(os.path.abspath(__file__))
        # print(file_path)
        time_file = datetime.datetime.now().strftime('%Y.%m.%d')
        # print(time_file)
        log_path = file_path +'/logs/' +time_file + '.log'
        # print(log_path)
        self.file_consle = logging.FileHandler(log_path)
        self.file_consle.setLevel(logging.INFO)
        formatter = logging.Formatter(fmt='%(asctime)s %(filename)s[%(lineno)d] %(message)s')
        self.file_consle.setFormatter(formatter)
        self.logger.addHandler(self.file_consle)

        # self.logger.debug("test")
        # consle.close()
        # logger.removeHandler(consle)


    def get_log(self):
        return self.logger

    def close_handle(self):
        self.file_consle.close()
        self.logger.removeHandler(self.file_consle)