(function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-navigation");
  const navigationLinks = document.querySelectorAll(".site-navigation a");
  const currentYear = document.querySelector("#current-year");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navigationLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }
}());
