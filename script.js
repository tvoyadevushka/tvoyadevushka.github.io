const toggle = document.getElementById("toggler-id");
const links = document.querySelectorAll(".mobile-navigation-link");

if (toggle && links.length) {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      toggle.checked = false;
    });
  });
}
