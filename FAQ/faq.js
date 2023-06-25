const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  const questionText = question.querySelector(".question-text");

  btn.addEventListener("click", function () {
    console.log(btn);
    questionText.classList.toggle("show-text");
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
  });
});