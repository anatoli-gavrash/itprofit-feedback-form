import {showEndMessage, showFieldErrors} from './dom-actions';
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

export {formHandler, resetButtonHandler, endMessageButtonHandler};
