export default class PopupWithMenu {
  constructor(popupElement, langElement) {
    this._popupElement = document.querySelector(popupElement);
    this._langElement = langElement;
    this._handleClickOverlay = this._handleClickOverlay.bind(this);
    this._menu = this._popupElement.querySelector(".menu");
  }

  open() {
    this._popupElement.classList.add("navigation_opened");
    this._langElement.classList.add("bio__page-language_visible");
  }

  close() {
    this._popupElement.classList.remove("navigation_opened");
    this._langElement.classList.remove("bio__page-language_visible");
  }

  _handleClickOverlay(evt) {
    if (evt.target !== this._menu) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener(
      "pointerdown",
      this._handleClickOverlay
    );
    this._popupElement
      .querySelector(".navigation__close-icon")
      .addEventListener("click", () => this.close());
  }
}
