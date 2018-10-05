//<==== Filtering ====>

//get items into an array
var boxes = document.querySelectorAll('.box');

//get categories attribute
var cat;
for(let c of boxes) {
    cat = c.getAttribute('category');
    // console.log(cat);
}
// console.log(boxes);

//get nav links.
var navLinks = document.querySelectorAll('.link');
// console.log(navLinks);

//add click event to each link to get attribute value.
var l = 0;
for(let nav of navLinks) {
    nav.addEventListener("click",getLinkProp,false);
    nav.linkID = l++; //to identify the link that was clicked on.
}

//filter boxes based on the link attribute that was clicked
//TODO next..


//<==== Functions ====>

function getLinkProp(e) {
    //grab the link-prop attribute 
    let linkProp = e.target.getAttribute('link-prop');
    console.log(linkProp);

    return linkProp;
}







