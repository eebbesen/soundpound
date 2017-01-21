var text = new PointText({
  point: view.center,
  content: 'Click here',
  justification: 'center',
  fontSize: 15
});

function onKeyDown(event){
  text.content = event.key + ' was pressed down';
}
