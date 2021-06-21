let slideFunctions = {};

const loadSlideScript = (url, callback = () => {}) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  script.onload = callback;

  document.body.appendChild(script);
};

const indexedFunction = (functions) => {
  if (functions == null) {
    return null;
  }

  if (currentSlideNum in functions) {
    return functions[currentSlideNum];
  }

  return null;
};

const action = (slideNum) => {
  if (slideNum in slideFunctions) {
    slideFunctions[slideNum]();
  }
};

Reveal.on('slidechanged', (event) => {
  const currentSlideNum = event.indexh;
  action(currentSlideNum);
});
