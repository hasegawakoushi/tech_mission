//getElement()内にhtmlのidを入れ取得
var object = document.getElementById("greeting");
//text取得
var text = object.innerText;
alert(text);

var text = prompt("表示するメッセージ","初期値");
var object = document.getElementById("greeting");
object.innerText = text;
//var text = object.innerText
//alert(text)
alert(object.innerText);