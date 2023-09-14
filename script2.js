document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-btn");
  const mainContainer = document.getElementById('card-display');

  // Function to create a new recipe card
  function createRecipeCard(title, category, ingredients, procedure) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const cardCategory = document.createElement("p");
    cardCategory.textContent = "Category: " + category;

    const cardIcon = document.createElement('i');
    cardIcon.classList.add("fas", "fa-caret-down", "card-icon"); // Corrected the class

    const cardIngredients = document.createElement("p");
    cardIngredients.classList.add('display');
    cardIngredients.textContent = "Ingredients: " + ingredients;

    const cardProcedure = document.createElement("p");
    cardProcedure.classList.add('display');
    cardProcedure.textContent = "Procedure: " + procedure;

    if (cardCategory.textContent === "Category: normalRecipe") {
      // Create a new img element
      const imgElement = document.createElement("img");
      imgElement.classList.add("card-img");

      // Set the src attribute to the image URL
      imgElement.src = "ideogram.jpeg";

      // Append the img element to the cardContainer
      cardContainer.appendChild(imgElement);
    } else if (cardCategory.textContent === "Category: sweetDish") {
      const imgElement2 = document.createElement("img");
      imgElement2.classList.add("card-img");
      imgElement2.src = "ideogram (1).jpeg";
      cardContainer.appendChild(imgElement2);
    } else if (cardCategory.textContent === "Category: drinkRecipe") {
      const imgElement3 = document.createElement("img");
      imgElement3.classList.add("card-img");
      imgElement3.src = "ideogram (2).jpeg";
      cardContainer.appendChild(imgElement3);
    }

    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardCategory);
    cardContainer.appendChild(cardIcon);
    cardContainer.appendChild(cardIngredients);
    cardContainer.appendChild(cardProcedure);
    mainContainer.appendChild(cardContainer);
  }


  // Event listener for the submit button
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const ingredients = document.getElementById("ind").value;
    const procedure = document.getElementById("procedure").value;

    if (title && category && ingredients && procedure) {
      createRecipeCard(title, category, ingredients, procedure);

      // Clear the form after submission
      document.getElementById("title").value = "";
      document.getElementById("category").value = "normalRecipe";
      document.getElementById("ind").value = "";
      document.getElementById("procedure").value = "";
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
});
