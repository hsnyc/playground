var dragndrop = (function() { //<-- self executing function to create a protected name space
  
  //variables to keep track of item being dragged. 
  var myX = '';
  var myY = '';
  var whichArt = '';

  //resets the z index on all img
  function resetZ() {
    var elements = document.querySelectorAll('img');
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].style.zIndex = 5;
    };
  }

  //start tracking the begining of a move.
  function moveStart(e) {
    whichArt = e.target;
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    myY = e.offsetY === undefined ? e.layerY : e.offsetY;
    resetZ();
    //Set element to be on top of the other element on screen.
    whichArt.style.zIndex = 10;
  }

  //keeps track of what happends when you are dragging the object
  function moveDragOver(e) {
    e.preventDefault();
  }

  function moveDrop(e) {
    e.preventDefault();
    whichArt.style.left = e.pageX - myX + 'px';
    whichArt.style.top = e.pageY - myY + 'px';
  }

function touchStart(e) {
  e.preventDefault();
  var whichArt = e.target;
  var touch = e.touches[0];
  var moveOffsetX = whichArt.offsetLeft - touch.pageX;
  var moveOffsetY = whichArt.offsetTop - touch.pageY;
  resetZ();
  whichArt.style.zIndex = 10;

  whichArt.addEventListener('touchmove', function() {
    var positionX = touch.pageX + moveOffsetX;
    var positionY = touch.pageY + moveOffsetY;
    whichArt.style.left = positionX + 'px';
    whichArt.style.top = positionY + 'px';
  }, false);
} 
  //listen for the dragstart event
  document.querySelector('body').addEventListener('dragstart', moveStart, false);
  
  //listen for the dragover event
  document.querySelector('body').addEventListener('dragover', moveDragOver, false);
  
  //listen for the drop event
  document.querySelector('body').addEventListener('drop', moveDrop, false);

  //listen for the touchstart event
  document.querySelector('body').addEventListener('touchstart', touchStart, false);


})(); //<-- end of self executing function.