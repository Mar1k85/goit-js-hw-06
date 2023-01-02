const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");
const addGalleryItem = ingredients.map((element) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = element;
  ingredientsEl.classList.add("item");
  return ingredientsEl;
});
list.append(...addGalleryItem);
