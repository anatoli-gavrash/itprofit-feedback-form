const validation = (data) => {
  const rules = {
    name: /^(?![^\p{L}])[\p{L} -]*[\p{L}]$/u,
    email: /^[\.\w-]+@([\w-]+\.)+[\w-]{1,4}$/,
    phone: /^\+375 ?\(\d{2}\) ?\d{3}-\d{2}-\d{2}$/,
    message: /^.+$/
  };

  const failed = [];

  for (const [ruleName, string] of data) {
    if (!rules[ruleName].test(string)) {
      failed.push(ruleName);
    }
  }

  return failed;
};

export default validation;
