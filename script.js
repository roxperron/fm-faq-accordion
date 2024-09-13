const accordionContainer = document.querySelector(".accordion-container");

/**
 * Extract anonymous function to a meaningful named function
 * This way, if multiple event listener are added to elements, you'll have a quick look at them with their respective action
 * You abstract the implementation away from the reader
 * It's a little bit more like a Tell don't ask pattern
 * https://martinfowler.com/bliki/TellDontAsk.html
 */
accordionContainer.addEventListener("click", handleAccordionClick);

function handleAccordionClick(e) {
  const target = e.target;
  // Inversing condition reduce nesting as nesting is complicated for our brain, each nested block is like a context that our brain need to remember
  // Extracting conditional add readability on what the conditional check, abstracting implementation
  if (!isAccordionToggle(target)) return;

  const item = target.closest(".accordion-item");
  const answer = item.querySelector(".accordion-answer");

  // I prefer this leaner syntax instead of if else, this is a preference
  item.classList.contains("active")
    ? closeAccordionItem(item, answer, target)
    : openAccordionItem(item, answer, target);
}

function closeAccordionItem(item, answer, toggleElement) {
  item.classList.remove("active");
  answer.style.display = "none";
  // Used string values ("true" and "false") for the aria-expanded attribute, which is more consistent with HTML conventions.
  toggleElement.setAttribute("aria-expanded", "false");
}

function openAccordionItem(item, answer, toggleElement) {
  // I think this name is a better fit on what the action is
  closeAllAccordionItems();
  item.classList.add("active");
  answer.style.display = "block";
  // Used string values ("true" and "false") for the aria-expanded attribute, which is more consistent with HTML conventions.
  toggleElement.setAttribute("aria-expanded", "true");
}

function isAccordionToggle(target) {
  return target.closest(".accordion-toggle");
}

// I suggest you stick to function for now, unless this is a requirement for frontendmentor
function closeAllAccordionItems() {
  // Get only active item, a little performance things since you don't want to apply this logic to not active item
  document.querySelectorAll(".accordion-item.active").forEach((activeItem) => {
    // We can reuse our extract closeAccordionItem with extracted earlier
    const answer = activeItem.querySelector(".accordion-answer");
    const toggle = activeItem.querySelector(".accordion-toggle");
    closeAccordionItem(activeItem, answer, toggle);
  });
}
