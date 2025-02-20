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
  const s2Div = s2Element.querySelector("div.d1"); //section_s2 안에서 div.d1 선택

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
        s2Div.innerHTML += `${i}  <br>`;
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
      console.log
      s2Div.innerHTML += `<p class="blue"> ${i1} </p>`;
    } else {
      console.log
      s2Div.innerHTML += `<p class="red"> ${i1} </p>`;
    }
    i1--;
  }
}
