//<==== Filtering ====>

//get items into an array
var boxes = document.querySelectorAll('.box');
// console.log(boxes);

//set inline styles ::test
// for(let b of boxes) {
//     // b.style.opacity = '1';
//     b.style.height = '200px';
//     b.style.width = '200px';
//     b.style.margin = '10px';
// }

//get categories attribute
var catArr;
for(let c of boxes) {
    catArr = c.getAttribute('category');
    // console.log(catArr);
}
// console.log(boxes);

//get nav links.
var navLinks = document.querySelectorAll('.link');
// console.log(navLinks);

//add click event to each link to get attribute value.
var l = 0;
for(let nav of navLinks) {
    nav.addEventListener("click",filterBoxes,false);
    nav.linkID = l++; //to identify the link that was clicked on.
}

//filter boxes based on the link attribute that was clicked
// let boxSet = boxes.filter((box) => {
//     return linkProp == box.getAttribute('category');
    
// });




//<==== Functions ====>

function filterBoxes(e) {
    //grab the link-prop attribute 
    let linkProp = e.target.getAttribute('link-prop');
    console.log("Link Prop is: " + linkProp);

    //reset boxes
    for(let b of boxes) {
        b.style.opacity = '1';
    }

    let boxSet = [];

    for(let i = 0; i < boxes.length; i++) {
        //check for all and for the linkProp
        if(linkProp !== 'all' && linkProp !== boxes[i].getAttribute('category')){
            boxSet.push(boxes[i]);
        };
    }

    for(let b of boxSet) {
        b.style.opacity = '0.2';
    }

    console.log(boxSet);
}







