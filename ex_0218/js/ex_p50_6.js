// ++ 증가 연산자, -- 감소 연산자
// var A = ++B -> B값 증가 -> 증가된 B값 A에 대입
// var A = B++ -> B값 A에 대입 -> B값 증가
// 감소도 같은 방식
var num1 = 10;
var num2 = 20;
var result;

num1--;  // 9
document.write(num1, "<br>");

num1++;  //10
document.write(num1, "<br>");
// 감소된 값이 다시 증가) 9->10

result = num2++; // result: 20, num2: 21
document.write(result, "<br>");
// 대입 -> 증가

result = ++num2;  // result: 22, num2: 22
document.write(result, "<br>");
// 위 연산 후 값(21)->증가(22)->대입