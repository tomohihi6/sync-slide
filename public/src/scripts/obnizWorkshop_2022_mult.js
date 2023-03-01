const csvData = JSON.parse(sessionStorage.getItem('csv'));
let servo = {};

if (csvData) {
  csvData.forEach((v) => {
    obnizes[v[1]] = new Obniz.M5StickC(v[0]);
    console.log(obnizes[v[1]]);
  });
}

slideFunctions[1] = () => {
  doHighlight('video');
};

slideFunctions[5] = () => {
  doHighlight(['video', 'panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

obniz.led.on();`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 0, end: 2, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].led.on();
    }
  });
};

slideFunctions[6] = () => {
  doHighlight(['video', 'panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

obniz.led.off();`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 2, end: 2, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].led.off();
    }
  });
};

slideFunctions[7] = () => {
  doHighlight(['video', 'panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

obniz.onloop = async () => {
  obniz.led.on();
  await obniz.wait(100);
  obniz.led.off();
  await obniz.wait(100);
}`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 2, end: 7, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].led.blink();
    }
  });

  onSectionLeave[7] = () => {
    Object.keys(obnizes).forEach(function (key) {
      if (obnizes[key].connectionState === 'connected') {
        obnizes[key].led.off();
      }
    });

    doHighlight('video');
  };
};

slideFunctions[9] = () => {
  doHighlight(['video', 'panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

obniz.display.clear();
obniz.display.print('Hello World')`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 2, end: 3, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].display.clear();
      obnizes[key].display.print('Hello World');
    }
  });
};

slideFunctions[10] = () => {
  doHighlight(['video', 'panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

obniz.display.clear();
obniz.display.font('Avenir',70)
obniz.display.print("🧡😁");`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 2, end: 4, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].display.clear();
      obnizes[key].display.font('Avenir', 70);
      obnizes[key].display.print('🧡😁');
    }
  });
};

slideFunctions[11] = () => {
  doHighlight(['video', 'panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

obniz.display.clear();
obniz.display.line(30, 30, 100, 30);
obniz.display.rect(20, 20, 20, 20);
obniz.display.circle(100, 30, 20);

obniz.display.line(60, 50, 100, 30);
obniz.display.rect(50, 40, 20, 20, true);
obniz.display.line(50, 10, 100, 30);
obniz.display.circle(50, 10, 10, true);

// 色変更はカラーディスプレイを持つ公式製品でのみ利用できます。
// それ以外ではモノクロに変換されます
obniz.display.setColor('#FF0000');
obniz.display.rect(50, 40, 20, 20, true);
obniz.display.setColor('blue');
obniz.display.circle(100, 30, 20, true);`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 3, end: 17, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].display.clear();
      obnizes[key].display.line(30, 30, 100, 30);
      obnizes[key].display.rect(20, 20, 20, 20);
      obnizes[key].display.circle(100, 30, 20);

      obnizes[key].display.line(60, 50, 100, 30);
      obnizes[key].display.rect(50, 40, 20, 20, true);
      obnizes[key].display.line(50, 10, 100, 30);
      obnizes[key].display.circle(50, 10, 10, true);

      obnizes[key].display.setColor('#FF0000');
      obnizes[key].display.rect(50, 40, 20, 20, true);
      obnizes[key].display.setColor('blue');
      obnizes[key].display.circle(100, 30, 20, true);
    }
  });

  onSectionLeave[11] = () => {
    doHighlight('video');
  };
};

slideFunctions[13] = () => {
  doHighlight(['console-container', 'panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

await obniz.setupIMUWait();
let ctx = obniz.util.createCanvasContext(obniz.display.width, obniz.display.height);

const accInterval = setInterval(async () => {
  const acc = await obniz.imu.getAccelWait();
  ctx.fillStyle = 'white';
  ctx.font = '20px serif';
  ctx.fillText(
    'Accel: ' + acc.x.toFixed(2) + ',' + acc.y.toFixed(2) + ',' + acc,
    z.toFixed(2),
    0,
    20,
    obniz.display.width
  );
  obniz.display.draw(ctx);
}, 100);`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 2, end: 17, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  let accInterval = {};
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].setupIMUWait().then(() => {
        const ctx = obnizes[key].util.createCanvasContext(
          obnizes[key].display.width,
          obnizes[key].display.height
        );
        accInterval[key] = setInterval(async () => {
          const acc = await obnizes[key].imu.getAccelWait();
          singleLog(
            `x: ${acc.x.toFixed(2)}, y: ${acc.y.toFixed(2)}, z: ${acc.z.toFixed(
              2
            )}`
          );
          ctx.clearRect(
            0,
            0,
            obnizes[key].display.width,
            obnizes[key].display.height
          );
          ctx.fillStyle = 'white';
          ctx.font = '20px serif';
          ctx.fillText(
            'Accel: ' +
              acc.x.toFixed(2) +
              ',' +
              acc.y.toFixed(2) +
              ',' +
              acc.z.toFixed(2),
            0,
            20,
            obnizes[key].display.width
          );
          obnizes[key].display.draw(ctx);
        }, 500);
      });
    }
  });
  onSectionLeave[13] = () => {
    Object.keys(obnizes).forEach(function (key) {
      if (obnizes[key].connectionState === 'connected') {
        clearInterval(accInterval[key]);
        obnizes[key].display.clear();
      }
    });

    doHighlight('video');
  };
};

slideFunctions[15] = () => {
  doHighlight(['video', 'panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

const servo = obniz.wired('ServoMotor', {signal: 26})
servo.angle(90);`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 2, end: 3, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      servo[key] = obnizes[key].wired('ServoMotor', { signal: 26 });
      servo[key].angle(10);
    }
  });
};

slideFunctions[16] = () => {
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      servo[key].angle(170);
    }
  });
};

slideFunctions[17] = () => {
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      servo[key].angle(90);
    }
  });
};

slideFunctions[19] = () => {
  doHighlight(['panel_area']);
  code1.innerHTML = `const obniz = new Obniz.M5StickC('');

await obniz.setupIMUWait();
const servo = obniz.wired('ServoMotor', { signal: 26 });
const accInterval = setInterval(async () => {
  const acc = await obniz.imu.getAccelWait();
  angle = 90 * acc.x + 90;
  servo.angle(angle);
}, 500);`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 2, end: 8, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  let accInterval = {};
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].setupIMUWait().then(() => {
        const ctx = obnizes[key].util.createCanvasContext(
          obnizes[key].display.width,
          obnizes[key].display.height
        );
        accInterval[key] = setInterval(async () => {
          const acc = await obnizes[key].imu.getAccelWait();
          singleLog(
            `x: ${acc.x.toFixed(2)}, y: ${acc.y.toFixed(2)}, z: ${acc.z.toFixed(
              2
            )}`
          );
          ctx.clearRect(
            0,
            0,
            obnizes[key].display.width,
            obnizes[key].display.height
          );
          ctx.fillStyle = 'white';
          ctx.font = '20px serif';
          ctx.fillText(
            'Accel: ' +
              acc.x.toFixed(2) +
              ',' +
              acc.y.toFixed(2) +
              ',' +
              acc.z.toFixed(2),
            0,
            20,
            obnizes[key].display.width
          );
          obnizes[key].display.draw(ctx);
        }, 500);
      });
    }
  });
  onSectionLeave[19] = () => {
    Object.keys(obnizes).forEach(function (key) {
      if (obnizes[key].connectionState === 'connected') {
        clearInterval(accInterval[key]);
        obnizes[key].display.clear();
      }
    });
  };
};

slideFunctions[20] = () => {
  doHighlight(['video']);

  let accInterval = {};
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].setupIMUWait().then(() => {
        accInterval[key] = setInterval(async () => {
          const acc = await obnizes[key].imu.getAccelWait();
          const angle = 90 * acc.x + 90;
          servo[key].angle(angle);
        }, 500);
      });
    }
  });

  onSectionLeave[20] = () => {
    Object.keys(obnizes).forEach(function (key) {
      if (obnizes[key].connectionState === 'connected') {
        clearInterval(accInterval[key]);
      }
    });

    doHighlight('video');
  };
};
