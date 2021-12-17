# Script in python to sort datas on the basis of id 
import requests

res = requests.get('http://localhost:3003/books')
data = res.json()['data']

for i in sorted(data, key = lambda i: i['id']):
	print(f'id: {i["id"]}, name: {i["name"]}')
