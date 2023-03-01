function log(txt) {
  const newLine = document.createElement('li');
  newLine.innerHTML =
    typeof txt === 'string' ? txt : JSON.stringify(txt, null, 4);
  document.querySelector('#console').appendChild(newLine);
  $('#console-container').animate(
    { scrollTop: $('#console-container')[0].scrollHeight },
    'fast'
  );
}

function clearLog() {
  const console = document.querySelector('#console');
  while (console.firstChild) {
    console.removeChild(console.firstChild);
  }
}

function singleLog(txt) {
  document.querySelector('#console').innerText = txt;
}
