//getElementByID
const element = document.getElementById("intro");

document.getElementById("demo1").innerHTML =
  "소개 문단의 텍스트는 다음과 같습니다: " + element.innerHTML;

//getElementsByTagName
const element2 = document.getElementsByTagName("p");

document.getElementById("demo2").innerHTML =
  "첫 번째 문단(index 0)의 텍스트는 다음과 같습니다.: " + element2[0].innerHTML;

//getElementById("main")
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo3").innerHTML =
  'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

//클래스 이름으로 HTML 요소 찾기
const x2 = document.getElementsByClassName("intro2");
document.getElementById("demo4").innerHTML =
  'The first paragraph (index 0) with class="intro" is: ' + x2[0].innerHTML;

//CSS 선택기로 HTML 요소 찾기
const x3 = document.querySelectorAll("p.intro3");
document.getElementById("demo5").innerHTML =
  'The first paragraph (index 0) with class="intro3" is: ' + x3[0].innerHTML;


//HTML 객체 컬렉션으로 HTML 요소 찾기
const x4 = document.forms["frm1"];
let text = "";
for (let i = 0; i < x4.length ;i++) {
    text += x4.elements[i].value + "<br>";
}
document.getElementById("demo6").innerHTML = text;