const elements = {
  section_1: { div: document.querySelector(".section_1 div") },
  section_2: { div: document.querySelector(".section_2 div") },
  section_3: { div: document.querySelector(".section_3 div") },
  section_4: { div: document.querySelector(".section_4 div") },
  section_5: { div: document.querySelector(".section_5 div") },
  section_6: { div: document.querySelector(".section_6 div") },
  section_7: { div: document.querySelector(".section_7 div") },
  section_8: { div: document.querySelector(".section_8 div") },
  section_9: { div: document.querySelector(".section_9 div") },
  section_10: { div: document.querySelector(".section_10 div") },
};
// 변수 선언 반복 함수
function getSectionDivNum(sectionNumber) {
    const sectionKey = `section_${sectionNumber}`;
    return elements[sectionKey].div;
}
// create paragraph (문단요소 만들기 함수)
function addParagraphToDiv(div, message) {
    div.innerHTML +=`<p>${message}</p>`;
}
// div check 함수
function updateDivIfExists(div, action) {
    if (div) {
        action(div);
    }
}
// p155
let count = 0;

myFnc();

function myFnc() {
  count++;
  elements.section_1.div.innerHTML += `<p>hello ${count}, </p>`;
}

myFnc();

let theFnc = function () {
  count++;
  elements.section_1.div.innerHTML += `<p>bye ${count}, </p><br>`;
};

theFnc();

// p156
const color = ["white", "yellow", "aqua", "purple"];
let i = 0;

function changeColor() {
  i++; // 다음 색깔로 이동
  if (i >= color.length) {
    i = 0; // 색깔 목록 끝이면 처음으로 돌아가기
  }
  const section2Div = elements.section_2.div;
  if (section2Div) {
    section2Div.style.backgroundColor = color[i];
  }
}

// p158
function myFnc2(name, area) {
  const section3Div = elements.section_3.div;
  if (section3Div) {
    section3Div.innerHTML += `<p>안녕하세요. ${name} 입니다. ,</p>`;
    section3Div.innerHTML += `<p>사는 곳은 ${area} 입니다. ,</p><br><br>`;
  }
}
myFnc2("홍당무", "서울");
myFnc2("깍두기", "부산");

// p159
let rightId = "korea";
let rightPw = "1234";

const section4Div = elements.section_4.div;
if (section4Div) {
  function login(id, pw) {
    if (id == rightId) {
      if (pw == rightPw) {
        section4Div.innerHTML += `<p>${id}님 방문을 환영합니다.</p>`;
      } else {
        alert("잘못된 비밀번호 입니다.");
      }
    } else {
      alert("존재하지 않는 아이디 입니다.");
    }
  }
  function loginButton() {
    let userId = prompt("아이디를 입력하세요.", "");
    if (userId === rightId) {
      let userPw = prompt("패스워드를 입력하세요.", "");
      login(userId, userPw);
    } else {
      alert("존재하지 않는 아이디 입니다.");
    }
  }
}

// p162
const section5Div = elements.section_5.div;
if (section5Div) {
  function testAvg(arrData) {
    let sum = 0;
    for (let i = 0; i < arrData.length; i++) {
      sum += Number(prompt(arrData[i] + " 점수는?", "0"));
    }
    let avg = sum / arrData.length;
    return avg;
  }
// 버튼 클릭시 실행
  function pointButton() {
    let arrSubject = ["국어", "수학"];
    let result = testAvg(arrSubject);
    section5Div.innerHTML = `<p>평균 점수는 ${result}점 입니다.</p>`;
  }
}

// p163
const section6Div = elements.section_6.div;
if (section6Div) {
    let num = 1;
    function gallery(direct) {
        if (direct) {
            if (num == 8) return;
            num++;
        } else {
            if (num == 1) return;
            num--;
        }
        section6Div.innerHTML = `<p><img class="poto"></p>`
        let section6DivPoto = section6Div.querySelector('.poto')
        section6DivPoto.setAttribute('src', './images/pic_' + num + '.jpg');
    }
}

// p165
const section7Div = getSectionDivNum(7);
// 재귀함수 정의
function testFnc(num) {
    if (num > 10) return; // 멈주는 조건: num이 10을 넘으면 종료
    addParagraphToDiv(section7Div, num); // div에 <p>num</p>추가
    testFnc(num + 1); // 다음 숫자로 재귀 호출
}
function startTestFnc() {
    updateDivIfExists(section7Div, function() {
        testFnc(1); // 1부터 시작
    });
}

// p169
const section8Div = getSectionDivNum(8);
let num = 100;
function menu() {
    num +=100;
    addParagraphToDiv(section8Div, `첫 번째 menu: ${num}`);
}
function menu() {
    addParagraphToDiv(section8Div, `두 번째 menu: ${num}`);
}
updateDivIfExists(section7Div, function(){
   menu();
})

// p171
