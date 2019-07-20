const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');
const paintingSurface = document.getElementById('content');
const paintStyle = getComputedStyle(paintingSurface);



canvas.width = parseInt(paintStyle.getPropertyValue('width'));
canvas.height = parseInt(paintStyle.getPropertyValue('height'));


let mouse = {x: 0, y: 0};

var video = document.getElementById('video');

video.addEventListener('play', function () {
  var $this = this; //cache
  (function loop() {
    if (!$this.paused && !$this.ended) {
      c.drawImage($this, 0, 0);
      setTimeout(loop, 1000 / 60); // drawing at 30fps
    }
  })();
}, 0);


canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

c.lineWidth = 3;
c.lineJoin = 'round';
c.lineCap = 'round';
c.strokeStyle = '#FF0000';

canvas.addEventListener('mousedown', function(e) {
  c.beginPath();
  c.moveTo(mouse.x, mouse.y);
  canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function (e) {
  canvas.removeEventListener('mousemove', onPaint, false);
}, false);

let onPaint = function() {
  c.lineTo(mouse.x, mouse.y);
  c.stroke();
}