
function onKeyDown(event){
  var p = getPoint();
  getCircle(p);
  showKey(event.key, p);
}

function getPoint(){
  return new Point(getRandom(1500), getRandom(500));
}

function getCircle(point){
  new Path.Circle(point, getRandom(60)).fillColor = 'orange';
}

function getRandom(seed){
  if (!seed > 0){
    seed = 900;
  }

  return Math.random() * seed;
}

function showKey(key, point){
  // alert(point.x);
  new PointText({
    point: point,
    content: key,
    justification: 'center',
    fontSize: 15
  });
}
