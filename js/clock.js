function clock(){

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, 0);
    const day = String(today.getDate()).padStart(2, 0);

    const dateString = year + "년 " + month + "월 " + day+"일";

    const hours = String(today.getHours()).padStart(2, 0);
    const minutes = String(today.getMinutes()).padStart(2, 0);
    const seconds = String(today.getSeconds()).padStart(2, 0);

    const timeString = hours + ":" + minutes + ":" + seconds;

    document.querySelector("#clock").innerText = `${dateString} ${timeString}`;
}

clock();
setInterval(clock, 1000);



