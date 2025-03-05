const elements = {
  s1: {
    btn: document.querySelector(".s1 .myBtn"),
    demo: document.querySelector(".s1 .demo"),
  },
  s2: {
    btn: document.querySelector(".s2 .myBtn"),
  },
  s3: {
    btn: document.querySelector(".s3 .myBtn"),
  },
  s4: {
    btn: document.querySelector(".s4 .myBtn"),
  },
  s5: {
    btn: document.querySelector(".s5 myBtn"),
    demo: document.querySelector(".s5 .demo"),
  },
  s6: {
    demo: document.querySelector(".s6 .demo"),
  },
  s7: {
    btn: document.querySelector(".s7 .myBtn"),
    demo: document.querySelector(".s7 .demo"),
  },
  s8: {
    myDiv: document.querySelector(".s8 .myDiv"),
    myP1: document.querySelector(".s8 .myP1"),
    myDiv: document.querySelector(".s8 .myDiv2"),
    myP2: document.querySelector(".s8 .myP2"),
  },
  s9: {
    myDiv: document.querySelector(".s9 .myDiv"),
    demo: document.querySelector(".s9 .demo"),
  },
};

// s1: 날짜 표시
if(elements.s1.btn) {
    elements.s1.btn.addEventListener('click', () => {
        elements.s1.demo.innerHTML = Date();
    });
}

// s2: 인사말 알림
if(elements.s2.btn) {
    elements.s2.btn.addEventListener('click', () => alert('Hello world!!!!!!'));
}

// s3: 다른 인사말 알림
if(elements.s3.btn) {
    elements.s2.btn.addEventListener('click', () => alert('Hello World@@@@@@'));
}
