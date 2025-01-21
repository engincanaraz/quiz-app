
function Quiz(questions) {
  this.questionIndex = 0;
  this.numberOfCorrectAnswers = 0;
  this.questions = questions;
}

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
}
