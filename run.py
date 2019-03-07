from flask import Flask,render_template,jsonify,request
import qrcode

import json
from collections import OrderedDict
import pprint

import serverTimer
#listのfilterに使用
import itertools

app = Flask(__name__)
kind_of_card = ["akino","harusu","ashi","tago","oku"]
available_card = [True,True,True,True,True]

Timer1 = serverTimer.Timer()
Timer2 = serverTimer.Timer()

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
    
    print(data["timer"])
    print(data["order"])
    print(data["second"])
    
    if data["order"] == "start":
        if data["timer"] == 1:
            print("Timer1に値をセットするよー")
            Timer1.setTime(float(data["second"]))
        if data["timer"] == 2:
            print("Timer2に値をセットするよー")
            Timer2.setTime(float(data["second"]))

    #print("Timer1:残り"+str(Timer1.getTime())+"秒")
    #print("Timer2:残り"+str(Timer2.getTime())+"秒")
    
    return jsonify(ResultSet=result)

@app.route('/order')
def order():
    print("order.htmlを返すよ")
    return render_template('order.html')

@app.route('/order/new')
def order_test():
    data = request.data.decode('utf-8')
    data = json.loads(data)
    
    print("塩の数")
    print(data["salt"])
    print("チーズの数")
    print(data["cheese"])
    print("マヨの数")
    print(data["mayo"])
    print("七味の数")
    print(data["redPapper"])
    #filterを使ったもっとうまいやり方がある
    for i, bool_card in enumerate(available_card):
        if bool_card == True:
            print("Trueに入ったよ")
            result={
                "Result":{
                    "qrcode":kind_of_card[i]
                }
            }
            available_card[i]=False
            break
        result = {
            "Result":{
                "qrcode":"現在渡せる札はありません"
            }
        }
    #return render_template('orderResult.html',ResultSet=result,data=data)
    return render_template('menu.html')
    
@app.route('/akino')
def akino():
    #とりあえずTimerは1つだと仮定
    message=str(Timer1.getTime()//60)
    return render_template('remainingTime.html',message=message)

@app.route('/haruno')
def harusu():
    message=str(Timer1.getTime()//60)
    return render_template('remainingTime.html',message=message)   
    
if __name__ == '__main__':
    app.run(debug=True)
