function changeText(id) {
    id.innerHTML = "Ooops!!!!!!!!"
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myBtn").onclick = displayDate2;
function displayDate2() {
    document.getElementById("demo2").innerHTML = Date();
}

function checkCookies() {
    let text = '';
    if(navigator.cookieEnabled == true) {
        text = 'Cookies are enabled.';
    } else {
        text = 'Cookies are not enabled.';
    }
    document.getElementById("demo3").innerHTML = text;
}