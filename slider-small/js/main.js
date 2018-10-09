 // <---- Slider ---->
// getting the navigation links and the slider wrapper
var links = document.querySelectorAll(".itemLinks");
var slider = document.querySelector("#slider");

// the activeLink provides a pointer to the currently displayed item
var activeLink = 0;

// setup the click event listeners for nav links
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    //click event listener
    link.addEventListener('click', setClickedItem, false);

    // to identify the item for the activeLink
    link.itemID = i;
}

// set first item as active
links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();
    resetTimer();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
    // console.log(clickedLink);
}

function removeActiveLinks() {
        for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

// Handle changing the slider position as well as ensure
// the correct link is highlighted as being active
function changePosition(link) {

    var position = link.itemID * -100 + "%";
    // console.log(position);

    var translateValue = "translate3d(" + position + ", 0, 0)";
    slider.style.transform = translateValue;

    link.classList.add("active");
}
// <---- Slider End ---->

// <---- Slider: Pause on Hover | comment out if not desired ---->
var slides = document.querySelectorAll(".slide");

// set event listeners for pausing/resuming slider on hover in/out
for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    //mouseover and out events for each slide
    slide.addEventListener('mouseover', function(){window.clearInterval(timeoutID);}, false);
    slide.addEventListener('mouseout', function(){startTimer();}, false);
}
// <---- Slider: Pause on Hover End ---->

// <---- Slider: Slide the content automatically ---->
// Comment out if not desired. if not using, remove resetTimer() function from the setClickedItem() function 
var timeoutID;

function startTimer() {
    // wait 8 seconds before calling goInactive
    timeoutID = window.setInterval(goToNextItem, 8000);
}

function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
}

function goToNextItem() {
    removeActiveLinks();

    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }

    var newLink = links[activeLink];
    changePosition(newLink);
}

startTimer();
// <---- Slider: Slide the content automatically end ---->