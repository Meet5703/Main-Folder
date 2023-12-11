const menuButton = document.querySelector("#menu");
const closeMenu = document.querySelector("#close");
const menuHidden = document.querySelector(".hiddenmenu");

closeMenu.style.display = "none";
menuHidden.style.opacity = "0";
menuHidden.style.transform = "translateX(-100%)";

menuButton.addEventListener("click", function () {
  closeMenu.style.display = "block";
  menuButton.style.display = "none";

  setTimeout(() => {
    menuHidden.style.opacity = "1";
    menuHidden.style.transform = "translateX(0%)";
  }, 50);
});

closeMenu.addEventListener("click", function () {
  closeMenu.style.display = "none";
  menuButton.style.display = "block";

  setTimeout(() => {
    menuHidden.style.opacity = "0";
    menuHidden.style.transform = "translateX(-100%)";
  }, 50);
});
