// const canvasContainer = $('div.canvas-container');
const video = $("#vd1").get(0);
const videoControl = $("#video-control");
const inkStart = $("#ink-start");
const inkStop = $("#ink-stop");
const inkClear = $("#ink-clear");

const mouse = {x: 0, y: 0};

$(document).ready(function() {
  init();
  $(window).on('resize', init);
});


function init() {
  const canvas = $("#videoCanvas");
  const c = canvas.get(0).getContext("2d");
  // const canvasWidth = canvasContainer.width();
  // const canvasHeight = canvasContainer.height();
  // c.canvas.width = canvasWidth;
  // c.canvas.height = canvasHeight;

  // in actual production canvas will be height and width of the video container
  c.canvas.width = video.videoWidth;
  c.canvas.height= video.videoHeight;

  videoControl.on('click', function () {
    if (!video.paused) video.pause();
    else video.play();
  });

  canvas.on('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    // console.log(`${mouse.x}, ${mouse.y}`);
  });

  c.lineWidth = 3;
  c.lineJoin = 'round'; 
  c.lineCap = 'round';
  c.strokeStyle = '#FF0000';

  inkStart.on('click', function() {
    console.log("start inking...");
    inkStart.attr('disabled', true);
    canvas.css({cursor : 'crosshair'});
    canvas.on('mousedown', onDraw);

    canvas.on('mouseup mouseleave', function () {
      canvas.off('mousemove', onPaint);
    });
  });

  inkStop.on('click', function(){
    console.log('stop inking...');
    canvas.css({cursor : 'default'});
    canvas.off('mousedown', onDraw);  
    inkStart.attr('disabled', false);
  });

  inkClear.on('click', function() {
    console.log('clearing the canvas...');
    canvas.css({cursor : 'default'});
    canvas.off('mousemove', onPaint);
    c.clearRect(0, 0, c.canvas.width, c.canvas.height);
  });

  let onPaint = function() {
    c.lineTo(mouse.x, mouse.y);
    c.stroke();
  }

  let onDraw = function() {
    c.beginPath();
    c.moveTo(mouse.x, mouse.y);
    canvas.on('mousemove', onPaint);
  }
}