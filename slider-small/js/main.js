 // <---- Slider ---->
// getting the navigation links and the slider wrapper
var rightlink = document.querySelectorAll(".next");
var leftlink = document.querySelectorAll(".prev");
var slides = document.querySelectorAll(".slide");
var position = 0; //to track the amount of px the slides should move.
var sCount = 0; //to track the position of the slide.
var xPos = 0; //tracking position of drag
var startPos = 0; //check the initial position on the screen
// var lastPos = 0; //to track the last position of the touch event


//set a variable to the number of slides - 2 as the limmit.
const sLimmit = slides.length - 2;
// console.log(sLimmit);

//Get slides width, margin, and padding
var style = slides[0].currentStyle || window.getComputedStyle(slides[0]);
//get width of first slide, assuming all slides are the same width.
let sWidth = slides[0].scrollWidth;
//Get left + right margin
let sLMargin = parseFloat(style.marginLeft);
let sRMargin = parseFloat(style.marginRight);
let sLPadding = parseFloat(style.paddingLeft);
let sRPadding = parseFloat(style.paddingRight);
let totalMargin = sLMargin + sRMargin;
let totalPadding = sLPadding + sRPadding;
// console.log("Left Margin: " + sLMargin);
// console.log("Right Margin: " + sRMargin);
// console.log("Left Padding: " + sLPadding);
// console.log("Right Padding: " + sRPadding);

const pxVal = sWidth + totalMargin + totalPadding;
// console.log("PixVal: " + pxVal);

//touch event listeners
for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    slide.addEventListener('touchmove', drag, false);
    slide.addEventListener('touchstart', dragStart, false);
    // slide.addEventListener('touchend', dragEnd, false);
}

function dragStart(e) {
    startPos = e.touches[0].clientX;
    // console.log("Start Pos " + startPos);
    // console.log("TouchStart: " + e);
    // var xPos = e.touches[0].clientX;
    // console.log("X coords: " + xPos);
}

//Dragging functions
function drag(e) {
    // console.log("Touchmove: " + e);
    xPos = e.touches[0].clientX;
    // console.log("X coords: " + xPos);

    //check for direction of drag then add/subtract to give it a drag 'delay'
    if(xPos > startPos + 96) {

        moveToPrev();
        // console.log("Swiping Right");

    } else if(xPos < startPos - 96) {

        moveToNext();
        // console.log("Swiping Left");

    }
}

// function dragEnd(e) {
    // console.log("TouchEnd: " + e);
    // console.log("Previous TouchEnd Pos: " + lastPos);
    // console.log("Last TouchEnd Pos: " + xPos);
    // lastPos = xPos;
    // console.log("X coords: " + xPos);
// }

// Move to Next
for (var i = 0; i < rightlink.length; i++) {
    var link = rightlink[i];
    //click event listener
    link.addEventListener('click', moveToNext, false);
}

// Move to Previous
for (var i = 0; i < leftlink.length; i++) {
    var link = leftlink[i];
    //click event listener
    link.addEventListener('click', moveToPrev, false);
}

function moveToNext() {

    //check if count is less then sLimmit to prevent infinite scrolling
    if(sCount < sLimmit) {
        sCount ++;
        // console.log("sCount: " +sCount);
        // console.log("Px: " + px);
        position -= pxVal;

        var tValue = position + "px";
        // console.log(position);

        var translateValue = "translate3d(" + tValue + ", 0, 0)";
        
        for(let slide of slides) {
            slide.style.transform = translateValue;
        }
    }
}

function moveToPrev() {

    //check if position is 0 to prevent right translation.
    if(position !== 0){
        sCount --;
        // console.log("sCount: " +sCount);
        position += pxVal;

        var tValue = position + "px";
        // console.log(position);

        var translateValue = "translate3d(" + tValue + ", 0, 0)";
        
        for(let slide of slides) {
            slide.style.transform = translateValue;
        }
    }
}
