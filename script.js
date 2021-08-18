let obnizes = [];

csvData.forEach((v) => {
  obnizes[v[1]] = new Obniz.M5StickC(v[0]);
  console.log(obnizes[v[1]]);
});

slideFunctions[2] = () => {
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].display.clear();
      obnizes[key].display.print('Hello World');
    }
  });
};

slideFunctions[3] = () => {
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].led.blink();
    }
  });
};

slideFunctions[4] = () => {
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].led.off();
      obnizes[key].buttonA.onchange = () => {
        obnizes[key].led.on();
      };
      obnizes[key].buttonB.onchange = () => {
        obnizes[key].led.off();
      };
    }
  });
};

slideFunctions[5] = () => {
  Object.keys(obnizes).forEach(function (key) {
    if (obnizes[key].connectionState === 'connected') {
      obnizes[key].setupIMUWait().then(() => {
        let interval;
        interval = setInterval(() => {
          obnizes[key].imu.getAccelWait().then((accel) => {
            obnizes[key].display.clear();
            obnizes[key].display.print(`accX: ${accel.x}`);
            obnizes[key].display.print(`accY: ${accel.y}`);
            obnizes[key].display.print(`accZ: ${accel.z}`);
          });
        }, 2000);
      });
    }
  });
};
