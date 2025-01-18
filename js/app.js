const questionList = [
  new Question(
    " 1-) HTML'in açılımı nedir?",
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

document.getElementById("btnGetQuestion").addEventListener("click", function () {
  if(quiz.questions.length != quiz.questionIndex) {
    ui.showQuestion(quiz.getQuestion());
    quiz.questionIndex+=1;
    console.log(quiz);
  }else{
    console.log("quiz bitti");
  }
  
});
