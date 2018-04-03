// var blueButton = document.querySelector('.button');


var navMenu = document.querySelector('.nav-menu');
console.log(navMenu);

//var menuIcon = document.querySelector('.menu-icon');

// dropClick(navMenu);
navMenu.addEventListener('click', spin , false);

// function dropClick(e) {
    
// }

// for (var i = 0; i < navMenu.length; i++) {
//     navMenu[i].addEventListener('click', spin , false);
// }
// navMenu.addEventListener('click', spin , false);

//make drop icon turn 180deg
function spin(f) {
    console.log(f);

    if (f.target !== f.currentTarget && f.target.childNodes.length !== 0) {
        //var clickedMenu = document.querySelector('.' + f.target.className + ' img');

        //console.log(clickedMenu);

        f.target.children[0].classList.toggle('spin');

        //clickedMenu.classList.toggle('spin');
        // clickedMenu.classList.toggle('spin');
    } //else if (f.target.className === 'menu-icon' || f.target.className === 'menu-icon spin') {
       // console.log(f.target.outerHTML);
       // f.target.classList.toggle('spin');
        //var clickedMenu = document.querySelector('.menu-icon');
        //document.querySelector(f.path[1]);
        //clickedMenu.classList.toggle('spin');
        // var clickedMenu = document.querySelector('#' + f.target.id + ' img');
        f.stopPropagation();
}
 
//click event
// blueButton.addEventListener('click', showAlert, false);

// function showAlert() {
//     alert("Use these files to get started.. \n Now lets go! What are you waiting for?");
// }