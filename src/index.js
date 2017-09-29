const getCanvas = () => document.getElementById("canvas");
const setupCanvas = canvas => {
  const canvasCtx = getCanvas().getContext("2d");
  canvasCtx.fillStyle = "black";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
};

function* getSinusPairs(count, amplitude, freq, faze = 0, step = 1) {
  for (let x = 0; x <= count; x += step) {
    const y = Math.sin(2 * Math.PI * freq * x + faze) * amplitude;
    yield { x, y };
  }
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const drawSinus = (
  canvas,
  strokeConf,
  possitionCords,
  amplitude,
  freq,
  faze = 0,
) => {
  console.log(strokeConf, possitionCords, amplitude, freq);
  const canvasCtx = canvas.getContext("2d");
  const sinusPairGen = getSinusPairs(canvas.width, amplitude, freq, faze);
  canvasCtx.beginPath();
  canvasCtx.strokeStyle = strokeConf.strokeStyle;
  canvasCtx.lineWidth = strokeConf.lineWidth;
  let sinusPair = sinusPairGen.next();
  canvasCtx.moveTo(
    sinusPair.value.x + possitionCords.x,
    sinusPair.value.y + possitionCords.y,
  );
  do {
    if (sinusPair.done) {
      break;
    }
    canvasCtx.lineTo(
      sinusPair.value.x + possitionCords.x,
      sinusPair.value.y + possitionCords.y,
    );
    sinusPair = sinusPairGen.next();
  } while (!sinusPair.done);

  canvasCtx.stroke();
};
const run = () => {
  const canvas = getCanvas();
  setupCanvas(canvas);
  for (let i = 0; i < 10; i += 1) {
    const strokeConf = {
      strokeStyle: getRandomColor(),
      lineWidth: Math.random() * 8,
    };
    const possitionCords = {
      x: 0,
      y: Math.random() * canvas.height,
    };
    const freq = Math.random() / 100;
    const amplitude = Math.random() * canvas.height;
    drawSinus(canvas, strokeConf, possitionCords, amplitude, freq);
  }
  /*
  drawSinus(
    canvas,
    { strokeStyle: "red", lineWidth: 6 },
    { x: 0, y: 90 },
    90,
    0.003,
  );
  drawSinus(
    canvas,
    { strokeStyle: "blue", lineWidth: 12 },
    { x: 0, y: 190 },
    90,
    0.003,
  );
  */
};

run();
