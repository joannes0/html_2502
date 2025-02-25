document.querySelector(".s1 .myBtn").addEventListener("click", displayDate);
function displayDate() {
  document.querySelector(".s1 .demo").innerHTML = Date();
}

document.querySelector(".s2 .myBtn").addEventListener("click", function () {
  alert("Hello World!!!!!!!!!!!");
});

document.querySelector(".s3 .myBtn").addEventListener("click", myFunction);
function myFunction() {
  alert("Hello world@@@@@@@@@@");
}

{
  let button = document.querySelector(".s4 .myBtn");
  if (button) {
    button.addEventListener("click", myFunction);
    button.addEventListener("click", someOtherFunction);
  }
  function myFunction() {
    alert("Hello World!!!!!!!!!!");
  }
  function someOtherFunction() {
    alert("Hello Other World@@@@@@@@@@");
  }
}

{
  let button = document.querySelector(".s5 .myBtn");
  if (button) {
    button.addEventListener("mouseover", myFunction);
    button.addEventListener("click", mySecondFunction);
    button.addEventListener("mouseout", myThirdFunction);
  }
  function myFunction() {
    document.querySelector(".s5 .demo").innerHTML += "마우스 오버 <br>";
  }
  function mySecondFunction() {
    document.querySelector(".s5 .demo").innerHTML += "클릭 <br>";
  }
  function myThirdFunction() {
    document.querySelector(".s5 .demo").innerHTML += "마우스 아웃 <br>";
  }
}

window.addEventListener("resize", function () {
  this.document.querySelector(".s6 .demo").innerHTML = Math.random();
});

{
  let p1 = 5;
  let p2 = 7;
  document.querySelector(".s7 .myBtn").addEventListener("click", function () {
    myFunction(p1, p2);
  });
  function myFunction(a, b) {
    document.querySelector(".s7 .demo").innerHTML = a * b;
  }
}

document.querySelector(".s8 .myDiv1 .myP1").addEventListener(
  "click",
  function () {
    alert("흰색 요소 클릭");
  },
  false
);
document.querySelector(".s8 .myDiv1").addEventListener(
  "click",
  function () {
    alert("주황색 요소 클릭");
  },
  false
);
document.querySelector(".s8 .myDiv2 .myP2").addEventListener(
  "click",
  function () {
    alert("흰색 요소 클릭");
  },
  true
);
document.querySelector(".s8 .myDiv2").addEventListener(
  "click",
  function () {
    alert("주황색 요소 클릭");
  },
  true
);

{
  document
    .querySelector(".s9 .myDiv")
    .addEventListener("mousemove", myFunction);
  function myFunction() {
    document.querySelector(".s9 .demo").innerHTML = Math.random();
  }

}
function removeHandler() {
    document
      .querySelector(".s9 .myDiv")
      .removeEventListener("mousemove", myFunction);
  }