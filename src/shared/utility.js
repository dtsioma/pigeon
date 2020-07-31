export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
}

export const showErrorMessage = (message) => {
  switch (message) {
    case 'INVALID_PASSWORD': return 'Password is incorrect. Try again.';
    case 'EMAIL_NOT_FOUND': return 'User with such email is not found. Try another one.';
    case 'USER_DISABLED': return 'Your account is disabled. Try again later or contact administator.';
    case 'EMAIL_EXISTS': return 'User with such email already exist. Try another email or log in.';
    case 'TOO_MANY_ATTEMPTS_TRY_LATER': return 'All requests from this device are temporarily blocked due to unusual activity. Try again later.';
    default: return message;
  }
}

export const deepCopy = (inputObj) => {
  let outputObj, value, key;
  if (typeof inputObj !== 'object' || inputObj === null) {
    return inputObj
  }
  outputObj = Array.isArray(inputObj) ? [] : {};
  for (key in inputObj) {
    value = inputObj[key];

    outputObj[key] = deepCopy(value);
  }
  return outputObj;
}