//参考にしたwebサイト　https://www.pazru.net/js/timer/6.html
var timer1; //タイマーを格納する変数（タイマーID）の宣言
var timer2;

var start_timer_num;
var stop_timer_num;

//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function cntStart(start_timer_num) {
    console.log(start_timer_num);
    console.log(document.getElementById("timer" + start_timer_num));
    document.getElementById("timer" + start_timer_num).elements[2].disabled = true;
    if (start_timer_num == 1) {
        timer1 = setInterval("countDown(1)", 1000);
    } else if (start_timer_num == 2) {
        timer2 = setInterval("countDown(2)", 1000);
    }
}

//タイマー停止関数
function cntStop(stop_timer_num) {
    console.log(stop_timer_num)
    document.getElementById("timer" + stop_timer_num).elements[2].disabled = false;
    if(stop_timer_num==1){
        clearInterval(timer1);
    }
    else if(stop_timer_num==2){
        clearInterval(timer2);
    }
}

//カウントダウン関数
function countDown(start_timer_num) {
    var min = document.getElementById("timer"+start_timer_num).elements[0].value;
    var sec = document.getElementById("timer" + start_timer_num).elements[1].value;

    if ((min == "") && (sec == "")) {
        alert("時刻を設定してください！");
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
