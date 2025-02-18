var avgSales = ( 1200 + 1300 + 1000) / 3; //평균 판매량
var fourth = prompt("4분기 판매량은?", "0");
var msg_1 = "판매량이 평균 이상입니다.",
                msg_2 = "판매량이 평균 미달입니다.";

var result3 = fourth >= avgSales ? msg_1 : msg_2;
// 화면의 document객체에 결과 출력
// document.write(result3);

// 브라우저 콘솔창에 결과 출력
// console.log(avgSales); // 평균 판매량을 출력
console.log(result3); // 판매량 결과 안내문구를 출력