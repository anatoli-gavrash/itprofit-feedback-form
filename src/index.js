import IMask from 'imask';
import {
  endMessageButtonHandler,
  formHandler,
  resetButtonHandler,
  modalOpenButtonHandler,
  modalCloseButtonHandler,
  modalHandler
} from './utils/handlers';
import './index.scss';

(function () {
  const feedbackForm = document.querySelector('.feedback__form');
  const phoneField = feedbackForm.querySelector('#id-phone');
  const formResetButton = feedbackForm.querySelector('.feedback__form-buttons-button.alt-button');
  const endMessageButton = feedbackForm.querySelector('.feedback__form-success-button');
  const modal = document.querySelector('.modal');
  const modalOpenButton = document.querySelector('.modal-open-button');
  const modalCloseButton = document.querySelector('.modal__button');

  IMask(phoneField, {mask: '+{375} (00) 000-00-00'});

  feedbackForm.addEventListener('submit', formHandler);
  formResetButton.addEventListener('click', resetButtonHandler);
  endMessageButton.addEventListener('click', endMessageButtonHandler);
  modal.addEventListener('click', modalHandler);
  modalOpenButton.addEventListener('click', modalOpenButtonHandler);
  modalCloseButton.addEventListener('click', modalCloseButtonHandler);
}());
