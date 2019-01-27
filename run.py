from flask import Flask,render_template,jsonify,request
import qrcode

import json
from collections import OrderedDict
import pprint


#listのfilterに使用
import itertools

app = Flask(__name__)
kind_of_card = ["akino","harusu","ashi","tago","oku"]
available_card = [True,True,True,True,True]

@app.route('/')
def menu():
    print("menu.htmlを返すよ")
    return render_template('menu.html')

@app.route('/timer')
def run():
    print("timer.htmlを返すよ")
    return render_template('timer.html')

@app.route('/timer/start', methods=['POST'])
def get_timer_info():
    data = request.data.decode('utf-8')
    data = json.loads(data)
    
    result={
        "Result":{
            "test":"ok"
        }
    }
    print("今から返すよーー")
    return jsonify(ResultSet=result)

@app.route('/order')
def order():
    print("order.htmlを返すよ")
    return render_template('order.html')

@app.route('/order/test', methods=['POST'])
def order_test():
    print("requestを表示するよーーーー");
    result={
        "Result":{
            "test":"ok"
        }
    }
    print("今から返すよーー")
    return jsonify(ResultSet=result)
    
    
if __name__ == '__main__':
    app.run(debug=True)
