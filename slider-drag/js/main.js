 // <---- Slider ---->
// getting the navigation links and the slider wrapper
const rightlink = document.querySelector(".next");
const leftlink = document.querySelector(".prev");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
var position = 0; //to track the amount of px the slides should move.
var sCount = 0; //to track the position of the slide.


//set a variable to the number of slides - X as the limmit. X is the number of slides you want to display at a time. In this case it is 3.  
const sLimmit = slides.length - 3;
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
// console.log("PixVal: " + pxVal);


// Move to Next
rightlink.addEventListener('click', moveToNext, false);


// Move to Previous
leftlink.addEventListener('click', moveToPrev, false);


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
