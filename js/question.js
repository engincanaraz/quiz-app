
function Question(questionText, answers, correct) {
  this.questionText = questionText;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.correct;
};
