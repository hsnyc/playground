//<==== Filtering ====>

//get items into an array
var boxes = document.querySelectorAll('.box');

//get categories attribute
var cat;
for(let c of boxes) {
    cat = c.getAttribute('category');
    console.log(cat);
}
console.log(boxes);

//get nav links.
var navLinks = document.querySelectorAll('.link');
console.log(navLinks);

//add click event for link. Get href attribute




