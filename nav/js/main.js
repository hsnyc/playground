// NAV Menu Drop Downs

var navMenu = document.querySelector('.nav-menu');
//console.log(navMenu);

navMenu.addEventListener('click', spin , false);

//make drop icon turn 180deg
function spin(f) {
    //console.log(f);

    if (f.target.className === 'drop-menu' && f.target.className !== 'sub-menu' && f.target.childNodes.length !== 0) {

        //console.log("clicked");
        f.target.children[0].classList.toggle('spin');

    } else if (f.target.classList.contains('menu-icon')) {
        
        //console.log("clicked icon");
        f.target.classList.toggle('spin');
    }
    
    f.stopPropagation();
}