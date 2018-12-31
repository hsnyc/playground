 // ==== Slider ====
// getting the navigation links and the slider wrapper
const rightlink = document.querySelector(".next");
const leftlink = document.querySelector(".prev");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let position = 0; //to track the amount of px the slides should move.
// var sCount = 0; //to track the position of the slide.

let fcPos; // to get the current position of first item in slider

let lcPos; // to get the current position of the last item in slider

//get the index of last item in slider array
let lSlide = slides.length - 1;

//get positon of slider
const sPos = slider.getBoundingClientRect();
// console.log(fiPos - sPos.left);

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

const pxVal = sWidth + totalMargin + totalPadding;
// console.log("PixVal: " + pxVal);

// Move to Next
rightlink.addEventListener('click', moveToNext, false);

// Move to Previous
leftlink.addEventListener('click', moveToPrev, false);


function moveToNext() {
    lcPos = slides[lSlide].getBoundingClientRect().right;
        // console.log(sPos.right);
        // console.log(lcPos - sPos.right);

    //check for pos of first item in the array
    if((lcPos - sPos.right) > 0 ) {
        //if current pos is less than the initial then scroll right
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
    fcPos = slides[0].getBoundingClientRect().left;
    // console.log(sPos.left);
    // console.log(fcPos - sPos.left);

    //check for pos of first item in the array
    if((fcPos - sPos.left) < 0 ) {
        
         //if current pos is less than the initial then scroll right
         position += pxVal;
 
         var tValue = position + "px";
 
         var translateValue = "translate3d(" + tValue + ", 0, 0)";
         
         for(let slide of slides) {
             slide.style.transform = translateValue;
         }
    }
}

// ========================= 
// Drag to Scroll
// =========================

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', lock, false);
slider.addEventListener('touchstart', lock, false);

slider.addEventListener('mousemove', drag, false);
slider.addEventListener('touchmove', drag, false);

slider.addEventListener('mouseleave', end, false);
slider.addEventListener('mouseup', end, false);
slider.addEventListener('touchend', end, false);

function lock(e) {
    e.preventDefault();
    isDown = true;
    slider.classList.add('active');

    if(e.type === "touchstart") {
        startX = Math.floor(e.targetTouches[0].clientX) - slider.offsetLeft;
        // console.log(startX);
    }

    if(e.type === "mousedown") {
        startX = e.pageX - slider.offsetLeft;
    }

    scrollLeft = slider.scrollLeft;
}

function drag(e) {
    if(!isDown) { return; } // stop the fn from running
    e.preventDefault();
    let x;

    if(e.type === "touchmove") {       
        x = Math.floor(e.targetTouches[0].clientX) - slider.offsetLeft;
    }

    if(e.type === "mousemove") {
        x = e.pageX - slider.offsetLeft;
    }

    // console.log({x, startX});
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
};

function end() {
    isDown = false;
    slider.classList.remove('active');
};

/*
touchstart - fired when a touch point is placed on the touch surface.
touchmove - fired when a touch point is moved along the touch surface.
touchend - fired when a touch point is removed from the touch surface.
touchcancel - fired when a touch point has been disrupted in an implementation-specific manner (for example, too many touch points are created).
*/

 // ==== Slider Ends ====
