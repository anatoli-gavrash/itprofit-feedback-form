const validation = (ruleNames = [], string) => {
  const rules = {
    name: /^\b[\p{L} -]+\b$/u,
    email: /^[\.\w-]+@([\w-]+\.)+[\w-]{1,4}$/,
    phone: /^[0-9]{11,12}$/,
    message: /^\b.+$/
  };

  return ruleNames.map((ruleName) => {
    return {
      name: ruleName,
      isValid: rules[ruleName].test(string)
    };
  });
};

export default validation;
