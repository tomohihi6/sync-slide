pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.min.js';

const getPdf = async (pdfUrl) => {
  const pdfDoc = await pdfjsLib.getDocument({ url: pdfUrl }).promise;
  return pdfDoc;
};

const getImageUrl = async (pdfDoc, pageNum) => {
  const page = await pdfDoc.getPage(pageNum);
  const scale = 1.0;
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  const canvasContext = canvas.getContext('2d');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  canvasContext.width = viewport.width;
  canvasContext.height = viewport.height;

  const renderContext = {
    canvasContext,
    viewport,
  };
  const renderTask = await page.render(renderContext).promise;

  return canvas.toDataURL('image/jpeg');
};

const getAllImageUrl = async (pdfUrl) => {
  const pdfDoc = await getPdf(pdfUrl);
  const images = [];
  const lengthPages = pdfDoc.numPages;

  for (let i = 1; i <= lengthPages; i++) {
    const img = await getImageUrl(pdfDoc, i);
    images.push(img);
  }
  return images;
};
