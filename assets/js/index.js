(function () {
  const toggle = document.getElementById("toggle"),
    menu = document.getElementById("menu"),
    navbar = document.getElementById("navbar"),
    dropdown = document.querySelectorAll(".dropdown a");
  
  toggle.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
  });

  menu.addEventListener("click", function (e) {
    if (!navbar.contains(e.target)) {
      this.classList.remove("active");
      menu.classList.remove("active");
    }
  });

  dropdown.forEach(btn => {
    btn.addEventListener("click", function () {
      this.parentElement.classList.toggle("active");
    });
  });

  document.addEventListener("click", function (e) {
    dropdown.forEach(btn => {
      if (!btn.contains(e.target) && !toggle.contains(e.target)) {
        toggle.classList.toggle("active");
        btn.parentElement.classList.remove("active");
      }
    });
  });

})();
