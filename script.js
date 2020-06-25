function setTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s= today.getSeconds();
    var date = today.toDateString();

    m=checkTime(m);
    s=checkTime(s)

    var t =setTimeout(setTime,500);

    document.getElementById("words").innerHTML =
    h + ":" + m + ":"+ s;
    document.getElementById("d").innerHTML = 
    date
};

function checkTime(i){
    if (i<10){
        i = "0"+i;
    };
    return i;
  
};
