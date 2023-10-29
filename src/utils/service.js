const sendForm = async (form) => {
  try {
    const response = await fetch('/api/registration', {method: 'POST', body: form});
    const json = await response.json();

    return json;
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
};

export {sendForm};
