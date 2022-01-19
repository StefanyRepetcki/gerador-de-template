const isoString = jsDate => {
  let date = new Date();
  if (jsDate) {
    date = new Date(jsDate);
  }
  return date.toISOString().split('T')[0];
};

export {
  isoString,
};
