// const canvasContainer = document.querySelector('div.canvas-container');
// const video = document.getElementById("vd1");
// const videoControl = document.getElementById("video-control");
// const inkStart = document.getElementById("ink-start");
// const inkStop = document.getElementById("ink-stop");
// const inkClear = document.getElementById("ink-clear");

// const mouse = {x: 0, y: 0};


// window.onload = function() {
//   init();
//   window.addEventListener('resize', init, false);
// }

// function init() {
//   const canvas = document.getElementById("videoCanvas");
//   const c = canvas.getContext("2d");
//   /* If you want to use the full window as the canvas **/
//   // const canvasWidth = window.innerWidth - 5; /** except scrollbars **/
//   // const canvasHeight = window.innerHeight - 5; /** except scrollbars **/

//   /** If you want to use only the height and width of the parent div **/
//   /** In Jquery **/
//   // const canvasWidth = canvasContainer.width();
//   // const canvasHeight = canvasContainer.height();

//   /** In normal js **/
//   const canvasWidth = canvasContainer.offsetWidth;
//   const canvasHeight = canvasContainer.offsetHeight;

//   c.canvas.width = canvasWidth;
//   c.canvas.height = canvasHeight;

//   videoControl.addEventListener('click', function () {
//     if (!video.paused) video.pause();
//     else video.play();
//   }, false);

//   canvas.addEventListener('mousemove', function(e) {
//     mouse.x = e.pageX - this.offsetLeft;
//     mouse.y = e.pageY - this.offsetTop;
//   }, false);

//   c.lineWidth = 3;
//   c.lineJoin = 'round'; 
//   c.lineCap = 'round';
//   c.strokeStyle = '#FF0000';

//   canvas.addEventListener('mousedown', function() {
//     c.beginPath();
//     c.moveTo(mouse.x, mouse.y);
//     canvas.addEventListener('mousemove', onPaint, false);
//   }, false);


//   canvas.addEventListener('mouseup', function () {
//     canvas.removeEventListener('mousemove', onPaint, false);
//   }, false);

//   let onPaint = function() {
//     c.lineTo(mouse.x, mouse.y);
//     c.stroke();
//   }

// }