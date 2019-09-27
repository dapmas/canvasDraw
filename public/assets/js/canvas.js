var video = document.getElementById("vd1");
var btn = document.getElementById("btn-control");
var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");

btn.addEventListener('click', function () {
  if (!video.paused) video.pause();
  else video.play();
}, false);



let mouse = {x: 0, y: 0};

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

c.lineWidth = 3;
c.lineJoin = 'round';
c.lineCap = 'round';
c.strokeStyle = '#FF0000';

canvas.addEventListener('mousedown', function() {
  c.beginPath();
  c.moveTo(mouse.x, mouse.y);
  canvas.addEventListener('mousemove', onPaint, false);
}, false);


canvas.addEventListener('mouseup', function () {
  canvas.removeEventListener('mousemove', onPaint, false);
}, false);

let onPaint = function() {
  c.lineTo(mouse.x, mouse.y);
  c.stroke();
}
