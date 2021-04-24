import PopupWithImage from '../components/PopupWithImage.js'

import {
  popupImg,
  portfolioImage
} from '../utils/constants.js'

const popupWithImg = new PopupWithImage(popupImg)

console.log(portfolioImage)

portfolioImage.addEventListener('click', () => {
  popupWithImg.open()
})
