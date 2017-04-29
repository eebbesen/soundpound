var point, circle;
var circles = [];

function onKeyDown(event){
  setPoint();
  setCircle();
  // showKey(event.key);
}

function setPoint(){
  point = new Point(view.size.width, view.size.height) * Point.random();
}

function setCircle(){
  circle = new Path.Circle(point, getRandom(80));
  circle.fillColor = 'orange';
  circle.fillColor.hue += getRandom(360);
  circles.push(circle);
}

function getRandom(seed){
  if (!seed > 0){
    seed = 900;
  }

  return Math.random() * seed;
}

function onFrame(event){
  for(var i = 0; i < circles.length; i++){
    var c = circles[i];
    if (c.area < 1){
      circles.splice(i, 1);
    }
    c.fillColor.hue += 1;
    c.scale(.96);
  }

}

function showKey(key){
  new PointText({
    point: point,
    content: key,
    justification: 'center',
    fontSize: 15
  });
}
