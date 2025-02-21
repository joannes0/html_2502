const s5 = document.querySelectorAll(".s5 div");
const s5E = s5[0];

if (s5E) {
  s5E.innerHTML = `<h1>컴퓨터 가위,바위,보 맞추기</h1>`; // 제목 먼저 넣어주기

  const gameOptions = {
    // 가위, 바위, 보를 숫자로 매핑하는 객체! (딕셔너리 같아요)
    가위: 1,
    바위: 2,
    보: 3,
  };

  let game = prompt("가위, 바위, 보 중 선택하세요?", "가위");

  if (!game || !gameOptions[game]) {
    // 입력값 유효성 검사 (null, 빈 문자열, gameOptions에 없는 값)
    alert("잘못 작성했습니다. '가위', '바위', '보' 중에서 다시 선택해주세요.");
    location.reload();
  }

  const gameNum = gameOptions[game]; // 객체에서 입력값에 해당하는 숫자 가져오기! (switch문 대신!)
  const com = Math.ceil(Math.random() * 3);

  let resultHTML = ``; // 결과를 담을 HTML 문자열 변수 미리 선언! (성능 향상!)

  resultHTML += `<img src="./images/math_img_${com}.jpg"><br>`; // 컴퓨터 이미지 먼저 추가! (템플릿 리터럴 사용!)

  const gameResultImages = {
    // 게임 결과에 따른 이미지 매핑 (객체!)
    true: "./images/game_1.jpg", // 비겼을 때 또는 이겼을 때 (game_1.jpg 가 어떤 이미지인지에 따라 의미가 달라짐)
    false: "./images/game_2.jpg", // 졌을 때 (game_2.jpg 가 어떤 이미지인지에 따라 의미가 달라짐)
  };

  const isGameWin = gameNum === com; // gameNum 과 com 이 같으면 비긴 것! (또는 이긴 것으로 가정)
  resultHTML += `<img src="${gameResultImages[isGameWin]}">`; // 결과 이미지 추가! (객체와 boolean 값을 활용!)

  s5E.innerHTML += resultHTML; // 최종 HTML 문자열을 한 번에 innerHTML 에 넣어주기! (성능 향상!)
}
