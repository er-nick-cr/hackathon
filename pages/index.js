const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
console.log(menuLinks);
menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((item) => item.classList.remove("menu__link_active"));
    item.classList.add("menu__link_active");
  });
});
import PopupWithImage from "../components/PopupWithImage.js";
import { popupImg, portfolioImage } from "../utils/constants.js";
const popupWithImg = new PopupWithImage(popupImg);
console(popupWithImg);
