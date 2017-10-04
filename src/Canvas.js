import React from "react";

const setupCanvas = canvas => {
  const canvasCtx = canvas.getContext("2d");
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  canvasCtx.fillStyle = "#7B8D8E";
  canvasCtx.fillRect(0, 0, width, height);
};

function* getSinusPairs(count, amplitude, freq, faze = 0, step = 1) {
  for (let x = 0; x <= count; x += step) {
    const y = Math.sin(2 * Math.PI * freq * x + faze) * amplitude;
    yield { x, y };
  }
}

const setupCanvasStrokeStyle = (canvasCtx, strokeConf) => {
  Object.keys(strokeConf).forEach(key => {
    canvasCtx[key] = strokeConf[key];
  });
};

const handleFill = (canvasCtx, strokeConf) => {
  if (strokeConf.fillStyle) {
    canvasCtx.fill();
  }
};

const getRandomColor = () => {
  // const pallete = ["#7C786A", " #8DCDC1", "#D3E397", " #FFF5C3", " #EB6E44"];
  const pallete = ["#588C7E", "#f2e394", "#f2ae72", "#d96459", "#8c4646"];
  return pallete[Math.floor(Math.random() * pallete.length)];
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
  setupCanvasStrokeStyle(canvasCtx, strokeConf);
  canvasCtx.beginPath();

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
  handleFill(canvasCtx, strokeConf);
  canvasCtx.stroke();
};

const drawCircle = (canvasCtx, strokeConf, possitionCords, radius) => {
  setupCanvasStrokeStyle(canvasCtx, strokeConf);
  canvasCtx.beginPath();
  canvasCtx.arc(possitionCords.x, possitionCords.y, radius, 0, 2 * Math.PI);
  handleFill(canvasCtx, strokeConf);
  canvasCtx.stroke();
};

const drawRect = (canvasCtx, strokeConf, possitionCords, width, height) => {
  setupCanvasStrokeStyle(canvasCtx, strokeConf);
  canvasCtx.beginPath();
  canvasCtx.rect(possitionCords.x, possitionCords.y, width, height);
  handleFill(canvasCtx, strokeConf);
  canvasCtx.stroke();
};

const drawCurve = (canvasCtx, strokeConf, possitionCordsArray) => {
  setupCanvasStrokeStyle(canvasCtx, strokeConf);
  canvasCtx.beginPath();
  canvasCtx.moveTo(possitionCordsArray[0].x, possitionCordsArray[0].y);
  canvasCtx.bezierCurveTo(
    possitionCordsArray[1].x,
    possitionCordsArray[1].y,
    possitionCordsArray[2].x,
    possitionCordsArray[2].y,
    possitionCordsArray[3].x,
    possitionCordsArray[3].y,
  );
  handleFill(canvasCtx, strokeConf);
  canvasCtx.stroke();
};

const drawCircles = (canvas, circlesConf) => {
  const canvasCtx = canvas.getContext("2d");
  for (let i = 0; i < circlesConf.count; i += 1) {
    const strokeConf = {
      strokeStyle: getRandomColor(),
      lineWidth: Math.random() * circlesConf.lineWidth,
      fillStyle: circlesConf.fill ? getRandomColor() : null,
    };
    const possitionCords = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    };
    const radius = Math.random() * canvas.height / circlesConf.radiusC;
    drawCircle(canvasCtx, strokeConf, possitionCords, radius);
  }
};

const drawSquares = (canvas, squaresConf) => {
  const canvasCtx = canvas.getContext("2d");
  for (let i = 0; i < squaresConf.count; i += 1) {
    const strokeConf = {
      strokeStyle: getRandomColor(),
      lineWidth: Math.random() * squaresConf.lineWidth,
      fillStyle: squaresConf.fill ? getRandomColor() : null,
    };
    const possitionCords = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    };
    const size = Math.random() * canvas.height / squaresConf.sizeC;
    drawRect(canvasCtx, strokeConf, possitionCords, size, size);
  }
};

const drawPollock = (canvas, pollockConf) => {
  const canvasCtx = canvas.getContext("2d");
  for (let i = 0; i < pollockConf.count; i += 1) {
    const strokeConf = {
      strokeStyle: getRandomColor(),
      lineWidth: Math.random() * pollockConf.lineWidth,
      fillStyle: pollockConf.fill ? getRandomColor() : null,
    };
    const possitionCordsArray = new Array(4).fill(undefined).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }));
    drawCurve(canvasCtx, strokeConf, possitionCordsArray);
  }
};

const drawRows = (canvas, rowsConf) => {
  let cPx = 0;
  let cPy = 0;
  const canvasCtx = canvas.getContext("2d");
  const height = canvas.height / rowsConf.heightC;
  while (cPy < canvas.height) {
    while (cPx < canvas.width) {
      const strokeConf = {
        strokeStyle: getRandomColor(),
        lineWidth: Math.random() * rowsConf.lineWidth,
        fillStyle: rowsConf.fill ? getRandomColor() : null,
      };
      const width = Math.random() * canvas.width / rowsConf.widthC;
      drawRect(
        canvasCtx,
        strokeConf,
        {
          x: rowsConf.nice ? cPx + strokeConf.lineWidth / 2 : cPx,
          y: rowsConf.nice ? cPy + strokeConf.lineWidth / 2 : cPy,
        },
        width,
        height - (rowsConf.nice ? strokeConf.lineWidth : 0),
      );
      cPx += width + (rowsConf.nice ? strokeConf.lineWidth : 0);
    }
    cPx = 0;
    cPy += height;
  }
};

class Canvas extends React.Component {
  componentDidUpdate() {
    this.setup();
  }

  componentDidMount() {
    this.setup();
  }

  setup = () => {
    setupCanvas(this.canvasDom);
    if (this.props.activeArts.rows) {
      drawRows(this.canvasDom, this.props.rowsConf);
    }
    if (this.props.activeArts.squares) {
      drawSquares(this.canvasDom, this.props.squaresConf);
    }
    if (this.props.activeArts.circles) {
      drawCircles(this.canvasDom, this.props.circlesConf);
    }
    if (this.props.activeArts.pollock) {
      drawPollock(this.canvasDom, this.props.pollockConf);
    }
  };

  render() {
    return (
      <canvas
        ref={canvasDom => {
          this.canvasDom = canvasDom;
        }}
      />
    );
  }
}

export default Canvas;
