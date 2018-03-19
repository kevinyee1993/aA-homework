document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById('mycanvas');
  let ctx = canvas.getContext('2d');

  //Rectangle
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(100,10,500,500);

  //Circle
  void ctx.beginPath();
  void ctx.arc(100, 100, 50, 0, 2*Math.PI, true);
  ctx.strokeStyle = 'purple';
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = 'yellow';
  ctx.fill();

  //My shape
  void ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(100,200);
  ctx.lineTo(200,100);
  ctx.lineTo(100,100);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.stroke();
  // ctx.fill();
});
