import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({
    popupElement,
    handleFormSubmit
  }) {
    super(popupElement);

    this._form = this._popupElement.querySelector(".popup__form");
    this._saveButton = this._form.querySelector('.popup__saveBtn')
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    })
  }

  close() {
    this._form.reset();
    super.close();
  }
}
