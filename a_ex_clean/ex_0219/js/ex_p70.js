// p70
let walkAmount = 10000;
// var walkAmount = prompt('당신의 하루 걷는 양은 몇 보인가요?', '0')
const sec_s1 = document.getElementsByClassName("s1"); //class name 's1' 찾기

if (sec_s1.length > 0) {
  //'s1'클래스를 가진 요소가 있는지 확인하기
  let sec_s1Element = sec_s1[0]; //s1 중 가장 먼저 등장한 s1가져오기

  if (walkAmount >= 10000) {
    const goodHabitText = document.createElement("p"); //s1문단 안에 <p>(문단)생성
    goodHabitText.textContent = "매우 좋은 습관을 지니고 계시는군요!!"; //생성한 <p>에 표시되는 내용
    sec_s1Element.appendChild(goodHabitText); //화면에 생성한 요소 출력

    const lineBreak = document.createElement("br"); //줄바꿈 블록 만들기
    sec_s1Element.appendChild(lineBreak); //줄바꿈 요소 블록 추가하기(출력)
  }

  const theEndText = document.createElement("p"); // The End 메시지 추가 <p>(문단) 생성
  theEndText.textContent = "======= The End ======="; //생성한 <p>에 표시될 The End 문구 내용
  sec_s1Element.appendChild(theEndText); //화면에 생성한 요소 출력
}

//p71
let min = 60;
// var min = prompt('당신의 하루 통화량은 몇 분인가요?','0');
const sec_s2 = document.getElementsByClassName("s2");

if (sec_s2.length > 0) {
  let sec_s2Element = sec_s2[0];

  if (min >= 60) {
    const noticeText = document.createElement("p");
    noticeText.textContent = "많이 사용하는 편이네요.";
    sec_s2Element.appendChild(noticeText);

    const lineBreak = document.createElement("br"); //줄바꿈 블록 만들기
    sec_s2Element.appendChild(lineBreak);
  }

  const theEndText = document.createElement("p");
  theEndText.textContent = "====== The End ======";
  sec_s2Element.appendChild(theEndText);
}

//p72
let userName = "홍길동";
// var userName = prompt('방문자의 이름은?', '');
const sec_s3 = document.getElementsByClassName("s3");

if (sec_s3.length > 0) {
  let sec_s3Element = sec_s3[0];

  if (userName) {
    const noticeText = document.createElement("p");
    noticeText.textContent = userName + "님 반갑습니다! 방문을 환영합니다.";
    sec_s3Element.appendChild(noticeText);
  }
}

//p73
let num = '2';
// let num = prompt("당신이 좋아하는 숫자는?", "0");
const sec_s4 = document.getElementsByClassName("s4");

if (sec_s4.length > 0) {
  let sec_s4Element = sec_s4[0];

  if (num % 2 == 0) {
    //짝수일 경우에 실행
    const noticeText = document.createElement("p");
    noticeText.textContent = "당신이 좋아하는 숫자는 짝수입니다.";
    sec_s4Element.appendChild(noticeText);
  } else {
    const noticeText = document.createElement("p");
    noticeText.textContent = "당신이 좋아하는 숫자는 홀수입니다.";
    sec_s4Element.appendChild(noticeText);
  }
}

//p75
let result = 'false';
// let result = confirm("정말로 회원을 탈퇴하시겠습니까?");
const sec_s5 = document.getElementsByClassName("s5");

if (sec_s5.length > 0) {
  let sec_s5Element = sec_s5[0];

  if (result) {
    const noticeText = document.createElement("p");
    noticeText.textContent = "탈퇴 처리되었습니다.";
    sec_s5Element.appendChild(noticeText);
  } else {
    const noticeText = document.createElement("p");
    noticeText.textContent = "탈퇴 취소되었습니다.";
    sec_s5Element.appendChild(noticeText);
  }
}


//p76
let mon = 11
// let mon = prompt('현재는 몇 월입니까?', ' ');
const sec_s6 = document.getElementsByClassName('s6');

if(sec_s6.length > 0) {
  let sec_s6Element = sec_s6[0];

  if(mon >= 9 && mon <= 11){
    const noticeText = document.createElement('p');
    noticeText.textContent = '독서의 계절 가을이네요!!';
    sec_s6Element.appendChild(noticeText);
  } else if(mon >= 6 && mon <= 8){
    const noticeText = document.createElement('p');
    noticeText.textContent = '여행가기 좋은 여름이네요!!';
    sec_s6Element.appendChild(noticeText);
  } else if(mon >= 3 && mon <= 5) {
    const noticeText = document.createElement('p');
    noticeText.textContent = '햇살 가득한 봄이네요!!';
    sec_s6Element.appendChild(noticeText);
  } else {
    const noticeText = document.createElement('p');
    noticeText.textContent = '스키의 계절 겨울이네요!!';
    sec_s6Element.appendChild(noticeText);
  }
}

//p78
let id = 'easy1004';
let pw = '112233';

let user_id = 'easy1004';
let user_pw = '112233';
// let user_id = prompt('아이디는?', '');
// let user_pw = prompt('비밀번호는?', '');
const sec_s7 = document.getElementsByClassName('s7');

if(sec_s7.length > 0) {
  let sec_s7Element = sec_s7[0];

  if(id == user_id) {
    if(pw == user_pw) {
      const noticeText = document.createElement('p');
      noticeText.textContent = user_id + '님 반갑습니다!';
      sec_s7Element.appendChild(noticeText);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
      location.reload();
    }
  } else {
    alert('아이디가 일치하지 않습니다.');
    location.reload();
  }
}

// p80
let num2 = 10;
let user = '홍길동';

const sec_s8 = document.getElementsByClassName('s8');

if(sec_s8.length > 0) {
  let sec_s8Element = sec_s8[0];

  if(num2 > 5) {
    let num2 = 50;
    num2 = num2 + 10;
  }
  const noticeText = document.createElement('p');
  noticeText.textContent = `${num2}`;
  sec_s8Element.appendChild(noticeText);
  const br1 = document.createElement('br');
  sec_s8Element.appendChild(br1);

  if(user != '') {
    user = '김길동';
  }
  const userText = document.createElement('p');
  userText.textContent = `${user}`;
  sec_s8Element.appendChild(userText);
  const br2 = document.createElement('br');
  sec_s8Element.appendChild(br2);
}