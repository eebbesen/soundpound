var point;
var circle;

function onKeyDown(event){
  setPoint();
  setCircle();
  showKey(event.key);
}

function setPoint(){
  point = new Point(view.size.width, view.size.height) * Point.random();
}

function setCircle(){
  circle = new Path.Circle(point, getRandom(80));
  circle.fillColor = 'orange';
}

function getRandom(seed){
  if (!seed > 0){
    seed = 900;
  }

  return Math.random() * seed;
}

function onFrame(event){
  if (circle && circle != null) {
    circle.fillColor.hue += 1;
  }
}

function showKey(key){
  // alert(point.x);
  new PointText({
    point: point,
    content: key,
    justification: 'center',
    fontSize: 15
  });
}
