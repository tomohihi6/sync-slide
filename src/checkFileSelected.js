const checkFileSelected = (inputElement) => {
  if (inputElement.files[0]) {
    console.log(inputElement.files[0]);
    return true;
  }
  return false;
};
