const elements = {
  s1: {
    div1: document.querySelector(".s1 .s1_div1"),
    div2: document.querySelector(".s1 .s1_div2"),
  },
  s2: { div: document.querySelector(".s2 .s2_div") },
};

// p119 이름, 연락처 ---------------------------------------------------------
function addName() {
  if (elements.s1.div1) {
    let userName = prompt("당신의 영문 이름은?", "");
    let upperName = userName.toUpperCase();
    elements.s1.div1.innerHTML += `<p>${upperName}</p><br>`;
  }
}
function addNum() {
  if (elements.s1.div2) {
    let userNum = prompt("당신의 연락처는?", "");
    let result = userNum.substring(0, userNum.length - 4) + "****";
    elements.s1.div2.innerHTML += `<p>${result}</p><br>`;
  }
}

// p120 Email 입력 ----------------------------------------------------------
function addEmail() {
  if (elements.s2.div) {
    let userEmail = prompt("당신의 이메일 주소는?", "");
    if (userEmail) {
      // 빈 값 체크
      let arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];
      let check1 = false;
      let check2 = false;
      if (userEmail.indexOf("@") > 0) {
        check1 = true;
      }
      for (let i = 0; i < arrUrl.length; i++) {
        if (userEmail.indexOf(arrUrl[i]) > 0) {
          check2 = true;
          break;
          // break추가 이유: for 문에서 도메인(arrUrl[i])을 찾으면
          // 더 이상의 반복 없이 루프를 멈춤 ex).com을 찾으면
          // .net, .or.kr 등을 체크 안하고 바로끝냄
        }
      }
      if (check1 && check2) {
        elements.s2.div.innerHTML += `<p>${userEmail}</p><br>`;
        //   let p = document.createElement("p"); // <p> 태그 생성
        //   p.textContent = userEmail; // 텍스트 설정
        //   elements.s2.div.appendChild(p); // <div>에 <p> 추가
        //   elements.s2.div.appendChild(document.createElement("br")); // <br> 추가
        // } else {
        alert("이메일 형식이 잘못되었습니다.");
      }
    } else {
      alert("이메일을 입력해주세요.");
    }
  }
}
