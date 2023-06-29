 
var counter = document.getElementById("time");

//to check timer is ON/Off
var isStop = true;

//timer variables
var sec = 0;
var min = 0;
var hr = 0;

//to change the time format(one digit to two digit)
var format;

// to start the timer
function start() {

    if (isStop == true) {
        isStop = false;
        timer();
    }
}

// countdown method
function timer() {
    //checking timer is on
    if (isStop == false) {
        //increment of seconds
        sec++;
        //to reset seconds to 0
        if (sec == 60) {
            sec = 0;
            //increment of min after 60 seconds
            min++;
            //to reset minute to 0
            if (min == 60) {
                min = 0
                //increment of hr
                hr++;
            }
        }

        // to display the value
        counter.innerHTML = formatTime(hr) + " : " + formatTime(min) + " : " + formatTime(sec);
        // to delay the timer (1 second)
        setTimeout("timer()", 1000);

    }
}

//to stop the timer
function stop() {
    isStop = true;
}
//to reset the timer
function reset() {
    isStop = true;
    sec = 0;
    min = 0;
    hr = 0;
    // reset the text to 00:00:00
    counter.innerHTML = "00 : 00 : 00";
}

// to check the value it is ones or tens and accordingly return the value
function formatTime(format) {
    //return value 
    return format < 10 ? '0' + format : format;
}