function cities(element) {
    alert("Loading weather report...");    
}

function acceptCookie(cookieBox) {
document.querySelector(cookieBox).remove();
}

function conversionFtoC(element, tod24, tod18, tom27, tom19, fri21, fri16, sat26, sat21) {
    var arrID = [tod24, tod18, tom27, tom19, fri21, fri16, sat26, sat21]
    if (element.value=="°C") {
    for (var i=0; i<arrID.length; i++) {
        var degNum = document.querySelector(arrID[i]).innerText;
    var sumC = Math.round(((degNum-32)*5)/9);
        document.querySelector(arrID[i]).innerText = sumC;
    }
}
else {
    for (var i=0; i<arrID.length; i++) {
        var degNum = document.querySelector(arrID[i]).innerText;
    var sumF = Math.floor (((degNum*9)/5)+32);
    document.querySelector(arrID[i]).innerText = sumF;
    }
}
// else {
//     document.querySelector(fri16).innerText = "16";
//     document.querySelector(tod18).innerText = "18"; 
//     document.querySelector(tom19).innerText = "19";
//     document.querySelector(fri21).innerText = "21";
//     document.querySelector(sat21).innerText = "21";
//     document.querySelector(tod24).innerText = "24";
//     document.querySelector(sat26).innerText = "26";
//     document.querySelector(tom27).innerText = "27";
// }
}

