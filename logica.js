var timer = hora = min = seg = totalhora = 0;
function relogio(){
    timer = new Date();
    hora = timer.getHours();
    min = timer.getMinutes();
    seg = timer.getSeconds();

    if(hora < 10){
        hora = "0" + hora;
    }else if(min < 10){
        min = "0" + min;
    }else if(seg < 10){
        seg = "0" + seg;
    }

    
    totalhora = hora + ":" + min + ":" + seg;
    document.getElementById("tex").value = totalhora;
}

var tempo = setInterval(relogio, 1);