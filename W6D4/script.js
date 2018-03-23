document.addEventListener("DOMContentLoaded", () => {

  function toggleLi(e) {
    const li = e.target;

    if(li.className === 'visited') {
      li.className = "";
    } else {
      li.className = 'visited';
    }
  }

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
function handleFavoriteSubmit(e) {
  //preventDefault prevents you from bubbling up or something? forgot
  e.preventDefault();
  const favoriteInput = document.querySelector(".favorite-input");
  const newPlace = favoriteInput.value;

  //reset the input box value to nothing
  favoriteInput.value = "";

  //document.createElement("HTML tag") does exactly what the heck you think
  const newListLi = document.createElement("li");

  //taking the new li you made and makes the text equal to the value you just
  //got from the input box
  newListLi.textContent = newPlace;

  const favoritesList = document.getElementById("sf-places");
  favoritesList.appendChild(newListLi);
}

//finds the button that adds the thing to the thing
const listSubmitButton = document.querySelector(".favorite-submit");

//adds an event listener to this button you found and whenever you click it,
//it executes the second param which is the function you want to run
listSubmitButton.addEventListener("click", handleFavoriteSubmit);



  // adding new photos

  // --- your code here!
function showPhotoForm(e) {
  //want to remove hidden class after you click the button
  const photoFormDiv = document.querySelector(".photo-form-container");


}


});
