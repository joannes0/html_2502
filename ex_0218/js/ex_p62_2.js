var name = prompt("당신의 이름은?", "");
var height = prompt("당신의 신장은?", "0");
var weight = prompt("당신의 체중은?", "0");

var normal_Weight = (height - 100) * 0.9;
var result = weight >= normal_Weight - 5 && weight <= normal_Weight + 5;
result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";
document.write(name + "님은 " + result);