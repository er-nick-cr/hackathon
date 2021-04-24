import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithMenu from "../components/PopupWithMenu.js";

import {
  popupImg,
  popupSendMessage,
  popupSendMessageOpenButton,
  portfolioImageHowToLearn,
  portfolioImageRussianTravel,
  portfolioImageMesto,
  initialLinks,
  menuButton,
  menu,
} from "../utils/constants.js";

const popupWithImg = new PopupWithImage(popupImg);
const popupWithSendMessage = new PopupWithForm({
  popupElement: popupSendMessage,
  handleFormSubmit: (formData) => {
    popupProfileForm.close();
  },
});

popupWithSendMessage.setEventListeners();

popupSendMessageOpenButton.addEventListener("click", () => {
  popupWithSendMessage.open();
});

portfolioImageHowToLearn.addEventListener("click", () => {
  popupWithImg.open(initialLinks.linkHowToLearn);
});

portfolioImageRussianTravel.addEventListener("click", () => {
  popupWithImg.open(initialLinks.linkRussianTravel);
});

portfolioImageMesto.addEventListener("click", () => {
  popupWithImg.open(initialLinks.linkMesto);
});

const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
const langElement = document.querySelector(".bio__page-language");
menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((item) => item.classList.remove("menu__link_active"));
    item.classList.add("menu__link_active");
  });
});

const popupWithMenu = new PopupWithMenu(".navigation", langElement);

menuButton.addEventListener("click", () => {
  popupWithMenu.open();
});
popupWithMenu.setEventListeners();

menu.addEventListener("pointerdown", (evt) => {
  evt.stopPropagation();
});
