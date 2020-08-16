// Variables
const toggler = document.querySelector(".nav__icon");
const menu = document.querySelector(".nav");
const logoBox = document.querySelector(".logo");
const menuList = document.querySelector(".nav__list");
const widthChange = window.matchMedia("(min-width: 767.98px)");


// Logic for hamburger icon and nav-menu styling
toggler.addEventListener("click", function(){
  if(menu.classList.contains("nav--is-open") && toggler.classList.contains("nav__icon--close")){
    menu.classList.remove("nav--is-open");
    toggler.classList.remove("nav__icon--close");
    logoBox.classList.remove("logo--nav-opened");
  } else {
    menu.classList.add("nav--is-open");
    toggler.classList.add("nav__icon--close");
    logoBox.classList.add("logo--nav-opened");
  }
});

// Changes nav-list styling when hits 767.98px
function changeMenuListStyle(mediaWidth) {
  if (mediaWidth.matches) {
    menuList.classList.remove("nav__list--mobile");
  } else {
    menuList.classList.add("nav__list--mobile");
  }
}
changeMenuListStyle(widthChange);
widthChange.addListener(changeMenuListStyle);
