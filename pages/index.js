<<<<<<< HEAD
import PopupWithForm from '../components/PopupWithForm.js';
=======
>>>>>>> 736b493b36a7745c03fc3214accbd84c6f328a63
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

<<<<<<< HEAD
const popupWithImg = new PopupWithImage(popupImg)
const popupWithSendMessage = new PopupWithForm({
  popupElement: popupSendMessage,
  handleFormSubmit: (formData) => {

    popupProfileForm.close()

  }
})

popupWithSendMessage.setEventListeners()
=======
const popupWithImg = new PopupWithImage(popupImg);
const popupWithSendMessage = new PopupWithForm({
  popupElement: popupSendMessage,
  handleFormSubmit: (formData) => {
    popupProfileForm.indicatLoading();
    api
      .patchSaveUserData(
        formData.popupProfileInputTypeName,
        formData.popupProfileInputTypeJob
      )
      .then((responseUserData) => {
        userData.setUserInfo({
          name: responseUserData.name,
          job: responseUserData.about,
          id: responseUserData._id,
          avatar: responseUserData.avatar,
        });

        popupProfileForm.close();
      })
      .catch((err) => {
        console.log("Ошибка при отправке новых данных о пользователе");
      })
      .finally(() => {
        popupProfileForm.stopIndicatLoading();
        popupProfileValid.toggleButtonState();
      });
  },
});
>>>>>>> 736b493b36a7745c03fc3214accbd84c6f328a63

popupWithSendMessage.setEventListeners();

<<<<<<< HEAD
popupSendMessageOpenButton.addEventListener('click', () => {
  popupWithSendMessage.open()
})
=======
popupSendMessageOpenButton.addEventListener("click", () => {
  popupWithSendMessage.open();
});

console.log(initialLinks.linkHowToLearn);
>>>>>>> 736b493b36a7745c03fc3214accbd84c6f328a63

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
console.log(menuLinks);
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
