import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import {
  popupImg,
  popupSendMessage,
  popupSendMessageOpenButton,
  portfolioImageHowToLearn,
  portfolioImageRussianTravel,
  portfolioImageMesto,
  initialLinks
} from '../utils/constants.js'

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

portfolioImageHowToLearn.addEventListener('click', () => {
  popupWithImg.open(initialLinks.linkHowToLearn)
})

portfolioImageRussianTravel.addEventListener('click', () => {
  popupWithImg.open(initialLinks.linkRussianTravel)
})

portfolioImageMesto.addEventListener('click', () => {
  popupWithImg.open(initialLinks.linkMesto)
})



const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
console.log(menuLinks);
menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((item) => item.classList.remove("menu__link_active"));
    item.classList.add("menu__link_active");
  });
});
