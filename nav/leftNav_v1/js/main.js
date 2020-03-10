// NAV Menu Drop Downs =================================//
var navMenu = document.querySelector('.nav-menu');
var sectionHeight;


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


// Make the left Nav Stick ============================================= //

  // Get the widget
  var widgetDiv = document.querySelector('#nav-menu');
//   console.log(widgetDiv);
  
  //only do this if the element exist on the page.
  if (widgetDiv) {
    
    // Get the top offset position of the widget
    var sticky = widgetDiv.offsetTop - 20;
    // subtracting 20px from top to make it seemless.

    // When the user scrolls the page, execute this Function 
    window.onscroll = function() {
      
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset > sticky) {
        widgetDiv.classList.add("sticky");
      } else {
        widgetDiv.classList.remove("sticky");
      }
    };
  }
