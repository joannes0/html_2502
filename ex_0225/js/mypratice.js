document.querySelectorAll('.myBtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        let section = this.closest('section'); // 클릭된 버튼의 부모 섹션 찾기
        let display = section.querySelector('.dateDisplay'); // 그 섹션 안의 dateDisplay

        // 섹션 클래스에 따라 다른 결과값 설정
        if (section.classList.contains('s1')) {
            display.innerHTML = "s1에서 클릭됨!";
        } else if (section.classList.contains('s2')) {
            display.innerHTML = "s2에서 클릭됨!";
        } else {
            display.innerHTML = Date(); // 기본값으로 날짜
        }
    });
});