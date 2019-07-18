// Variables
const toggler = document.querySelector(".nav-icon");
const menu = document.querySelector(".main-nav");
const logoBox = document.querySelector(".header__logo-box");
const menuList = document.querySelector(".main-nav__list");
const widthChange = window.matchMedia("(min-width: 767.98px)");


// Logic for hamburger icon and nav-menu styling
toggler.addEventListener("click", function(){
  if(menu.classList.contains("main-nav--is-active") && toggler.classList.contains("nav-icon--close")){
    menu.classList.remove("main-nav--is-active");
    toggler.classList.remove("nav-icon--close");
    logoBox.classList.remove("header__logo-box--nav-opened");
  } else {
    menu.classList.add("main-nav--is-active");
    toggler.classList.add("nav-icon--close");
    logoBox.classList.add("header__logo-box--nav-opened");
  }
});

// Changes nav-list styling when hits 767.98px
function changeMenuListStyle(mediaWidth) {
  if (mediaWidth.matches) {
    menuList.classList.remove("main-nav__list--mobile");
  } else {
    menuList.classList.add("main-nav__list--mobile");
  }
}
changeMenuListStyle(widthChange);
widthChange.addListener(changeMenuListStyle);
