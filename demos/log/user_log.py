import logging
import os
import datetime
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)   #设置log等级

#输出日志
# consle = logging.StreamHandler()
# logger.addHandler(consle)

#写入log文件
file_path = os.path.dirname(os.path.abspath(__file__))
print(file_path)
time_file = datetime.datetime.now().strftime('%Y.%m.%d')
print(time_file)
log_path = file_path +'/logs/' +time_file + '.log'
print(log_path)
file_consle = logging.FileHandler(log_path)
formatter = logging.Formatter(fmt='%(asctime)s %(filename)s[%(lineno)d] %(message)s')
file_consle.setFormatter(formatter)
logger.addHandler(file_consle)

logger.debug("test")
# consle.close()
# logger.removeHandler(consle)
file_consle.close()
logger.removeHandler(file_consle)