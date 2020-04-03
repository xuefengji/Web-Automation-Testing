from demos.util.excel_util import GetExcelData
from demos.keyword.actionMethod import ActionMethod
class KeywordCase:
    def run_main(self):
        self.action_method = ActionMethod()
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
                    handel_value = excel_data.get_col_value(i,6)
                    expact_result = excel_data.get_col_value(i,7)
                    expact_result_value = excel_data.get_col_value(i,8)
                    # if send_value:
                    self.run_method(method,send_value,handel_value)
                    if expact_result_value:
                        result_value = self.get_expact_result_value(expact_result_value)
                        if result_value[0] == 'text':
                            value = self.run_method(expact_result)
                            if result_value[1] in value:
                                excel_data.write_data(i,'pass')
                            else:
                                excel_data.write_data(i,'fail')
                        elif result_value[0] == 'element':
                            value = self.run_method(expact_result,result_value[1])
                            if value:
                                excel_data.write_data(i,'pass')
                            else:
                                excel_data.write_data(i,'fail')
                        else:
                            print('预期结果为空')

    def run_method(self,method,send_value='',handel_value=''):
        method_value = getattr(self.action_method,method)
        if send_value == '' and handel_value != '':
            result = method_value(handel_value)
        elif send_value != '' and handel_value == '':
            result = method_value(send_value)
        elif send_value != '' and handel_value != '':
            result = method_value(send_value,handel_value)
        else:
            result = method_value()
        return result

    #获取预期结果值
    def get_expact_result_value(self,data):
        result_value = data.split('=')
        return result_value