// NAV Menu Drop Downs

var navMenu = document.querySelector('.nav-menu');
//console.log(navMenu);

navMenu.addEventListener('click', spin , false);

//make drop icon turn 180deg
function spin(f) {
    //console.log(f);

    if (f.target.className === 'drop-menu' && f.target.className !== 'sub-menu' && f.target.childNodes.length !== 0) {

        //console.log("clicked");

        //get img node and toggle class
        f.target.children[0].classList.toggle('spin');

        //grab sub-menu node and toggle class
        f.target.childNodes[3].classList.toggle('show-menu');

    } else if (f.target.classList.contains('menu-icon')) {
        
        //console.log("clicked icon");
        f.target.classList.toggle('spin');

        //grab sub-menu node and toggle class
        f.target.nextElementSibling.classList.toggle('show-menu');
    }
    
    f.stopPropagation();
}