const elements = {
  s1: { div: document.querySelector(".s1 div") },
  s2: { div: document.querySelector(".s2 div") },
  s3: { div: document.querySelector(".s3 div") },
  s4: { div: document.querySelector(".s4 div") },
  s5: { div: document.querySelector(".s5 div") },
  s6: { div: document.querySelector(".s6 div") },
  s7: { div: document.querySelector(".s7 div") },
};

// p123 -------------------------------------------------------------------
function collectScores() {
  if (elements.s1.div) {
    let country = ["영어", "중국어"];
    let subjects = ["쓰기", "말하기"];
    let myMap = new Map();

    // 점수 입력 받기
    for (let i = 0; i < country.length; i++) {
      myMap.set(country[i], []);
      for (let k = 0; k < subjects.length; k++) {
        let score = prompt(`${country[i]}의 ${subjects[k]} 점수는?`);
        myMap.get(country[i]).push(score);
      }
    }
    // 콘솔에 결과 출력
    console.log(myMap.get("영어"));
    console.log(myMap.get("중국어"));

    // .s1 div에 결과 출력
    for (let [lang, scores] of myMap) {
      elements.s1.div.innerHTML += `<p>${lang}: 쓰기 ${scores[0]}, 말하기 ${scores[1]}</p><br>`;
    }
  }
}

// p126 -------------------------------------------------------------------
function collectScores2() {
  if (elements.s2.div) {
    let users = {
      userA: [50, 60, 100],
      userB: [80, 90, 70],
      userC: [75, 80, 90],
    };
    let { userA, userB } = users; // 객체 구조 분해
    let arr = [...userA, ...userB]; // 배열 합치기
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    // .s2 div에 결과 출력
    elements.s2.div.innerHTML = `<p>userA와 userB의 점수 합계: ${sum}</p><br>`;
  }
}

// p127 ------------------------------------------------------------------------
function collectScores3() {
  if (elements.s3.div) {
    // 배열 1: 숫자 나누기
    let arr1 = [10, 20, 30];
    let arr2 = arr1.map((item) => item / 10);
    console.log(arr2);

    // 배열 2: 이름과 번호 객체로 변환
    let arr3 = ["홍길동", "김갑중", "박상무"];
    let arr4 = arr3.map((item, idx) => {
      let obj = {};
      obj["no"] = idx + 1;
      obj["userName"] = item;
      return obj;
    });
    console.log(arr4); // [{no: 1, userName: "홍길동"}, ...]

    // .s3 div에 결과 출력
    elements.s3.div.innerHTML += `<p>arr2: ${arr2.join(", ")}</p><br>`;
    elements.s3.div.innerHTML += `<p>arr4:</p>`;
    arr4.forEach((item) => {
      elements.s3.div.innerHTML += `<p>no: ${item.no}, userName: ${item.userName}</p>`;
    });
  }
}

// p129 --------------------------------------------------------------------------
function collectScores4() {
  if (elements.s4.div) {
    let subjects = ["쓰기", "듣기", "말하기"];
    let arr1 = subjects.map((item) => {
      return prompt(`영어 ${item}의 점수는?`, "0");
    });
    let result = arr1.some((item) => item < 60);

    result = result ? "불합격" : "합격";
    elements.s4.div.innerHTML = `<p>결과: ${result}</p>`;
  }
}

// p130 ----------------------------------------------------------------------------
function collectScores5() {
  if (elements.s5.div) {
    const subjects = ["쓰기", "듣기", "말하기"];
    const arr1 = subjects.map((item) => {
      return prompt(`${item}의 점수는?`, "0");
    });
    let result = arr1.every((item) => item >= 60);

    result = result ? "합격" : "불합격";
    elements.s5.div.innerHTML = `<p>결과: ${result}</p>`;
  }
}

// p132 -----------------------------------------------------------------------------
function collectScores6() {
  if (elements.s6.div) {
    const fruit_1 = ["딸기", "바나나", "파인애플"];
    const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
    let fruit_3 = [];

    fruit_3 = [...fruit_1];
    fruit_2.map((item) => {
      if (!fruit_3.includes(item)) {
        fruit_3.push(item);
      }
    });
    elements.s6.div.innerHTML = `<p>${fruit_3}</p>`;
  }
}

// p133 -----------------------------------------------------------------------------
function collectScores7() {
  if (elements.s7.div) {
    const subjects = ["쓰기", "듣기", "말하기"];
    const arr1 = [];
    for (let item of subjects) {
      arr1.push(prompt(`${item}의 점수는?`, ""));
    }
    let result = arr1.every((item) => item >= 60);

    result = result ? "합격" : "불합격";
    elements.s7.div.innerHTML = `<p>${result}</p>`;
  }
}
