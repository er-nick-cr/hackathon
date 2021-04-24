<<<<<<< HEAD
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
=======
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithMenu from "../components/PopupWithMenu.js";
>>>>>>> a62e3e799951818e074e0b3a9399ac8f5501a6e1

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

    popupProfileForm.indicatLoading()
    api.patchSaveUserData(
        formData.popupProfileInputTypeName,
        formData.popupProfileInputTypeJob
      )
      .then(responseUserData => {

        userData.setUserInfo({
          name: responseUserData.name,
          job: responseUserData.about,
          id: responseUserData._id,
          avatar: responseUserData.avatar
        })

        popupProfileForm.close()
      })
      .catch(err => {
        console.log('Ошибка при отправке новых данных о пользователе')
      })
      .finally(() => {
        popupProfileForm.stopIndicatLoading()
        popupProfileValid.toggleButtonState()
      })
  }
})

popupWithSendMessage.setEventListeners()


popupSendMessageOpenButton.addEventListener('click', () => {
  popupWithSendMessage.open()
})
=======
const popupWithImg = new PopupWithImage(popupImg);

console.log(initialLinks.linkHowToLearn);
>>>>>>> a62e3e799951818e074e0b3a9399ac8f5501a6e1

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
