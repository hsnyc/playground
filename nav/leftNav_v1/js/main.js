// Mobile NAV Flyout Menu ======================================//
var roundButton = document.querySelector('#roundButton');
roundButton.addEventListener("click", showMenu, false);

var flyoutMenu = document.querySelector('#nav-menu');
// navMenu.addEventListener("click", hideMenu, false);

function showMenu(e) {
    //show the mobile nav menu
    flyoutMenu.classList.toggle("show");
    //animate the mobile menu icon
    roundButton.classList.toggle("open");

    //check if menu is showing
    if (flyoutMenu.classList.contains("show")) { 
        // if so, then make body bg non-scrollable
        document.body.style.overflow = "hidden"; 
    } else {
        // if not, then make body scrollable
        document.body.style.overflow = "auto";
    }

    e.stopPropagation();
}


// Make the left Nav Stick and Active when section is scrolled into view ============================================= //
//get menu items
let navMenuItems = document.querySelectorAll('#nav-menu .menu');

// Get the nav Element
var navElem = document.querySelector('#nav-menu');

//get all anchors the menu items will reference
var sectionDiv = document.querySelectorAll('.nav-anchor');
  
//   var bounding = sectionDiv2.getBoundingClientRect();

  const inViewElems = [];

  let activeElemIndx = 0;

  let sectionPos = [];
  for (let i = 0; i < sectionDiv.length; i++) {
    sectionPos.push(sectionDiv[i].offsetTop);
    // console.log(sectionDiv[i].offsetTop);
  }
  
  //only do this if the element exist on the page.
  if (navElem) {
    
    /* Get the top offset position of the widget. Enable this if you need to support IE11 */
    // var sticky = navElem.offsetTop - 20;
    // subtracting 20px from top to make it seemless.

    // When the user scrolls the page, execute this Function 
    //window.onscroll = scroll;
    window.onscroll = throttle(scroll, 10);
  }

  //scroll function
function scroll() {
      
    /* Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position. Using position: sticky which is not supported in IE. Enable this if you need to support IE11 */
    // if (window.pageYOffset > sticky) {
    //     navElem.classList.add("sticky");
    //   } else {
    //     navElem.classList.remove("sticky");
    // }

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    for (let i = 0; i < sectionDiv.length; i++) {

        if(isInViewport(sectionDiv[i])) {
            // console.log(sectionDiv[i]);

            //add the elems to array
            inViewElems.push(i);
            // console.log(inViewElems[i]);

            //check if there is more than one elem
            if(inViewElems.length > 1) {
                // console.log("Greater then 1");
                // console.log(inViewElems.length);

                //what is the lowest index
                activeElemIndx = arrayMin(inViewElems);
                //commented out since IE11 does not support spread operator
                // activeElemIndx = Math.min(...inViewElems);
                // console.log("Active elem: " + activeElemIndx);
            } else {
                activeElemIndx = inViewElems[0];
                // console.log("Single elem: " + activeElemIndx);
            }
        }
    }

    //make menu active
    //check for active class on all li elements
    for (let i = 0; i < navMenuItems.length; i++) { 
        if(navMenuItems[i].classList.contains('active')) {
            //remove class from current active elem
            navMenuItems[i].classList.remove('active');
        }
    }

    //add the active class to clicked element
    navMenuItems[activeElemIndx].classList.add('active');

    // console.log(inViewElems);

    inViewElems.length = 0;

    // Scroll to Top 
    scrollFunction();

}//<--- scroll() : end --|

//Get min number from array
function arrayMin(arr) {
    return arr.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
}


/* 
    Check if elem is in viewport
    https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
*/
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= -10 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/*
    Implementing throttling to only fire the scroll function every so often - example, every 10ms
    https://blog.bitsrc.io/understanding-throttling-and-debouncing-973131c1ba07
*/
function throttle(f, t) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall === undefined // function is being called for the first time
            || (this.lastCall - previousCall) > t) { // throttle time has elapsed
        f(args);
        }
    }
};
