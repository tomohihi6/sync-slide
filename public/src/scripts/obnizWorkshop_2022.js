let obniz = new Obniz.M5StickC('');
let servo;

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

  obniz.led.on();
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
  obniz.led.off();
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
  obniz.led.blink();
  onSectionLeave[7] = () => {
    obniz.led.off();
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
  obniz.display.clear();
  obniz.display.print('Hello World');
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
  obniz.display.clear();
  obniz.display.font('Avenir', 70);
  obniz.display.print('🧡😁');
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

obniz.display.setColor('#FF0000');
obniz.display.rect(50, 40, 20, 20, true);
obniz.display.setColor('blue');
obniz.display.circle(100, 30, 20, true);`;
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
  hljs.initHighlightLinesOnLoad([
    [{ start: 3, end: 17, color: 'rgba(255, 255, 0, 0.2)' }],
  ]);
  obniz.display.clear();
  obniz.display.line(30, 30, 100, 30);
  obniz.display.rect(20, 20, 20, 20);
  obniz.display.circle(100, 30, 20);

  obniz.display.line(60, 50, 100, 30);
  obniz.display.rect(50, 40, 20, 20, true);
  obniz.display.line(50, 10, 100, 30);
  obniz.display.circle(50, 10, 10, true);

  obniz.display.setColor('#FF0000');
  obniz.display.rect(50, 40, 20, 20, true);
  obniz.display.setColor('blue');
  obniz.display.circle(100, 30, 20, true);
  onSectionLeave[11] = () => {
    doHighlight('video');
  };
};

slideFunctions[13] = () => {
  doHighlight(['video-summary', 'console-container', 'panel_area']);
  document.getElementById(
    'video-title'
  ).innerText = `実際にデバイスを触って，加速度を確かめてみてください．`;
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
  let accInterval;
  obniz.setupIMUWait().then(() => {
    const ctx = obniz.util.createCanvasContext(
      obniz.display.width,
      obniz.display.height
    );
    accInterval = setInterval(async () => {
      const acc = await obniz.imu.getAccelWait();
      singleLog(
        `x: ${acc.x.toFixed(2)}, y: ${acc.y.toFixed(2)}, z: ${acc.z.toFixed(2)}`
      );
      ctx.clearRect(0, 0, obniz.display.width, obniz.display.height);
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
        obniz.display.width
      );
      obniz.display.draw(ctx);
    }, 500);
  });
  onSectionLeave[13] = () => {
    clearInterval(accInterval);
    obniz.display.clear();
    doHighlight('video');
    document.getElementById('video-title').innerText = ``;
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
  servo = obniz.wired('ServoMotor', { signal: 26 });
  servo.angle(10);
};

slideFunctions[16] = () => {
  servo.angle(170);
};

slideFunctions[17] = () => {
  servo.angle(90);
};

slideFunctions[19] = () => {
  doHighlight(['video-summary', 'console-container', 'panel_area']);
  document.getElementById(
    'video-title'
  ).innerText = `実際にデバイスを触って，加速度を確かめてみてください．`;
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
  let accInterval;
  obniz.setupIMUWait().then(() => {
    const ctx = obniz.util.createCanvasContext(
      obniz.display.width,
      obniz.display.height
    );
    accInterval = setInterval(async () => {
      const acc = await obniz.imu.getAccelWait();
      singleLog(
        `x: ${acc.x.toFixed(2)}, y: ${acc.y.toFixed(2)}, z: ${acc.z.toFixed(2)}`
      );
      ctx.clearRect(0, 0, obniz.display.width, obniz.display.height);
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
        obniz.display.width
      );
      obniz.display.draw(ctx);
    }, 500);
  });
  onSectionLeave[19] = () => {
    clearInterval(accInterval);
    obniz.display.clear();
  };
};

slideFunctions[20] = () => {
  doHighlight(['video-summary', 'panel_area']);
  let accInterval;
  obniz.setupIMUWait().then(() => {
    accInterval = setInterval(async () => {
      const acc = await obniz.imu.getAccelWait();
      const angle = 90 * acc.x + 90;
      servo.angle(angle);
    }, 100);
  });
  onSectionLeave[20] = () => {
    clearInterval(accInterval);
    doHighlight('video');
  };
};
