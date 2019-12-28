import logging
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)   #设置log等级
consle = logging.StreamHandler()
logger.addHandler(consle)
logger.debug("test")
consle.close()
logger.removeHandler(consle)