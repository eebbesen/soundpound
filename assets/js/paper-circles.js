var max = 1500;

for (var y = 15; y < max; y += 30){
  for (var x = 15; x < max; x += 30) {
    new Path.Circle(new Point(x, y), 10).fillColor = 'orange';
  }
}
  