 // <---- Slider ---->
// getting the navigation links and the slider wrapper
var rightlink = document.querySelectorAll(".next");
var leftlink = document.querySelectorAll(".prev");
var slides = document.querySelectorAll(".slide");
var position = 0;
var calcValue = 0;
// var lPosition = 192;

// console.log(slide);
// console.log(leftlink);

// the activeLink provides a pointer to the currently displayed item
// var activeLink = 0;

// Move to Next

for (var i = 0; i < rightlink.length; i++) {
    var link = rightlink[i];
    //click event listener
    link.addEventListener('click', moveToNext, false);

    // to identify the item for the activeLink
    // link.itemID = i;
}

// Move to Previous

for (var i = 0; i < leftlink.length; i++) {
    var link = leftlink[i];
    //click event listener
    link.addEventListener('click', moveToPrev, false);

    // to identify the item for the activeLink
    // link.itemID = i;
}

function moveToNext() {

    // if(position !== 0) {
    //     calcValue = position/192;

    //     if(calcValue > calcValue - (2*192)){
    //         console.log("Good to go");
            
    //     }
    // }
    
    position -= 192;

    tValue = position + "px";
    // console.log(position);

    var translateValue = "translate3d(" + tValue + ", 0, 0)";
    
    for(let slide of slides) {
        slide.style.transform = translateValue;
    }

    console.log("Right Pos: " + position);
    

}


function moveToPrev() {

    if(position !== 0){
        position += 192;

        tValue = position + "px";
        // console.log(position);

        var translateValue = "translate3d(" + tValue + ", 0, 0)";
        
        for(let slide of slides) {
            slide.style.transform = translateValue;
        }
    }

    

    console.log("Left Pos " + position);
}
