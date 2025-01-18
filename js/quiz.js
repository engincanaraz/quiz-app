// Quiz Constructor
function Quiz(questions) {
  this.questionIndex = 0;
  this.questions = questions;
}
// Sıradaki soruyu getir
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
}
