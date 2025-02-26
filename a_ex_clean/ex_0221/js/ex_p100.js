// p100 -------------------------------------------------------------
const s1 = document.querySelectorAll(".s1 div");
const s1E = s1[0];
if (s1E) {
  let tv = new Object();
  tv.color = "white";
  tv.price = 300000;
  tv.info = function () {
    s1E.innerHTML += `<p>tv 색상: ${this.color}</p><br>`;
    s1E.innerHTML += `<p>tv 가격: ${this.price}</p><br>`;
  };
  let car = {
    color: "black",
    price: 5000000,
    info: function () {
      s1E.innerHTML += `<p>car 색상: ${this.color}</p><br>`;
      s1E.innerHTML += `<p>car 가격: ${this.price}</p><br>`;
    },
  };
  s1E.innerHTML = `<h1>tv 객체 메서드 호출</h1><br>`;
  tv.info();
  s1E.innerHTML += `<h1>car 객체 메서드 호출</h1><br>`;
  car.info();
}

// p103----------------------------------------------------
const s2 = document.querySelectorAll(".s2 div");
const s2E = s2[0];
if (s2E) {
  let today = new Date();
  let nowMonth = today.getMonth(),
    nowDate = today.getDate(),
    nowDay = today.getDay();

  s2E.innerHTML += `<h1>오늘 날짜 정보</h1>`;
  s2E.innerHTML += `<p>현재 월: ${nowMonth}</p><br>`;
  s2E.innerHTML += `<p>현재 일: ${nowDate}</p><br>`;
  s2E.innerHTML += `<p>현재 요일: ${nowDay}</p><br>`;

  let worldcup = new Date(2002, 4, 31);
  let theMonth = worldcup.getMonth(),
    theDate = worldcup.getDate(),
    theDay = worldcup.getDay();

  s2E.innerHTML += `<h1>월드컵 날짜 정보</h1>`;
  s2E.innerHTML += `<p>2002월드컵 몇 월: ${theMonth}</p><br>`;
  s2E.innerHTML += `<p>2002월드컵 며칠: ${theDate}</p><br>`;
  s2E.innerHTML += `<p>2002월드컵 무슨 요일: ${theDay}</p><br>`;
}

const s3 = document.querySelectorAll(".s3 div");
const s3E = s3[0];
if (s3E) {
  let today = new Date();
  let nowYear = today.getFullYear();

  let theDate = new Date(nowYear, 11, 31);
  let diffDate = theDate.getTime() - today.getTime();

  let result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
  s3E.innerHTML += `<h1>연말까지 남은 D-day정보</h1>`;
  s3E.innerHTML += `<p>연말 D-day: ${result}일 남았습니다.</p><br>`;
}
// P104--------------------------------------------------------------
const s4 = document.querySelectorAll(".s4 div");
const s4E = s4[0];
if (s4E) {
  let num = 2.1234;

  let maxNum = Math.max(10, 5, 8, 30), // 최대
    minNum = Math.min(10, 5, 8, 30), // 최소
    roundNum = Math.round(num), // 소수점 첫째자리 반올림
    floorNum = Math.floor(num), // 소수점 첫째자리 내림
    ceilNum = Math.ceil(num), // 소수점 첫째자리 올림
    rndNum = Math.random(), // 0과 1 사이의 난수 반환
    piNum = Math.PI; // 원주율 상수 반환

  s4E.innerHTML += `<h1>여러가지 수학 객체</h1>`;
  s4E.innerHTML += `<p>${maxNum}</p><br>`;
  s4E.innerHTML += `<p>${minNum}</p><br>`;
  s4E.innerHTML += `<p>${roundNum}</p><br>`;
  s4E.innerHTML += `<p>${floorNum}</p><br>`;
  s4E.innerHTML += `<p>${ceilNum}</p><br>`;
  s4E.innerHTML += `<p>${rndNum}</p><br>`;
  s4E.innerHTML += `<p>${piNum}</p><br>`;
}
const s5 = document.querySelectorAll(".s5 div");
const s5E = s5[0];
if (s5E) {
  s5E.innerHTML += `<h1>컴퓨터 가위,바위,보 맞추기</h1>`;

  let game = prompt("가위, 바위, 보 중 선택하세요?", "가위");
  let gameNum;
  switch (game) {
    case "가위":
      gameNum = 1;
      break;
    case "바위":
      gameNum = 2;
      break;
    case "보":
      gameNum = 3;
      break;
    default:
      alert("잘못 작성했습니다.");
      location.reload();
  }
  let com = Math.ceil(Math.random() * 3);

  s5E.innerHTML += `<img src="./images/math_img_${com}.jpg">`;
  if (gameNum == com) {
    s5E.innerHTML += `<img src="./images/game_1.jpg">`;
  } else {
    s5E.innerHTML += `<img src="./images/game_2.jpg">`;
  }
}