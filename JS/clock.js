const items = document.querySelectorAll(".dates");
let countdownDate = new Date(2023, 0, 9, 0, 0, 0).getTime();
function getCountdownTime(){
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    let days = Math.floor(distance/oneDay);
    let hours = Math.floor((distance%oneDay)/oneHour);
    let minutes = Math.floor((distance%oneHour)/oneMinute);
    let seconds = Math.floor((distance%oneMinute)/1000);
    const values = [days, hours, minutes, seconds];
    items.forEach(function(item, index){
        item.textContent = values[index];
    })
}
getCountdownTime();
setInterval(getCountdownTime, 1000);