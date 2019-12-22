import xlrd

class GetExcelData():
    def __init__(self,path_name=None,index=None):
        if path_name == None:
            path_name = './../../config/excel_data.xls'
        if index == None:
            index = 0
        self.excel = xlrd.open_workbook(path_name)
        self.table = self.excel.sheet_by_index(index)
        self.rows = self.table.nrows


    def get_rows(self):
        result = []
        for i in range(self.rows):
            data = self.table.row_values(i)
            result.append(data)
        return result
