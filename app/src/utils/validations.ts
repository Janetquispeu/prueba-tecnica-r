export const required = (message) => (value) => {
  let data;
  if (typeof value === 'string') {
    data = value?.trim() ? null : message;
  } else {
    data = value ? null : message;
  }
  return data;
};

export const checkField = (message) => (value) => {
  let check;

  if (value) {
    check = true;
  } else {
    check = false
  }

  return check ? null : message;
}
