const collapsibleHeaders = document.querySelectorAll(
  ".collapsible > .collapsible__header"
);

collapsibleHeaders.forEach(function (item) {
  item.addEventListener("click", function () {
    this.parentElement?.classList.toggle("collapsible--expanded");
  });
});
