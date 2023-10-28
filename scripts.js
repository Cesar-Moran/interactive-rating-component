"use strict";
// Variables
const selectedOptions = document.querySelectorAll("[data-rating-btn]");
const submitBtn = document.querySelector("[data-submit-btn");
const thankYouCard = document.querySelector("#thank-you-card");
const mainCard = document.querySelector("#main-card");
const spanNumber = document.querySelector("#spanNumber");

const chosenNumber = selectedOptions.forEach((rate) => {
  rate.addEventListener("click", () => {
    const choseNumber = rate.innerHTML;
    spanNumber.textContent = choseNumber;
    if (choseNumber > 0 || choseNumber < 5) {
      // Cambia las cartas
      submitBtn.addEventListener("click", () => {
        thankYouCard.classList.remove("hidden");
        mainCard.classList.add("hidden");
      });
    }
  });
});
