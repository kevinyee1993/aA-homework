document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const favoriteSubmit = (e) => {
    e.preventDefault();
    const selectInput = document.querySelector(".favorite-input");
    const favorite = selectInput.value;
    selectInput.value = "";

    const li = document.createElement("li");
    li.textContent = favorite;

    const favorites = document.getElementById("sf-places");
    favorites.appendChild(li);
  };

  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", favoriteSubmit);



  // adding new photos

  // --- your code here!



});
