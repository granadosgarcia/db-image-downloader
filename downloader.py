#downloader in Python
import json 
from requests import get
from pprint import pprint

def downloadFile(url, file_name):
    with open("./allimgs/"+file_name, "wb") as file:
        response = get(url)
        file.write(response.content)

with open('images2.json') as data_file:
    data = json.load(data_file)

for image in data:
    downloadFile(image["imgURL"], image["name"])

