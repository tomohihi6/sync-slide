const pdfArea = document.getElementById('drag-drop-pdf');
const pdfInput = document.getElementById('input-pdf');
const scriptArea = document.getElementById('drag-drop-script');
const scriptInput = document.getElementById('input-script');
const csvArea = document.getElementById('drag-drop-script');
const csvInput = document.getElementById('input-csv');

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

const getCsv = (file) => {
  const reader = new FileReader();
  reader.readAsText(file, 'utf-8');
  reader.onload = (e) => {
    makeCsv(e.target.result);
  };
};

const makeCsv = (csvData) => {
  const tmp = csvData.split('\n');

  let data = [];
  for (let i = 1; i < tmp.length; i++) {
    const row_data = tmp[i];
    data[i - 1] = row_data.split(',');
    console.log(data[i - 1]);
  }
  sessionStorage.setItem('csv', JSON.stringify(data));
  return data;
};

const startPresentation = async () => {
  const pdfFile = pdfInput.files[0];
  const scriptFile = scriptInput.files[0];
  const csvFile = csvInput.files[0];

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

  if (csvFile) {
    getCsv(csvFile);
  }

  await loadFile(scriptFile, 'script');
  await loadFile(pdfFile, 'pdf');
};

enableDragDrop(pdfArea, pdfInput, 'application/pdf');
enableDragDrop(scriptArea, scriptInput, 'text/javascript');
enableDragDrop(csvArea, csvInput, 'text/csv');
watchActivateStartButton(pdfInput, scriptInput);
