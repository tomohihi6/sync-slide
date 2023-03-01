// const csvData = JSON.parse(sessionStorage.getItem('csv'));

// if (csvData) {
//   csvData.forEach((v) => {
//     obnizes[v[1]] = new Obniz.M5StickC(v[0]);
//     console.log(obnizes[v[1]]);
//   });
// }

// slideFunctions[1] = () => {
//   doHighlight('video');
// };

// slideFunctions[3] = () => {
//   doHighlight(['video', 'panel_area']);
//   const doc = editor0.getDoc();
//   doc.setValue(
//     `const obniz = new obniz.M5StickC('id');

// obniz.led.on();`
//   );
//   Object.keys(obnizes).forEach(function (key) {
//     if (obnizes[key].connectionState === 'connected') {
//       obnizes[key].led.on();
//     }
//   });
// };

// slideFunctions[4] = () => {
//   doHighlight(['video', 'panel_area']);
//   const doc = editor0.getDoc();
//   doc.setValue(
//     `const obniz = new obniz.M5StickC('id');

// obniz.led.off();`
//   );
//   Object.keys(obnizes).forEach(function (key) {
//     if (obnizes[key].connectionState === 'connected') {
//       obnizes[key].led.off();
//     }
//   });
// };

// slideFunctions[5] = () => {
//   doHighlight(['video', 'panel_area']);
//   const doc = editor0.getDoc();
//   doc.setValue(
//     `const obniz = new obniz.M5StickC('id');

// while() {
//   obniz.led.on();
//   obniz.wait(100);
//   obniz.led.off();
//   obniz.wait(100);
// }`
//   );
//   Object.keys(obnizes).forEach(function (key) {
//     if (obnizes[key].connectionState === 'connected') {
//       obnizes[key].led.blink();
//     }
//   });
// };

// 0
// 00:00:00,000 -> 00:00:01,000
// const obniz = new Obniz("input id here");

1
00:00:10,000 -> 00:00:15,000
obniz.display.clear();
obniz.diplay.print("Hello World");
onSectionLeave[index] = () => {
  obniz.display.clear();
}

const obniz = new Obniz('input id here');

slideFunction[2] = () => {
  obniz.display.clear();
  obniz.diplay.print('Hello World');
  onSectionLeave[index] = () => {
    obniz.diplay.clear();
  }
};

const obniz = new Obniz.M5StickC('');

slideFunctions[2] = () => {
  obniz.onconnect = () => {
    obniz.display.print('Hello World');
  };

  doHighlight(['video', 'panel_area']);

  const doc = editor0.getDoc();
  doc.setValue(
    `const obniz = new Obniz.M5StickC('');

  obniz.display.clear();
  obniz.display.print("Hello World");`
  );
  onSectionLeave[2] = () => {
    obniz.display.print('leave');
  };
};

slideFunctions[3] = () => {
  obniz.led.on();

  const doc = editor0.getDoc();
  doc.setValue(
    `const obniz = new Obniz.M5StickC('');

  obniz.led.off();`
  );
};

slideFunctions[4] = () => {
  obniz.led.off();
};
