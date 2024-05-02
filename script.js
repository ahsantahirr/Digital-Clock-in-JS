
var hours = document.getElementById("hours");
var minutes = document.getElementById("minnutes");
var seconds = document.getElementById("seconds");
var am_pm = document.getElementById("am_pm");
var date = document.getElementById("date");
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");


setInterval(function () {
    let now = new Date();
    hours.innerText = now.getHours();
    minutes.innerText = now.getMinutes();
    seconds.innerText = now.getSeconds();

    if (now.getHours() >= 12) {
        am_pm.innerText = "PM";
    } else {
        am_pm.innerText = "AM";
    }
    if (now.getHours() <= 9) {
        hours.innerText = "0" + now.getHours();
    }
    if (now.getMinutes() <= 9) {
        minutes.innerText = "0" + now.getMinutes()
    }
    if (now.getSeconds() <= 9) {
        seconds.innerText = "0" + now.getSeconds()
    }

    var dayNames = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    date.innerText = now.getDate()
    day.innerText = dayNames[now.getDay()]

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month.innerText = monthNames[now.getMonth()];
    
    year.innerText = now.getFullYear();
}, 1000);


