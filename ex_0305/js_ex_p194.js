// 라면 장보기 성공한 경우
const 라면_장보기 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("A. 라면 장보기");
    console.log("B. 라면 물 끓이기");
    resolve("라면 장보기 완료");
  }, 1000);
});

라면_장보기
  .then((result) => {
    console.log(result); // 라면 장보기 완료
    console.log("C. 끓는 물에 라면, 스프 넣고 익히기");
    console.log("D. 라면 완성 후 시식하기");
  })
  .catch((result) => {
    console.log(result);
    console.log("라면 만들기 중단");
  });

// 커피 장보기를 실패한 경우
const 커피_장보기 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("E. 커피 장보기");
    console.log("F. 커피 물 끓이기");
    reject("커피 품절");
  }, 1000);
});

커피_장보기
  .then((result) => {
    console.log("G. 끓는 물에 커피 넣고, 젖기");
    console.log("H. 커피 완성 후 마시기");
  })
  .catch((result) => {
    console.log(result);
    console.log(result); // 커피 품절
    console.log("커피 만들기 중단");
  });

const 파스타_장보기 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("no result");
  }, 1000);
});

setTimeout(() => {
  console.log("라면_장보기: ", 라면_장보기); // PromiseState: 'fulfilled
  console.log("커피_장보기: ", 커피_장보기); // PromiseState: 'rejected'
  console.log("파스타_ 장보기: ", 파스타_장보기); // Promiseate: 'pending
}, 1000);
