from flask import Flask,render_template,request
from flask import jsonify
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
    """
    if request.headers['Content-Type'] != 'application/json':
        print(request.headers['Content-Type'])
        return render_template('order_test.html');
    """
    print(request.json)

    message='1番の番号札を渡してください'
    return render_template('order_test.html',message=message);
    
    
if __name__ == '__main__':
    app.run(debug=True)
