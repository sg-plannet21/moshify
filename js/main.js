// const collapsibleHeaders = document.querySelectorAll(
//   ".collapsible > .collapsible__header"
// );

// collapsibleHeaders.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.parentElement?.classList.toggle("collapsible--expanded");
//   });
// });

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
