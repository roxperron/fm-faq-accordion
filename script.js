const showMore = document.querySelectorAll(".fa-plus");
const showLess = document.querySelectorAll(".fa-minus");
const answer = document.querySelectorAll(".accordion-answer");

// Function to reset all answers
const resetAll = () => {
  answer.forEach((container) => {
    container.style.display = "none";
  });
  showMore.forEach((icon) => {
    icon.style.display = "block";
  });
  showLess.forEach((icon) => {
    icon.style.display = "none";
  });
};

// Function to show accordion answer
showMore.forEach((plus, index) => {
  plus.addEventListener("click", () => {
    resetAll();
    answer[index].style.display = "block";
    showMore[index].style.display = "none";
    showLess[index].style.display = "block";
  });
});

// Function to hide accordion answer
showLess.forEach((minus, index) => {
  minus.addEventListener("click", () => {
    answer[index].style.display = "none";
    showMore[index].style.display = "block";
    showLess[index].style.display = "none";
  });
});
