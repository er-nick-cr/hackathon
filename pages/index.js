import PopupWithImage from '../components/PopupWithImage.js'

import {
  popupImg,
  portfolioImageHowToLearn,
  portfolioImageRussianTravel,
  portfolioImageMesto,
  initialLinks
} from '../utils/constants.js'

const popupWithImg = new PopupWithImage(popupImg)

console.log(initialLinks.linkHowToLearn)

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
