var sec = 0
var min = 0
var hor = 0
var inter

function two(digits){
    if(digits< 10){
    return('0'+digits)
    }else{
        return(digits)
    }
}

function start(){
    counter()
 inter = setInterval(counter, 1000)
}

function pause(){
 clearInterval(inter)
}
function stop(){
    clearInterval(inter)
    sec = 0
    min = 0
    document.getElementById('time').innerText = '00:00:00'
}

function counter(){
   sec++
   if(sec == 60){
       min++
       sec = 0
   }if(min == 60){
       min = 0
       hor++
   }
   document.getElementById('time').innerText = two(hor)+':'+two(min)+':'+two(sec)
}