//Soru Constructor
function Question(questionText, answers, correct) {
  this.questionText = questionText; // Soru metni
  this.answers = answers; // Cevaplar
  this.correct = correct; // Dogru cevap
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.correct;
};




