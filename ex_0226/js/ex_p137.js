const elements = {
  s1: { section: document.querySelector(".s1") },
};

// p137
let popup; // 팝업 창 저장할 변수

function openPopup() {
  if (elements.s1.section) {
    popup = window.open(
      "winpopup.html",
      "pop1",
      "width = 300, height = 400, left = 300, top = 50"
    );
  }
}
function closePopup() {
    if(popup && !popup.closed) {
        popup.close();
    }
}
