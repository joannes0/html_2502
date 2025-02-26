function changeText(id) {
  id.innerHTML = "Ooops!!!!!!!!";
}

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myBtn").onclick = displayDate2;
function displayDate2() {
  document.getElementById("demo2").innerHTML = Date();
}

function checkCookies() {
  let text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("demo3").innerHTML = text;
}

function upperCaseOnChange() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function upperCaseOnInput() {
  const x2 = document.getElementById("fname2");
  x2.value = x2.value.toUpperCase();
}

function mOver(obj) {
  obj.innerHTML = "Thank you";
}
function mOut(obj) {
  obj.innerHTML = "Mouse Over Me";
}


function mDown(obj) {
    obj.style.backgroundColor = " #1ec5e5";
    obj.innerHTML = "Release Me";
}
function mUp(obj) {
    obj.style.backgroundColor = "#d94a38";
    obj.innerHTML = "Thank You";
}