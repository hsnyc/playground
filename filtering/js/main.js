//<==== Filtering ====>

//get items into an array
var boxes = document.querySelectorAll('.box');

//get categories attribute
var catArr;
for(let c of boxes) {
    catArr = c.getAttribute('category');
}

//get nav links.
var navLinks = document.querySelectorAll('.link');

//add click event to each link to get attribute value.
var l = 0;
for(let nav of navLinks) {
    nav.addEventListener("click",filterBoxes,false);
    //nav.linkID = l++; //to identify the link that was clicked on.
}


//<==== Functions ====>

function filterBoxes(e) {
    //grab the link-prop attribute 
    let linkProp = e.target.getAttribute('link-prop');
    //console.log("Link Prop is: " + linkProp);

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

    //console.log(boxSet);
}







