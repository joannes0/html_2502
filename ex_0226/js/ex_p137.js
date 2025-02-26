const elements = {
  s2: { sec: document.querySelector(".s2") },
};

// winpopup.html과 연결되면 이미지도 뜸뜸
function openPopup() {
  if (elements.s2.sec) {
    window.open(
      "winpopup.html",
      "pop1",
      "width=300, height=400, left=300, top=50"
    );
  }
}
