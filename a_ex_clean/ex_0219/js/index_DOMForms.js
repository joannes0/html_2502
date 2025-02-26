function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function myFunction() {
  // id="numb"인 입력 필드의 값을 가져옵니다.
  let x = document.getElementById("numb").value;
  // x가 숫자가 아니거나 1보다 작거나 10보다 큰 경우
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo1").innerHTML = text;
}