//参考にしたwebサイト　https://www.pazru.net/js/timer/6.html
var timer1; //タイマーを格納する変数（タイマーID）の宣言
var timer2;

var start_timer_num; //start命令を実行したタイマーの番号
var stop_timer_num; //stop命令を実行したタイマーの番号

var server_timer_num //サーバーに命令を送るタイマーの番号
var server_order
//サーバーに送る命令を判別するための変数
/*
0:リセット
1:スタート
2:ストップ
3:終了
*/

//サーバーにタイマーの時間を送信する関数
function serverTimer(server_timer_num, server_order) {
    let min = document.getElementById("timer" + server_timer_num).elements[0].value;
    let sec = document.getElementById("timer" + server_timer_num).elements[1].value;
    let server_sec = (60 * Number(min)) + Number(sec);
    var data = {
        "timer": server_timer_num,
        "order": server_order,
        "second": server_sec
    }
    var hostUrl = location.href + "/start"
    console.log("serverTimerにはいったよ")
    $.ajax({
        type: "post", // method = "POST"
        url: hostUrl,

        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(data),
        timeout: 3000,
        success: function (result) {
            console.log(result);
        }
    });


}

//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function cntStart(start_timer_num) {
    let min = document.getElementById("timer" + start_timer_num).elements[0].value;
    let sec = document.getElementById("timer" + start_timer_num).elements[1].value;
    document.getElementById("timer" + start_timer_num).elements[2].disabled = true;

    if ((min == "") && (sec == "")) {
        alert("時刻を設定してください！");
        reSet();
    } else {
        serverTimer(start_timer_num, "start")
        if (start_timer_num == 1) {
            timer1 = setInterval("countDown(1)", 1000);
        } else if (start_timer_num == 2) {
            timer2 = setInterval("countDown(2)", 1000);
        }
    }
}

//タイマー停止関数
function cntStop(stop_timer_num) {
    document.getElementById("timer" + stop_timer_num).elements[2].disabled = false;
    serverTimer(stop_timer_num, "stop")
    if (stop_timer_num == 1) {
        clearInterval(timer1);
    } else if (stop_timer_num == 2) {
        clearInterval(timer2);
    }
}

//カウントダウン関数
function countDown(start_timer_num) {
    let min = document.getElementById("timer" + start_timer_num).elements[0].value;
    let sec = document.getElementById("timer" + start_timer_num).elements[1].value;

    if ((min == "") && (sec == "")) {
        alert("時刻を設定してください");
        reSet();
    } else {
        if (min == "") min = 0;
        min = parseInt(min);

        if (sec == "") sec = 0;
        sec = parseInt(sec);

        tmWrite(min * 60 + sec - 1, start_timer_num);
    }
}

//残り時間を書き出す関数
function tmWrite(int, start_timer_num) {
    int = parseInt(int);

    if (int <= 0) {
        reSet();
        alert("鍋" + start_timer_num + "ができあがりました");
    } else {
        //残り分数はintを60で割って切り捨てる
        document.getElementById("timer" + start_timer_num).elements[0].value = Math.floor(int / 60);
        //残り秒数はintを60で割った余り
        document.getElementById("timer" + start_timer_num).elements[1].value = int % 60;
    }
}

//フォームを初期状態に戻す（リセット）関数
function reSet() {
    document.getElementById("timer1").elements[0].value = "0";
    document.getElementById("timer1").elements[1].value = "0";
    document.getElementById("timer1").elements[2].disabled = false;
    clearInterval(timer1);
}
