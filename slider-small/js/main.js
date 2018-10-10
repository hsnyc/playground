 // <---- Slider ---->
// getting the navigation links and the slider wrapper
var rightlink = document.querySelectorAll(".next");
var leftlink = document.querySelectorAll(".prev");
var slides = document.querySelectorAll(".slide");
var position = 0; //to track the amount of px the slides should move.
var sCount = 0; //to track the position of the slide. 

//set a variable to the number of slides - 2 as the limmit.
const sLimmit = slides.length - 2;
// console.log(sLimmit);

//touch event listener
for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    slide.addEventListener('touchmove', drag, false);
}

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

//Dragging function
function drag(e) {
    var xPos = e.touches[0].clientX;
    console.log("X coords: " + xPos);
}

function moveToNext() {

    //check if count is less then sLimmit to prevent infinite scrolling
    if(sCount < sLimmit) {
        sCount ++;
        console.log("sCount: " +sCount);
        position -= 192;

        tValue = position + "px";
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
        console.log("sCount: " +sCount);
        position += 192;

        tValue = position + "px";
        // console.log(position);

        var translateValue = "translate3d(" + tValue + ", 0, 0)";
        
        for(let slide of slides) {
            slide.style.transform = translateValue;
        }
    }
}
