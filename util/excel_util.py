import xlrd
from xlutils.copy import copy

class GetExcelData():
    def __init__(self,path_name=None,index=None):
        if path_name == None:
            path_name = '../config/excel_util.xls'
        if index == None:
            index = 0
        self.excel = xlrd.open_workbook(path_name)
        self.table = self.excel.sheet_by_index(index)


    def get_rows(self):
        result = []
        rows = self.get_lines()
        if rows != None:
            for i in range(rows):
                data = self.table.row_values(i)
                result.append(data)
            return result
        else:
            return None

    #获取行数
    def get_lines(self):
        rows = self.table.nrows
        if rows>=1:
            return rows
        else:
            return None

    #获取单元格数据
    def get_col_value(self,row,col):
        rows = self.get_lines()
        if rows > row:
            data = self.table.cell_value(row,col)
            return data

    #写入数据
    def write_data(self,row,value):
        write_data = copy(self.excel)
        write_index = write_data.get_sheet(0)
        write_index.write(row,7,value)
        write_data.save('../config/excel_util.xls')


if __name__=='__main__':
    get_data = GetExcelData()
    get_data.write_data(3,'test')