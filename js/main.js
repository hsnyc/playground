// NAV Menu Drop Downs

var navMenu = document.querySelector('.nav-menu');
var subMenu = document.getElementsByClassName('sub-menu');
//console.log(subMenu);

var logo = document.querySelector('.logo');

navMenu.addEventListener('click', spin , false);


function closeOtherNav(e) {
    // if(e.target.lastElementChild){
    //     console.log(e.target.lastElementChild.id);
    // }
    
    // if(e.target) {
    //     console.log("It worked");
    // }
    for (var i = 0; i < subMenu.length; i++) {
        //console.log(subMenu[i]);
        //console.log(e);
        console.log(subMenu[i].id);
        if(e.target.lastElementChild) { //TODO: add condition for when icon is clicked.
            if (subMenu[i].id !== e.target.lastElementChild.id && subMenu[i].classList.contains('show-menu')) {
                subMenu[i].classList.remove('show-menu');
                // console.log(e);
                // console.log(subMenu[i].parentElement.children[0]);
                // console.log(e.target.children[0]);
                subMenu[i].parentElement.children[0].classList.remove('spin');
                //console.log(subMenu[i].id);
                // console.log(subMenu[i].id + ": Is NOT SAME ID as " + e.target.lastElementChild.id);
            }
        }
    }
    
}

//make drop icon turn 180deg
function spin(f) {
    
    closeOtherNav(f);
    // var result = isInNav(event.target);

    // console.log(result);

    // function isInNav(node) {
    //     return (node === navMenu) ? false : navMenu.contains(node);
    // }

    //close all other menu drop down

    if (f.target.className === 'drop-menu' && f.target.className !== 'sub-menu' && f.target.childNodes.length !== 0) {

        //console.log("clicked");

        // subMenu.classList.remove('show-menu');


        //get img node and toggle class
        f.target.children[0].classList.toggle('spin');

        //grab sub-menu node and toggle class
        f.target.childNodes[3].classList.toggle('show-menu');

    } else if (f.target.classList.contains('menu-icon')) {

        // subMenu.classList.remove('show-menu');

        //console.log("clicked icon");
        f.target.classList.toggle('spin');

        //grab sub-menu node and toggle class

        f.target.nextElementSibling.classList.toggle('show-menu');
        // if (f.target.nextElementSibling.classList.contains('show-menu')) {
        //     f.target.nextElementSibling.classList.add('open');
        // }
        // f.target.nextElementSibling.classList.add('show-menu');

    }
    
    f.stopPropagation();
}
var greeting = function hello(th) {
    // var th = 'the name';
    console.log(th);
};

greeting('Henry');

document.querySelector('.first').addEventListener('click', function(e) {
    var removeTarget = e.target.parentNode;
    // removeTarget.parentNode.removeChild(removeTarget);
    
    console.log(e);
}, false);