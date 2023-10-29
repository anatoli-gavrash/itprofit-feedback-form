import {freezeScrollPage, showEndMessage, showFieldErrors, showModalWindow} from './dom-actions';
import {sendForm} from './service';
import validation from './validation';

const formHandler = (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const invalidFields = validation(formData);

  if (Array.isArray(invalidFields) && invalidFields.length === 0) {
    showEndMessage();

    sendForm(form).then((res) => {
      form.reset();
      showFieldErrors();
      showEndMessage(res.status, res.message);
    });

    return;
  }

  showFieldErrors(invalidFields);
};

const resetButtonHandler = (e) => {
  showFieldErrors();
};

const endMessageButtonHandler = (e) => {
  showEndMessage('close');
};

const modalHandler = (e) => {
  if (e.target.classList.contains('modal')) {
    showModalWindow(false);
    freezeScrollPage(false);
  }
};

const modalOpenButtonHandler = (e) => {
  showModalWindow(true);
  freezeScrollPage(true);
};

const modalCloseButtonHandler = (e) => {
  showModalWindow(false);
  freezeScrollPage(false);
};

export {
  formHandler,
  resetButtonHandler,
  endMessageButtonHandler,
  modalHandler,
  modalOpenButtonHandler,
  modalCloseButtonHandler
};
