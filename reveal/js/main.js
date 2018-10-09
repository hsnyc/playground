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

function toggleReveal(e){
    // console.log(e.target.className);
    
    let eClass = e.target.className;
    switch (eClass) {

        case "less":
            console.log("Clicked: " + eClass)
            break;

        case "more":
            console.log("Clicked: " + eClass)
            break;

        case "triangle-up":
            console.log("Clicked: " + eClass)
            break;

        case "triangle-down":
            console.log("Clicked: " + eClass)
            break;
        
        default:
            //some default here
    }
}









