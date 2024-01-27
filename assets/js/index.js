(function () {
  const toggle = document.getElementById("toggle"),
    menu = document.getElementById("menu"),
    dropdown = document.querySelectorAll(".dropdown");
  
  toggle.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
  });

  dropdown.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
})();