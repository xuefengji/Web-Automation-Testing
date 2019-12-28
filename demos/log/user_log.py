import logging
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)   #设置log等级

#输出日志
# consle = logging.StreamHandler()
# logger.addHandler(consle)

#写入log文件
file_consle = logging.FileHandler('./logs/test.log')
formatter = logging.Formatter(fmt='%(asctime)s %(filename)s[%(lineno)d] %(message)s')
file_consle.setFormatter(formatter)
logger.addHandler(file_consle)

logger.debug("test")
# consle.close()
# logger.removeHandler(consle)
file_consle.close()
logger.removeHandler(file_consle)