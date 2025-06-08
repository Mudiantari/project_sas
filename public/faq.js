const faqQuestions = document.querySelectorAll('.question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.closest('.faq');
    const answer = faqItem.querySelector('.answer');
    const arrowIcon = question.querySelector('i.ri-arrow-down-s-line');

    answer.classList.toggle('open');
    arrowIcon.classList.toggle('rotate-180');
  });
});