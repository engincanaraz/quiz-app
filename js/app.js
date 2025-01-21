questionList = [
  new Question(
    "1-) HTML'in açılımı nedir?",
    {
      a: "HyperText Markup Language",
      b: "HighText Machine Language",
      c: "HyperTransfer Markup Language",
      d: "Home Tool Markup Language",
    },
    "a"
  ),
  new Question(
    "2-) CSS ne için kullanılır?",
    {
      a: "Veritabanı yönetimi",
      b: "Stil ve tasarım",
      c: "JavaScript kodları çalıştırma",
      d: "Server ayarları yapma",
    },
    "b"
  ),
  new Question(
    "3-) JavaScript hangi tür bir dildir?",
    {
      a: "Programlama dili",
      b: "İşletim sistemi",
      c: "Stil dili",
      d: "Veritabanı dili",
    },
    "a"
  ),
  new Question(
    "4-) Bootstrap nedir?",
    {
      a: "Bir programlama dili",
      b: "Bir CSS framework",
      c: "Bir veritabanı sistemi",
      d: "Bir işletim sistemi",
    },
    "b"
  ),
  new Question(
    " 5-) React nedir?",
    {
      a: "Bir programlama dili",
      b: "Bir CSS framework",
      c: "Bir JavaScript kütüphanesi",
      d: "Bir veritabanı",
    },
    "c"
  ),
];


const quiz = new Quiz(questionList);
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
  startTimer(10);
  startTimerLine();
  ui.buttonBox.classList.remove("active");
  ui.quizBox.classList.add("active");
  ui.showQuestion(quiz.getQuestion());
  ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
  ui.btnNext.classList.remove("show");
});

ui.btnNext.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex) {

    startTimer(10);
    startTimerLine();
    ui.showQuestion(quiz.getQuestion());
    ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
    ui.btnNext.classList.remove("show");
  } else {
    ui.scoreBox.classList.add("active");
    ui.quizBox.classList.remove("active");
    ui.showScore(quiz.numberOfCorrectAnswers, quiz.questions.length);
  }
});


function optionSelected(e) {
  clearInterval(counter);
  clearInterval(counterLine);


  let selectedElement = e.target;
  if (selectedElement.nodeName === "SPAN") {
    selectedElement = selectedElement.parentElement;
  }


  const answer = selectedElement.textContent[0];
  const question = quiz.getQuestion();

  if (question.checkAnswer(answer)) {

    quiz.numberOfCorrectAnswers += 1;
    selectedElement.classList.add("correct");
    selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {

    selectedElement.classList.add("inCorrect");
    selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }


  quiz.questionIndex += 1;
  ui.disableAllOption();
  ui.btnNext.classList.add("show");
}
ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});

ui.btnReplay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.numberOfCorrectAnswers = 0;

  ui.btnStart.click();
  ui.scoreBox.classList.remove("active");
});

let counter;
function startTimer(time) {
  ui.timeSeconds.textContent = time;
  counter = setInterval(timer, 1000);

  function timer() {
    if (time > 0) {
      time--;
      ui.timeSeconds.textContent = time;
    } else {
      clearInterval(counter);
      ui.timeText.textContent = "Zaman Bitti";
      ui.disableAllOption();
      quiz.questionIndex += 1;
      ui.btnNext.classList.add("show");
    }
  }
}

let counterLine;
function startTimerLine() {
  let lineWidth = 0;
  const maxWidth = 550;
  const increment = maxWidth / 100; 

  counterLine = setInterval(timer, 100); 

  function timer() {
    if (lineWidth <= maxWidth) {
      lineWidth += increment;
      ui.timeLine.style.width = lineWidth + "px";
    } else {
      clearInterval(counterLine);
    }
  }
}
