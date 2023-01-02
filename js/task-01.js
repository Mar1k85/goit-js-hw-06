const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);
for (const item of categories) {
  const title = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log("Category:", title);
  console.log("Elements:", elements);
}
