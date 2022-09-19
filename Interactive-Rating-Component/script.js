// click event listener for rate and submit

let rating;

addEventListener(`click`, (event) => {
  // when clicking on a rating
  if (event.target.tagName === `LI`) {
    // assign a number to rating
    rating = event.target.innerText;

    const LIs = document.querySelectorAll(`li`);

    // remove the 'selected' class from all <li>
    LIs.forEach((LI) => {
      LI.classList.remove(`selected`);
    });

    // add the 'selected' class to the targeted <li>
    event.target.classList.add(`selected`);
  }

  // when clicking submit
  if (event.target.tagName === `BUTTON`) {
    // only runs if a rating has been selected
    if (rating) {
      // placeholder - do something when submit is clicked
      // (hide front card, show back card)
      console.log(rating);
    }
  }
});
