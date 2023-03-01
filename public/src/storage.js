let pdfUploadDone = false;
let scriptUploadDone = false;

const uploadTask = async (storageRef, file, metadata) => {
  const uploadTask = storageRef.put(file, metadata);
  await uploadTask.on(
    'state_changed',
    function (snapshot) {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    },
    function (error) {
      // Handle unsuccessful uploads
      alert('ファイルのアップロードに失敗しました');
    },
    function () {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
      });
    }
  );
  return new Promise((resolve) => {
    resolve('ファイル読み込み完了');
  });
};
