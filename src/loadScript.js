let slideFunctions = {};
const csvData = JSON.parse(sessionStorage.getItem('csv'));

const loadSlideScript = (url, callback = () => {}) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  console.log(url);

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
  const currentSlideNum = event.indexh + 1;
  action(currentSlideNum);
});
