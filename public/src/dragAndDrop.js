const enableDragDrop = (dropArea, fileInput, accept) => {
  if (dropArea && fileInput) {
    dropArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropArea.classList.add('dragover');
    });

    dropArea.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dropArea.classList.remove('dragover');
    });

    dropArea.addEventListener('drop', (e) => {
      e.preventDefault();
      dropArea.classList.remove('dragover');

      const files = e.dataTransfer.files;

      if (files[0]) {
        if (files[0].type === accept) {
          fileInput.files = files;
          const newEvent = new Event('change');
          fileInput.dispatchEvent(newEvent);
        } else {
          alert('ファイルの拡張子が正しくありません．');
        }
      } else {
        alert('ファイルが正しく読み込まれませんでした．');
      }
    });
  }
};
