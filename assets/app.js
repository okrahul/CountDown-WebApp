const countdown = () =>{
    const countDate = new Date('Jan 09, 2022 15:37:25').getTime();
    
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the fuck does time work?

    const second = 1000;
    const minute = second * 60;
    const hour = 1000 * 60 * 60;
    const day = 1000 * 60 * 60 * 24;

    // calculate  the shit

    const textDay = Math.floor(gap / day);
    
    const textHour = Math.floor((gap % day) / hour);

    const textMinute = Math.floor((gap % hour) / minute);

    const textSecond = Math.floor((gap % minute) / second);
 
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
    console.log(gap);

    if (gap<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }

    
};

setInterval(countdown, 1000);
