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
    if (checkFileSelected(event.target) && checkFileSelected(scriptInput)) {
      const startButton = document.getElementById('start-presentation-button');
      startButton.classList.remove('unable-button');
    }
  });

  scriptInput.addEventListener('change', (event) => {
    if (checkFileSelected(event.target) && checkFileSelected(pdfInput)) {
      const startButton = document.getElementById('start-presentation-button');
      startButton.classList.remove('unable-button');
    }
  });
};

const startPresentation = async () => {
  const pdfFile = pdfInput.files[0];
  const scriptFile = scriptInput.files[0];

  const loadFile = async (file, type) => {
    const reader = new FileReader();
    reader.readAsDataURL(file, 'utf-8');
    reader.onload = async (e) => {
      if (type === 'pdf') {
        const images = await getAllImageUrl(e.target.result);
        sessionStorage.setItem('images', JSON.stringify(images));
        document.location = './presentation.html';
      } else if (type === 'script') {
        sessionStorage.setItem('script', e.target.result);
      } else return;
    };
  };

  await loadFile(scriptFile, 'script');
  await loadFile(pdfFile, 'pdf');
};

enableDragDrop(pdfArea, pdfInput, 'application/pdf');
enableDragDrop(scriptArea, scriptInput, 'text/javascript');
watchActivateStartButton(pdfInput, scriptInput);
