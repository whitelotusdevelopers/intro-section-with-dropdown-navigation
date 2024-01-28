(function () {
  const toggle = document.getElementById("toggle"),
    menu = document.getElementById("menu"),
    navbar = document.getElementById("navbar"),
    dropdown = document.querySelectorAll(".dropdown a");
  
  toggle.addEventListener("click", function () {
    this.classList.toggle("active");
    if (toggle.ariaExpanded == "true") {
      toggle.ariaExpanded = false;
    } else toggle.ariaExpanded = true;
    menu.classList.toggle("active");
    console.log(toggle.ariaExpanded);
  });

  menu.addEventListener("click", function (e) {
    if (!navbar.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove("active");
      toggle.ariaExpanded = false;
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
      if (!btn.contains(e.target)) {
        btn.parentElement.classList.remove("active");
      }
    });
  });

})();
