var point, circle;
var circles = [];
var sounds = [
  'bubbles',
  'clay',
  'confetti',
  'corona',
  'dotted-spiral',
  'flash-1',
  'flash-2',
  'flash-3',
  'glimmer',
  'moon',
  'pinwheel',

  'piston-1',
  'piston-2',
  'piston-3',
  'prism-1',
  'prism-2',
  'prism-3',
  'splits',
  'squiggle',
  'strike',
  'suspension',

  'timer',
  'ufo',
  'veil',
  'wipe',
  'zig-zag'
]

var sound = new Howl({
  src: ['sounds/bubbles.mp3']
});

function onKeyDown(event){
  getSound(event.key).play();
  setPoint();
  setCircle();
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

function getSound(key){
  var num  = codeForKey(key);
  var sound = sounds[num];
  var str = 'sounds/' + sound + '.mp3';
  return new Howl({src: [str]});
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

// maps alphabetic keys
function codeForKey(key) {
  var res = key.match(/[a-z]/);
  if (res !== null) {
   return key.charCodeAt() - 97;
  }
  return Math.floor(getRandom(sounds.length));
}

// not used
function showKey(key){
  new PointText({
    point: point,
    content: key,
    justification: 'center',
    fontSize: 15
  });
}
