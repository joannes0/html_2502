const elements = { section: document.querySelector("section") };

// <p> Tag create.
function addParagraphToSection(section, message) {
    section.innerHTML += `<p>${message}</p>`;
  }

// TestScore 클래스 정의
function TestScore(name, kor, eng) {
    this.userName = name;
    this.korNum = kor;
    this.engNum = eng;
}
TestScore.prototype.getTestInfo = function() {
    addParagraphToSection(elements.section, "이름: " + this.userName);
    addParagraphToSection(elements.section, '국어: ' + this.korNum);
    addParagraphToSection(elements.section, '영어: ' + this.engNum);
};
TestScore.prototype.getAvg = function() {
    return (this.korNum + this.engNum) / 2;
};

// 객체 생성 및 실행
let kimgun = new TestScore('김군', 80, 90);
let ohgun = new TestScore('오군', 100, 80);

kimgun.getTestInfo();
addParagraphToSection(elements.section, "평균 점수: " + kimgun.getAvg());
addParagraphToSection(elements.section, ""); // 줄바꿈용 빈 줄

ohgun.getTestInfo();
addParagraphToSection(elements.section, "평균 점수: " + ohgun.getAvg());