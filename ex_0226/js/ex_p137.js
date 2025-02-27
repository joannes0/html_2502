const elements = {
  section_2: { section: document.querySelector(".s2") },
  section_3: { div: document.querySelector(".s3 div") },
  section_4: { div: document.querySelector(".s4 div") },
  section_5: { div: document.querySelector(".s5 div") },
  section_6: { div: document.querySelector(".s6 div") },
  section_7: { div: document.querySelector(".s7 div") },
};

// <p>태그 생성 함수. 단, 적용부 const div = ...로 선언해야함
function createAndAppendP(div, text) {
  const p = document.createElement("p");
  p.textContent = text;
  div.appendChild(p);
}
// winpopup.html과 연결되면 이미지도 뜸
function openPopup() {
  if (elements.section_2.section) {
    window.open(
      "winpopup.html",
      "pop1",
      "width=300, height=400, left=300, top=50"
    );
  }
}

// setIterval()/clearInterval()
let addNum = 0;
let subNum = 1000;

function updateDisplay(section) {
  const div = elements[section].div;
  if (div) {
    div.innerHTML = ""; // div 내용 비우기
    createAndAppendP(div, `${section} 증가 값: ${addNum}`);
    createAndAppendP(div, `${section} 감소 값: ${subNum}`);
  }
}
// 증가
const auto_1 = setInterval(function () {
  addNum++;
  console.log("addNum: " + addNum);
  updateDisplay("section_3");
}, 3000);
// 감소
const auto_2 = setInterval(function () {
  subNum--;
  console.log("subNum: " + subNum);
  updateDisplay("section_3");
}, 3000);
// 초기 값 표시
updateDisplay("section_3");

// setTimeout()
let addNum2 = 0;

function updateDisplay2(section) {
  const div = elements[section].div;
  if (div) {
    div.innerHTML = "";
    createAndAppendP(div, `${section} 타임아웃: ${addNum2}`);
  }
}
let auto = setTimeout(function () {
  addNum2++;
  console.log("addNum2: " + addNum2);
  updateDisplay2("section_4");
}, 5000);

updateDisplay2("section_4");

// 총정리 실습
const section5Div = elements.section_5.div;
if (section5Div) {
  const info = navigator.userAgent.toLowerCase();
  let osImg = null;

  if (info.indexOf("windows") >= 0) {
    osImg = "windows.png";
  } else if (info.indexOf("macintosh") >= 0) {
    osImg = "macintosh.png";
  } else if (info.indexOf("iphone") >= 0) {
    osImg = "iphone.png";
  } else if (info.indexOf("android") >= 0) {
    osImg = "android.png";
  }
  // os 이미지 추가
  if (osTmg) {
    const img = document.createElement("img");
    img.src = "images_js/" + osTmg;
    section5Div.appendChild(img);
    section5Div.appendChild(document.createElement("br"));
  }
  const screenWidth = screen.width;
  const screenHeight = screen.height;

  createAndAppendP(section5Div, "모니터 해상도 너비: " + screenWidth + "px");
  createAndAppendP(section5Div, "모니터 해상도 높이: " + screenHeight + "px");
}

const section6Div = elements.section_6.div;
if (section6Div) {
  // 전화번호 처리
  const phoneNum = "010-2345-1234";
  const visiblePart = phoneNum.substring(0, phoneNum.length - 4);
  const hiddenPart = phoneNum.substring(phoneNum.length - 4);
  const maskedPhone = visiblePart + hiddenPart.replace(/\d/g, "*");
  createAndAppendP(section6Div, maskedPhone);

  // 이미지 경로 처리
  const imgSrc = "images/bnt_out.jpg";
  const result_2 = imgSrc.replace("out.jpg", "over.jpg");
  createAndAppendP(section6Div, result_2);
}

const section7Div = elements.section_7.div;
if (section7Div) {
  const menu = ['짜장면', '돈까스', '된장국', '김치찌개', '회덮밥'];
  const menuNum = Math.floor( Math.random() * menu.length);
  const result = menu[menuNum];
  createAndAppendP(section7DIv, result);
}