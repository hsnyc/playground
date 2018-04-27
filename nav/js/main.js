// NAV Menu Drop Downs ===========================//

var navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', dropMenu , false);

function dropMenu(e) {
    //console.log(e);

    //check for children
    if(e.target.classList.contains('menu') && e.target.children.length !== 0) {
        
        //spin icon
        e.target.children[0].classList.toggle('spin');

        //show menu
        e.target.children[1].classList.toggle('show-menu');
    }
    
    //check for icon click
    if (e.target.classList.contains('menu-icon')) {

        //spin icon
        e.target.classList.toggle('spin');

        //show menu
        e.target.nextElementSibling.classList.toggle('show-menu');
    }

    e.stopPropagation();
};

window.addEventListener('mouseup', hideMenu , false);

function hideMenu(e) {
    //console.log(e);

    var menu = document.querySelectorAll('.menu');

    for(var i = 0; i < menu.length; i++){
        if(e.target !== menu[i] && e.target !== menu[i].children[0]) {
            if(menu[i].children.length !== 0){
                menu[i].children[0].classList.remove('spin');
                menu[i].children[1].classList.remove('show-menu');
                //console.log(menu[i]);
            } 
        }
    }
    e.stopPropagation();
}

//MOBILE Menu ==========================================================//

// a quick hover garnish for Nav drop Menu >>
var mDropMenu = document.querySelectorAll('.m-drop-menu');
//var mDropSpan = document.querySelectorAll('.m-drop-menu span');


//listen for hover
for (dm of mDropMenu) {
    dm.addEventListener('mouseover', chgCssOn, false);
    dm.addEventListener('mouseout', chgCssOff, false);
}

function chgCssOn(e) {
    //change color only if hovering over the li item.
    for(mD of mDropMenu) {
        if(e.target === mD) {
            e.target.children[0].style.color = "rgb(209, 94, 17)";
            //console.log("Element equals Li");
        }
    }
}

function chgCssOff(e) {
    //change color only if hovering over the li item.
    for(mD of mDropMenu) {
        if(e.target === mD) {
            e.target.children[0].style.color = "#65646A";
            //console.log("Element equals Li");
        }
    }
}
// a quick hover garnish for Nav drop Menu END >>


//Doing stuff with window size

var intViewportWidth = window.innerWidth;

//Conditionally load a script when screen width is certain size.
// if (screen.width > 1046) {
//     console.log("Screen Less than 1046px");
    // download complicated script
    // swap in full-source images for low-source ones
// }

if(intViewportWidth > 1046) {
    console.log("InnerWindow greater than 1046px");
    window.addEventListener("resize", buildMobileNav);
} else {
    // TODO: something to copy existing nav to Mobile.
    console.log("Copy Nav");
}

function buildMobileNav () {
    intViewportWidth = window.innerWidth;
    console.log(intViewportWidth);
    //console.log("screen = " + screen.width);
    if (intViewportWidth < 1046) {
        console.log("InnerWindow Less than 1046px");
        window.removeEventListener("resize", buildMobileNav);
   }

}

