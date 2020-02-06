// NAV Menu Drop Downs =================================//
var navMenu = document.querySelector('.nav-menu');
var sectionHeight;

navMenu.addEventListener('click', dropMenu , false);

function dropMenu(e) {
    // console.log("DropMenu");

    //check for children
    if(e.target.classList.contains('menu') && e.target.children.length !== 0) {
        
        //spin icon
        e.target.children[0].classList.toggle('spin');

        //check for screen size
        if(document.documentElement.clientWidth <= 960) {

            if(e.target.children[1].classList.contains('show-mobile-menu')) {
                //if mobile menu is showing then collapse it
                e.target.children[1].removeAttribute("style");
            
            } else {
                //otherwise open it to content height
                sectionHeight = e.target.children[1].scrollHeight;
                e.target.children[1].style.height = sectionHeight + 'px';
            }

            e.target.children[1].classList.toggle('show-mobile-menu');

        } else {
            //show menu
            e.target.children[1].classList.toggle('show-menu');
        }

    }
    
    //check for icon click
    if (e.target.classList.contains('menu-icon')) {

        //spin icon
        e.target.classList.toggle('spin');

        //check for screen size
        if(document.documentElement.clientWidth <= 960) {
            
            if(e.target.nextElementSibling.classList.contains('show-mobile-menu')) {
                //if mobile menu is showing then collapse it
                e.target.nextElementSibling.removeAttribute("style");
            
            } else {
                //otherwise open it to content height
                sectionHeight = e.target.nextElementSibling.scrollHeight;
                e.target.nextElementSibling.style.height = sectionHeight + 'px';
            }

            e.target.nextElementSibling.classList.toggle('show-mobile-menu');


        } else {
            //show menu
            e.target.nextElementSibling.classList.toggle('show-menu');
        }

    }

    e.stopPropagation();
};

window.addEventListener('mouseup', hideMenu , false);

//This function will make sure the sub-menu hides when other menu item is clicked OR when any other item is clicked outside the drop menu.
function hideMenu(e) {
    
    var menu = document.querySelectorAll('.drop-menu');
    // console.log(menu)

    for(var i = 0; i < menu.length; i++){
       
        if(e.target !== menu[i] && e.target !== menu[i].children[0]) {

            //makes sure the clicked element DOES not equal to the drop menu or the first child of that menu (the drop icon)
            if(menu[i].children.length !== 0){
                menu[i].children[0].classList.remove('spin');

                //check for screen size
                if(document.documentElement.clientWidth <= 960) {
                    
                    //hide mobile menu
                    menu[i].children[1].classList.remove('show-mobile-menu');
                    menu[i].children[1].removeAttribute("style");
                } else {
                    
                    menu[i].children[1].classList.remove('show-menu');
                    //console.log(menu[i]);
                }
            } 
        }
    }
    e.stopPropagation();
}


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
