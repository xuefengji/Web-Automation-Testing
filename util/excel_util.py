import xlrd

class GetExcelData():
    def __init__(self,path_name=None,index=None):
        if path_name == None:
            path_name = './../../config/excel_data.xls'
        if index == None:
            index = 0
        self.excel = xlrd.open_workbook(path_name)
        self.table = self.excel.sheet_by_index(index)


    def get_rows(self):
        result = []
        for i in range(self.get_lines()):
            data = self.table.row_values(i)
            result.append(data)
        return result

    #获取行数
    def get_lines(self):
        rows = self.table.nrows
        return rows

    #获取单元格数据
    def get_col_value(self,row,col):
        data = self.table.cell_value(row,col)
        return data

