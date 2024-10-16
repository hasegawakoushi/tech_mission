function omikujishow(){
    var array = ["大吉","中吉","小吉"];
    var i = Math.random();
    var i2 = Math.floor(i*3);
    var message = array[i2];
    if(message=="大吉"){
        message = message + "おめでとう！";
    }else if(message=="中吉"){
        message = message + "ぼちぼち";
    }else{
        message = message + "どんまい";
    }

    var object = document.getElementById("omikuji");
    object.innerText = message;
}