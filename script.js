const accordionContainer = document.querySelector(".accordion-container");

accordionContainer.addEventListener("click", handleAccordionClick);

function handleAccordionClick(e) {
  const target = e.target;
  if (!isAccordionToggle(target)) return;

  const item = target.closest(".accordion-item");
  const answer = item.querySelector(".accordion-answer");

  item.classList.contains("active")
    ? closeAccordionItem(item, answer, target)
    : openAccordionItem(item, answer, target);
}

function closeAccordionItem(item, answer, toggleElement) {
  item.classList.remove("active");
  answer.style.display = "none";
  toggleElement.setAttribute("aria-expanded", "false");
}

function openAccordionItem(item, answer, toggleElement) {
  closeAllAccordionItems();
  item.classList.add("active");
  answer.style.display = "block";
  toggleElement.setAttribute("aria-expanded", "true");
}

function isAccordionToggle(target) {
  return target.closest(".accordion-toggle");
}

function closeAllAccordionItems() {
  document.querySelectorAll(".accordion-item.active").forEach((activeItem) => {
    const answer = activeItem.querySelector(".accordion-answer");
    const toggle = activeItem.querySelector(".accordion-toggle");
    closeAccordionItem(activeItem, answer, toggle);
  });
}