let slideFunctions = {};
let obnizes = [];
let onSectionLeave = {};
let index = 0;

const action = (slideNum) => {
  if (slideNum in slideFunctions) {
    console.log(slideNum);
    slideFunctions[slideNum]();
  }
};

const loadSlideScript = (url, callback = () => {}) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  console.log(url);

  document.body.appendChild(script);

  script.onload = callback;
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

Reveal.on('slidechanged', (event) => {
  if (onSectionLeave[index]) onSectionLeave[index]();
  index = event.indexh + 1;
  action(index);
});
