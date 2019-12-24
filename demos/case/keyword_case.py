from demos.util.excel_util import GetExcelData
from demos.keyword.actionMethod import ActionMethod
class KeywordCase:
    def run_main(self):
        excel_data = GetExcelData()
        #获取行数
        excel_rows = excel_data.get_rows()
        if excel_rows:
            for i in range(1,excel_rows):
                #得到是否运行
                is_run = excel_data.get_col_value(i,3)
                if is_run == 'yes':
                    method = excel_data.get_col_value(i,4)
                    send_value = excel_data.get_col_value(i,5)
                    opera_value = excel_data.get_col_value(i,6)
                    if send_value:
                        pass

    def run_method(self):
        action_method = ActionMethod()