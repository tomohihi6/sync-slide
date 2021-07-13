const pdfArea = document.getElementById('drag-drop-pdf');
const pdfInput = document.getElementById('input-pdf');
const scriptArea = document.getElementById('drag-drop-script');
const scriptInput = document.getElementById('input-script');

const watchActivateStartButton = (pdfInput, scriptInput) => {
  const checkFileSelected = (inputElement) => {
    if (inputElement.files[0]) {
      return true;
    }
    return false;
  };

  pdfInput.addEventListener('change', (event) => {
    const fileNameContainer = document.getElementById('pdf-file-name');
    let fileName = event.target.files[0].name;
    console.log(fileName.length);
    if (fileName.length > 34) {
      const string = fileName.slice(0, -4);
      fileName = string.slice(0, 30) + '... .pdf';
    }
    fileNameContainer.innerHTML = fileName;
    if (checkFileSelected(event.target) && checkFileSelected(scriptInput)) {
      const startButton = document.getElementById('start-presentation-button');
      startButton.classList.remove('unable-button');
    }
  });

  scriptInput.addEventListener('change', (event) => {
    const fileNameContainer = document.getElementById('script-file-name');
    let fileName = event.target.files[0].name;
    if (fileName.length > 33) {
      const string = fileName.slice(0, -3);
      fileName = string.slice(0, 30) + '... .js';
    }
    fileNameContainer.innerHTML = fileName;
    if (checkFileSelected(event.target) && checkFileSelected(pdfInput)) {
      const startButton = document.getElementById('start-presentation-button');
      startButton.classList.remove('unable-button');
    }
  });
};

const getFileUrl = async (file) => {
  let result = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file, 'utf-8');
    reader.onload = (e) => {
      resolve(e.target.result);
    };
  });
  return result;
};

const startPresentation = async () => {
  const pdfFile = pdfInput.files[0];
  const scriptFile = scriptInput.files[0];

  sessionStorage.setItem('script', getFileUrl(scriptFile));
  const images = await getAllImageUrl(getFileUrl(pdfFile));
  sessionStorage.setItem('images', JSON.stringify(images));
  document.location = './presentation.html';
};

const scriptToString = () => {
  const scriptFile = scriptInput.files[0];
  const reader = new FileReader();
  reader.readAsText(scriptFile, 'utf-8');
  reader.onload = (e) => {
    return e.target.result;
  };
};

enableDragDrop(pdfArea, pdfInput, 'application/pdf');
enableDragDrop(scriptArea, scriptInput, 'text/javascript');
watchActivateStartButton(pdfInput, scriptInput);
