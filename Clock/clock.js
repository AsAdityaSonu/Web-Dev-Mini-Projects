let element =document.getElementById('time');

setInterval(()=>{
    //Code
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec= date.getSeconds();

    let time= `${hours}:${min}:${sec}`
    element.innerHTML = time;       //NoERROR

}, 1000);