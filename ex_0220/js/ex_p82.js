// p82
const s1 = document.getElementsByClassName("s1");

if (s1.length > 0) {
  let site = "구글";
  // var site = prompt(
  //   "네이버, 다음, 네이트, 구글 중 | 즐겨 사용하는 포털 검색 사이트는?",
  //   ""
  // );
  let url;
  let s1Element = s1[1];

  switch (site) {
    case "구글":
      url = "https://www.google.com/";
      break;
    case "다음":
      url = "https://www.daum.net/";
      break;
    case "네이버":
      url = "https://www.naver.com/";
      break;
    case "네이트":
      url = "https://www.nate.com/";
      break;
    default:
      alert("보기 중에 없는 사이트입니다.");
  }
  if (url) {
    // location.href ='https://' + url;
    // window.open(url, "_blank");
  }
}

// p84 ~ 86
const s2 = document.getElementsByClassName("s2");

if (s2.length > 0) {
  let i = 1;
  const s2Element = s2[0];
  let s2Div = s2Element.querySelector("div.d1"); //section_s2 안에서 div.d1 선택

  if (s2Div) {
    while (i <= 10) {
      s2Div.innerHTML += `안녕하세요 ${i} <br>`;
      i++;
    }
  }
}
if (s2.length > 0) {
  let i = 1;
  const s2Element = s2[0];
  let s2Div = s2Element.querySelector("div.d2");

  if (s2Div) {
    while (i <= 30) {
      if (i % 2 == 0 && i % 6 == 0) {
        s2Div.innerHTML += `<p>${i} -</p>`;
      }
      i++;
    }
  }
}
if (s2.length > 0) {
  const s2Element = s2[0];
  let s2Div = s2Element.querySelector("div.d3");

  let i1 = 20;

  while (i1 >= 10) {
    if (i1 % 2 == 0) {
      console.log;
      s2Div.innerHTML += `<p class="blue"> ${i1} -</p>`;
    } else {
      console.log;
      s2Div.innerHTML += `<p class="red"> ${i1} -</p>`;
    }
    i1--;
  }
}

// p87
const s3 = document.getElementsByClassName("s3");

if (s3.length > 0) {
  const s3Element = s3[0];

  let i = 10;
  do {
    s3Element.innerHTML = `Hello!!!!!!`;
  } while (i < 3);
}

// p88 ~ 90
let s4 = document.querySelectorAll(".s4 div");
let s4Element = s4[0];

if (s4Element) {
  for (let i = 1; i <= 10; i++) {
    s4Element.innerHTML += `<p>반복  ${i}</p><br>`;
  }
}

let s5 = document.querySelectorAll(".s5 div");
let s5Element = s5[0];
if (s5Element) {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 7 != 0) {
      s5Element.innerHTML += `<p class ="red-text"> ${i} </p><br>`;
    } else if (i % 7 == 0 && i % 5 != 0) {
      s5Element.innerHTML += `<p class ="green-text"> ${i} </p><br>`;
    } else if (i % 7 == 0 && i % 5 == 0) {
      s5Element.innerHTML += `<p class ="blue-text"> ${i} </p></br>`;
    }
  }
}

// p90
const s6 = document.querySelectorAll(".s6 div");
const s6Element = s6[0];
if (s6Element) {
  for (let i = 1; i <= 10; i++) {
    if (i == 6) break;
    s6Element.innerHTML += `<p>${i}</p><br>`;
  }
  s6Element.innerHTML += `<p>======The End======</p>`;
}

// p91
const s7 = document.querySelectorAll(".s7 div");
const s7Element = s7[0];
if (s7Element) {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    s7Element.innerHTML += `<p>${i}</p><br>`;
  }
  s7Element.innerHTML += `<p>======The End======</p>`;
}

// p92
const s8 = document.querySelectorAll(".s8 div");
const s8Element = s8[0];
if (s8Element) {
  for (let i = 1; i <= 3; i++) {
    for (let k = 1; k <= 2; k++) {
      s8Element.innerHTML += `<p>${i}행 ${k}열</p><br>`;
    }
    s8Element.innerHTML += `<br>`;
  }
}

// Quiz 1
const s9 = document.querySelectorAll(".s9 div");
const s9Element = s9[0];
if (s9Element) {
  let i = 1;
  while (i <= 9) {
    s9Element.innerHTML += `<p>5 x ${i} = ${5 * i}</p><br>`;
    i++;
  }
}

// Quiz 2
const s10 = document.querySelectorAll(".s10 div");
const s10Element = s10[0];
if(s10Element) {
  let num = 1;
  let t = "<table border = 1>";
  for (let i = 1; i <= 5; i++) {
    t += "<tr>";
    for(let k = 1; k <= 5; k++) {
      t += "<td>" + num + "</td>";
      num++;
    }
    t += "</tr>";
  }
  t += "</table>";
  s10Element.innerHTML = `${t}`;
}
// 3~5단 이중 for문
const s13 = document.getElementsByClassName("s13");
if (s13.length > 0) {
  const s13Element = s13[0];
  let s13Div = s13Element.querySelector("div.gu9dan");

  for (let dan = 3; dan <= 5; dan++) {
    let textColorClass = "";

    if (dan === 3) {
      textColorClass = "red-text";
    } else if (dan === 4) {
      textColorClass = "blue-text";
    } else if (dan === 5) {
      textColorClass = "green-text";
    } else {
      textColorClass = ""; // 3,4,5단이 아닌 경우 (기본 스타일 유지-필요에 따라 수정)
    }

    for (let i = 1; i <= 9; i++) {
      if (dan === 4 && i === 4) {
        break;
      }
      if (dan === 5 && i === 3) {
        continue;
      }
      s13Div.innerHTML += `<p class="${textColorClass}">${dan} x ${i} = ${
        dan * i
      }<p><br>`;
    }
  }
}
