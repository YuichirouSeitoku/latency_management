from flask import Flask,render_template,jsonify
import qrcode

app = Flask(__name__)

@app.route('/')
def menu():
    return render_template('menu.html')

@app.route('/timer')
def run():
    return render_template('timer.html')

@app.route('/timer/start', methods=['POST'])
def get_timer_info():
    timer_num = request.form['timer'];
    order = request.form['order'];
    print("timer_num")
    print(timer_num)
    print("order")
    print(order)
    response = Response()
    response.status_code = 200
    return response

@app.route('/order')
def order():
    return render_template('order.html')

@app.route('/order/test', methods=['POST'])
def order_test():
    print(request)
    result={
        "Result":{
            "test":ok
        }
    }
    return jsonify(ResultSet=result)
    
    
if __name__ == '__main__':
    app.run(debug=True)
