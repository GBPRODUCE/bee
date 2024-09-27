import json
from datetime import datetime

# 這是一個範例腳本，會自動更新儲存庫中的 data.json 文件

data_file = "data.json"

# 嘗試讀取現有的 JSON 文件
try:
    with open(data_file, 'r') as f:
        data = json.load(f)
except FileNotFoundError:
    data = {}

# 更新資料：加入當前日期和時間
data[datetime.now().strftime("%Y-%m-%d %H:%M:%S")] = "New data entry"

# 將資料寫回 JSON 文件
with open(data_file, 'w') as f:
    json.dump(data, f, indent=4)

print("Data updated successfully.")
