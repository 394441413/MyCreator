import xlrd
import os
import sys

reload(sys)
sys.setdefaultencoding("utf-8")

inPath = "Excel/"
outPath = "OutPut/"
param = "js"

class ExcelLoad():
	def __init__(self,_path):
		self.path = _path
		self.data = ""
		self.sheets_name = []

	def covertXml(self,filename):
		self.data = xlrd.open_workbook(self.path)
		self.sheets_name = self.data.sheet_names()
		# for el in self.sheets_name:
		# 	table = self.data.sheet_by_name(el)
		# 	self.loadData(el,table)
		table = self.data.sheet_by_name(self.sheets_name[0])
		self.loadData(filename.split(".")[0],table)

	def loadData(self,_name,_data):
		if(param == "lua"):
			self.loadDataLua(_name,_data)
		elif(param == "json"):
			self.loadDataJson(_name,_data)
		elif(param == "js"):
			self.loadDataJs(_name,_data)

	def loadDataLua(self,_name,_data):
		file = open(outPath + _name + "Data.lua","w")
		file.writelines(_name + " = {\n")
		file.writelines("cc.exports." + _name + "Data = {\n")
		cols = _data.ncols
		rows = _data.nrows
		for i in range(rows):
			if(i >= 2):
				file.write("  [\"" + str(self.isTypeTitle(_data.cell(i,1))) + "\"] = {")
				for j in range(cols):
					if(j >= 2):
						file.write("[\"" + str(_data.cell(1,j).value) + "\"] = ")
						cellString = self.isType(_data.cell(i,j))
						file.write(cellString)
						if(j != cols - 1):
							file.write(",")
				file.write(" },\n")
		file.writelines("}")

	def loadDataJson(self,_name,_data):
		file = open(outPath + _name + "Data.json","w")
		file.writelines("{\n")
		cols = _data.ncols
		rows = _data.nrows
		for i in range(rows):
			if(i >= 2):
				file.write("    \"" + str(self.isTypeTitle(_data.cell(i,1))) + "\" : {")
				for j in range(cols):
					if( j>= 2):
						file.write("\"" + str(_data.cell(1,j).value) + "\" : ")
						cellString = self.isType(_data.cell(i,j))
						file.write(cellString)
						if(j != cols - 1):
							file.write(",")
				file.write(" },\n")
		file.writelines("}")

	def loadDataJs(self,_name,_data):
		file = open(outPath + _name + "Data.js","w")
		file.writelines("var "+_name+"Data = {\n")
		cols = _data.ncols
		rows = _data.nrows
		for i in range(rows):
			if(i >= 2):
				file.write("    " + str(self.isTypeTitle(_data.cell(i,1))) + " : {")
				for j in range(cols):
					if(j >= 1):
						file.write(str(_data.cell(1,j).value) + ": ")
						cellString = self.isType(_data.cell(i,j))
						file.write(cellString)
						if(j != cols - 1):
							file.write(",")
				file.write(" },\n")
		file.writelines("};")
		file.writelines("\n\n")
		file.writelines("module.exports = "+_name+"Data;")

	def isType(self,_st):
		if isinstance(_st.value,str):
			sr = "\"" + _st.value + "\""
		elif _st.ctype == xlrd.XL_CELL_NUMBER:
			if _st.value == int(_st.value):
				sr = str(int(_st.value))
			else:
				sr = str(_st.value)
		elif _st.ctype == xlrd.XL_CELL_BOOLEAN:
			if _st.value == 1:
				sr = "true"
			else:
				sr = "false"
		else:
			sr = "\"" + str(_st.value) + "\""
		return sr

	def isTypeTitle(self,_st):
		if _st.ctype == xlrd.XL_CELL_NUMBER:
			sr = str(int(_st.value))
		else:
			sr = _st.value
		return sr

def main():
	for parent,dirnames,filenames in os.walk(inPath): 
		for filename in filenames: 
			if filename[filename.find("."):] ==".xls" or filename[filename.find("."):] ==".xlsx":                   
				obj = ExcelLoad(os.path.join(parent,filename))
				obj.covertXml(filename)

if __name__ == "__main__":
	main()