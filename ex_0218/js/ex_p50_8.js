var a = 10;
var b = 20;
var m = 30;
var n = 40;

var result;
result = a > b || b >= m || m > n; //false || false || false
document.write(result, "<br>"); // false

result = a > b || b >= m || m <= n; //false || false || true
document.write(result, "<br>"); // true

result = a <= b && b >= m && m <= n; //true && false && true
document.write(result, "<br>"); // false

result = a <= b && b <= m && m <= n; //true && true && true
document.write(result, "<br>"); //true

result = !(a > b); // !false를 계산
document.write(result, "<br>"); //true

// ||(or)연산자 = 피연산자 중에 하나라도 true가 포함되면 true를 반환
// &&(and)연산자 = 피연산자 중에 하나라도 false가 포함되면 false를 반환
// !(not)연산자 = 피연산자가 false이면 true를 반환