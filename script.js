const accordionContainer = document.querySelector(".accordion-container");


accordionContainer.addEventListener("click", (e) => {
  if (e.target.closest(".accordion-toggle")) {
    const item = e.target.closest(".accordion-item");
    const answer = item.querySelector(".accordion-answer");

    if (item.classList.contains("active")) {

      item.classList.remove("active");
      answer.style.display = "none";
      e.target.setAttribute("aria-expanded", false);
    } else {
      resetAll();
      item.classList.add("active");
      answer.style.display = "block";
      e.target.setAttribute("aria-expanded", true);
    }
  }
});

const resetAll = () => {
  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.classList.remove("active");
    item.querySelector(".accordion-answer").style.display = "none";
    item.querySelector(".accordion-toggle").setAttribute("aria-expanded", false);
  });
};
