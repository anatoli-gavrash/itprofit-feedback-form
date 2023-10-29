const showFieldErrors = (fieldNames = []) => {
  const fieldNodes = document.querySelectorAll(`.feedback__form input, .feedback__form textarea`);
  
  for (const node of fieldNodes) {
    const isShowError = Boolean(fieldNames.find((name) => name === node.attributes.name.value));
    
    if (isShowError) {
      node.classList.add('error');
      node.nextElementSibling.classList.add('error');
    } else {
      node.classList.remove('error');
      node.nextElementSibling.classList.remove('error');
    }
  }
};

const showEndMessage = (status = '', message = 'Waiting for a response from the server') => {
  const successBlock = document.querySelector('.feedback__form-success');
  const successMessage = successBlock.querySelector('.feedback__form-success-message');

  switch (status) {
    case 'error':
      successBlock.classList.add('show', 'error');
      successMessage.innerText = message;
      break;
    case 'success':
      successBlock.classList.add('show', 'success');
      successMessage.innerText = message;
      break;
    case 'close':
      successBlock.classList.remove('show', 'error', 'success');
      successMessage.innerText = message;
      break;
    default:
      successBlock.classList.add('show');
      successBlock.classList.remove('error', 'success');
      successMessage.innerText = message;
  }
};

const showModalWindow = (isShow) => {
  const modal = document.querySelector('.modal');
  isShow ? modal.classList.add('show') : modal.classList.remove('show');
};

const freezeScrollPage = (isFreeze) => {
  const body = document.body;
  isFreeze ? body.classList.add('hide-scroll') : body.classList.remove('hide-scroll');
};

export {
  showFieldErrors,
  showEndMessage,
  showModalWindow,
  freezeScrollPage
};
