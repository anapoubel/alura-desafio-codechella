const faqQuestions = document.querySelectorAll('.faq-title-container');

faqQuestions.forEach(question => {
   question.addEventListener("click", function() {
      let answer = this.nextElementSibling;
      openAnswers(answer);
   })
})

function openAnswers(answer) {
   answer.classList.toggle("faq-item-open");
}