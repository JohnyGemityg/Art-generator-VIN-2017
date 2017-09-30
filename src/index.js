const getCanvas = () => document.getElementById("canvas");
const setupCanvas = canvas => {
  const canvasCtx = getCanvas().getContext("2d");
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  canvas.width = width;
  canvas.height = height;
  canvasCtx.fillStyle = "black";
  canvasCtx.fillRect(0, 0, width, height);
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

const drawCircle = (canvas, strokeConf, possitionCords, radius) => {
  const canvasCtx = canvas.getContext("2d");
  canvasCtx.beginPath();
  canvasCtx.strokeStyle = strokeConf.strokeStyle;
  canvasCtx.lineWidth = strokeConf.lineWidth;
  canvasCtx.fillStyle = strokeConf.fillStyle;
  canvasCtx.arc(possitionCords.x, possitionCords.y, radius, 0, 2 * Math.PI);
  canvasCtx.fill();
  canvasCtx.stroke();
};

const drawSquare = (canvas, strokeConf, possitionCords, widius) => {
  const canvasCtx = canvas.getContext("2d");
  canvasCtx.beginPath();
  canvasCtx.strokeStyle = strokeConf.strokeStyle;
  canvasCtx.lineWidth = strokeConf.lineWidth;
  canvasCtx.fillStyle = strokeConf.fillStyle;
  canvasCtx.rect(possitionCords.x, possitionCords.y, widius, widius);
  canvasCtx.fill();
  canvasCtx.stroke();
};

const run = () => {
  const canvas = getCanvas();
  setupCanvas(canvas);
  for (let i = 0; i < 500; i += 1) {
    const strokeConf = {
      strokeStyle: getRandomColor(),
      lineWidth: Math.random() * 15,
      fillStyle: getRandomColor(),
    };
    const possitionCords = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    };
    const radius = Math.random() * canvas.height / 10.2;
    if (Math.random() < 0.3) {
      drawSquare(canvas, strokeConf, possitionCords, radius);
    } else {
      drawCircle(canvas, strokeConf, possitionCords, radius);
    }
  }
};

run();
