import {
  escCode
} from '../utils/constants.js'

export default class Popup {
  constructor(popupElement) {
    this._popupElement = document.querySelector(popupElement)
    this._handleEscClose = this._handleEscClose.bind(this)
    this._handleClickOverlay = this._handleClickOverlay.bind(this);
  }

  // Открытие попапа
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if (evt.key === escCode) {
      this.close();
    }
  }

  _handleClickOverlay(evt) {
    if (evt.target === this._popupElement) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('pointerdown', this._handleClickOverlay)
    this._popupElement.querySelector('.popup__closeButton').addEventListener('click', () => this.close());
  }
}
