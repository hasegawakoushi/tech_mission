function datetimeshow(){
    var datetime = new Date();

    var year = datetime.getFullYear();
    //月は−１が帰ってくるため注意
    var month = datetime.getMonth() + 1;
    var day = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();

    var text = prompt("ここにメッセージを表示","ここに日時を表示します");
    //型を気にする必要なし
    var time = year + "年" + month + "月" + day +"日"
                + hour + "時" + minute + "分" + second +"秒"
    //ボタン及びscriptのId(div内のId)を取得
    var object = document.getElementById("datetime");
    //「現在時刻取得」を取得し、変更
    object.innerText = time;
}
