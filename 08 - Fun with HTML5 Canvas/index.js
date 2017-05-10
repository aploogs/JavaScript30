const canvas = document.querySelector('#draw');
const conteckst = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
conteckst.strokeStyle = '#BADA55';
conteckst.lineJoin = 'round';
conteckst.lineCap = 'round';
conteckst.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  conteckst.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  conteckst.beginPath();
  // start from
  conteckst.moveTo(lastX, lastY);
  // go to
  conteckst.lineTo(e.offsetX, e.offsetY);
  conteckst.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (conteckst.lineWidth >= 100 || conteckst.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    conteckst.lineWidth++;
  } else {
    conteckst.lineWidth--;
  }

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
