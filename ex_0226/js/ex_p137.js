const elements = {
  section_2: { section: document.querySelector(".s2") },
  section_3: { div: document.querySelector(".s3 div") },
};

// <p>태그 생성 함수. 단, 적용부 const div = ...로 선언해야함
function createAndAppendP(div, text) {
  const p = document.createElement("p");
  p.textContent = text;
  div.appendChild(p);
}
// // winpopup.html과 연결되면 이미지도 뜸
// function openPopup() {
//   if (elements.s2.section) {
//     window.open(
//       "winpopup.html",
//       "pop1",
//       "width=300, height=400, left=300, top=50"
//     );
//   }
// }

// setIterval()/clearInterval()
let addNum = 0;
let subNum = 1000;

function updateDisplay(section) {
  const div = elements[section].div;
  if (div) {
    createAndAppendP(div, `${section} 증가 값: ${addNum}`);
    createAndAppendP(div, `${section} 감소 값: ${subNum}`);
  }
}
// 증가
const auto_1 = setInterval(function () {
  addNum++;
  console.log('addNum: ' + addNum);
  updateDisplay('section_3');
}, 3000);

// 감소
const auto_2 = setInterval(function () {
  subNum--;
  console.log('subNum: ' + subNum);
  updateDisplay('section_3');
}, 3000);

// 초기 값 표시
updateDisplay('section_3');