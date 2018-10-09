//<==== Hovering ====>

//get the childs of .reveal divs
var revealChild = document.querySelectorAll('.reveal');
// console.log(revealChild);

for(let child of revealChild) {
    // console.log(child.children);
}

for(let i = 0; i < revealChild.length; i++) {

    let child = revealChild[i].children;

    for(let c of child) {
        // console.log(c);
        c.addEventListener("click", toggleReveal, false);
    }
}

function toggleReveal() {
    console.log('Do the Reveal');
}

//experimenting with some silly hover for the triangle
// function hoverEffect(e){
//     console.log(e.target.className);
    
//     let eClass = e.target.className;
//     switch (eClass) {

//         case "less":
//             document.querySelector('.triangle-up').style.transform = "scale(1.2) translateY(-2px)";
//             break;

//         case "more":
//             document.querySelector('.triangle-down').style.transform = "scale(1.2) translateY(2px)";
//             break;

//         default:
//             //some default here
//     }
// }









