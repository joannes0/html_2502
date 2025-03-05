// DOM 요소 캐싱
const elements = {
    s1: {
        btn: document.querySelector(".s1 .myBtn"),
        demo: document.querySelector(".s1 .demo")
    },
    s2: { btn: document.querySelector(".s2 .myBtn") },
    s3: { btn: document.querySelector(".s3 .myBtn") },
    s4: { btn: document.querySelector(".s4 .myBtn") },
    s5: {
        btn: document.querySelector(".s5 .myBtn"),
        demo: document.querySelector(".s5 .demo")
    },
    s6: { demo: document.querySelector(".s6 .demo") },
    s7: {
        btn: document.querySelector(".s7 .myBtn"),
        demo: document.querySelector(".s7 .demo")
    },
    s8: {
        myDiv1: document.querySelector(".s8 .myDiv1"),
        myP1: document.querySelector(".s8 .myDiv1 .myP1"),
        myDiv2: document.querySelector(".s8 .myDiv2"),
        myP2: document.querySelector(".s8 .myDiv2 .myP2")
    },
    s9: {
        myDiv: document.querySelector(".s9 .myDiv"),
        demo: document.querySelector(".s9 .myDiv .demo")
    }
};

// s1: 날짜 표시
if (elements.s1.btn) {
    elements.s1.btn.addEventListener("click", () => {
        elements.s1.demo.innerHTML = Date();
    });
}

// s2: 인사말 알림
if (elements.s2.btn) {
    elements.s2.btn.addEventListener("click", () => alert("Hello World!!!!!!!!!!!"));
}

// s3: 다른 인사말 알림
if (elements.s3.btn) {
    elements.s3.btn.addEventListener("click", () => alert("Hello world@@@@@@@@@@"));
}

// s4: 두 개의 알림
if (elements.s4.btn) {
    elements.s4.btn.addEventListener("click", () => alert("Hello World!!!!!!!!!!"));
    elements.s4.btn.addEventListener("click", () => alert("Hello Other World@@@@@@@@@@"));
}

// s5: 마우스 이벤트
if (elements.s5.btn) {
    elements.s5.btn.addEventListener("mouseover", () => {
        elements.s5.demo.innerHTML += "마우스 오버 <br>";
    });
    elements.s5.btn.addEventListener("click", () => {
        elements.s5.demo.innerHTML += "클릭 <br>";
    });
    elements.s5.btn.addEventListener("mouseout", () => {
        elements.s5.demo.innerHTML += "마우스 아웃 <br>";
    });
}

// s6: 창 크기 조정 시 무작위 숫자
window.addEventListener("resize", () => {
    if (elements.s6.demo) {
        elements.s6.demo.innerHTML = Math.random();
    }
});

// s7: 곱셈
if (elements.s7.btn) {
    const p1 = 5, p2 = 7;
    elements.s7.btn.addEventListener("click", () => {
        elements.s7.demo.innerHTML = p1 * p2;
    });
}

// s8: 이벤트 버블링/캡처링
if (elements.s8.myP1) {
    elements.s8.myP1.addEventListener("click", () => alert("흰색 요소 클릭"), false);
    elements.s8.myDiv1.addEventListener("click", () => alert("주황색 요소 클릭"), false);
    elements.s8.myP2.addEventListener("click", () => alert("흰색 요소 클릭"), true);
    elements.s8.myDiv2.addEventListener("click", () => alert("주황색 요소 클릭"), true);
}

// s9: 마우스 이동 및 제거
if (elements.s9.myDiv) {
    const updateRandom = () => {
        elements.s9.demo.innerHTML = Math.random();
    };
    elements.s9.myDiv.addEventListener("mousemove", updateRandom);
    window.removeHandler = () => {
        elements.s9.myDiv.removeEventListener("mousemove", updateRandom);
    };
}