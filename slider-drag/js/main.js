 // <---- Slider ---->
// getting the navigation links and the slider wrapper
const rightlink = document.querySelector(".next");
const leftlink = document.querySelector(".prev");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let position = 0; //to track the amount of px the slides should move.
// var sCount = 0; //to track the position of the slide.

//get the initial position of the first item in the slider
const fiPos = slides[0].getBoundingClientRect().left;
let fcPos = fiPos; // to get the current position of first item in slider

//get the index of last item in slider array
let lSlide = slides.length - 1;

//get the initial position of the last item in the slider
const liPos = slides[lSlide].getBoundingClientRect().right;
let lcPos = liPos; // to get the current position of the last item in slider
// console.log(liPos);

//get positon of slider
const sPos = slider.getBoundingClientRect();
// console.log(fiPos - sPos.left);

//set a variable to the number of slides - X as the limmit. X is the number of slides you want to display at a time. In this case it is 3.  
// const sLimmit = slides.length - 3;
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

const pxVal = sWidth + totalMargin + totalPadding;
console.log("PixVal: " + pxVal);


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
        console.log("Position: " + position);
        console.log("pxValue: " + pxVal);

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
        // sCount --;
        
         //if current pos is less than the initial then scroll right
         position += pxVal;
         console.log("Position: " + position);
         console.log("pxValue: " + pxVal);
 
         var tValue = position + "px";
         // console.log(position);
 
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

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    // console.log(scrollLeft);
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) { return; } // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // console.log({x, startX});
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});



 // <---- Slider Ends ---->
