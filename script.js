const membersList = [
  {
    name: 'hanako',
    obnizID: '6886-6800',
  },
  { name: 'tarou', obnizID: '4548-5104' },
];

const obnizes = [];
membersList.forEach((v) => {
  obnizes[v.name] = new Obniz(v.obnizID);
});

slideFunctions[1] = () => {
  Object.keys(obnizes).forEach(function (key) {
    obnizes[key].display.clear();
    obnizes[key].display.print('テスト');
  });
};

slideFunctions[2] = () => {
  obniz.led.on();
};

slideFunctions[3] = () => {
  obniz.led.off();
};

slideFunctions[4] = () => {
  obniz.buttonA.onchange = (state) => {
    obniz.display.clear();
    obniz.display.print('buttonA was pushed');
  };
};

slideFunctions[5] = () => {
  obniz.buttonB.onchange = (state) => {
    obniz.display.clear();
    obniz.display.print('buttonB was pushed');
  };
};

slideFunctions[6] = () => {
  obniz.setupIMUWait().then(() => {
    let interval;
    interval = setInterval(() => {
      obniz.imu.getAccelWait().then((accel) => {
        obniz.display.print(`accX: ${accel.x}`);
        obniz.display.print(`accY: ${accel.y}`);
        obniz.display.print(`accZ: ${accel.z}`);
      });
    }, 1000);
  });
};
