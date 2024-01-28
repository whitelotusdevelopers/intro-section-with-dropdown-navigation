(function () {
  const toggle = document.getElementById("toggle"),
    menu = document.getElementById("menu"),
    navbar = document.getElementById("navbar"),
    dropdown = document.querySelectorAll(".dropdown");
  
  toggle.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
  });

  menu.addEventListener("click", function (e) {
    if (navbar.contains(e.target)) {
      this.classList.remove("active");
      menu.classList.remove("active");
    }
  });

  dropdown.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
})();
