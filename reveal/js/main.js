//<==== Reveal ====>

//get the reveal divs
var reveal = document.querySelectorAll('.reveal');

// get boxes container
var boxes = document.querySelector('.boxes');

// console.log(reveal);

//add click event to each of the reveal children
for(let i = 0; i < reveal.length; i++) {

    let child = reveal[i].children;

    for(let c of child) {
        // console.log(c);
        c.addEventListener("click", toggleReveal, false);
    }
}

//this function handles the reveal toggle action.
function toggleReveal(e){
    
    //to hold the class of the div
    let eClass = e.target.className;

    //get the scroll height of the boxes container
    const boxHeight = boxes.scrollHeight;

    switch (eClass) {

        case "show-less":
            boxes.style.height = '450px';
            boxes.style.marginBottom = '0px';
            document.querySelector('.less').style.display = 'none';
            document.querySelector('.more').style.display = 'flex';
            break;

        case "triangle-up":
            boxes.style.height = '450px';
            boxes.style.marginBottom = '0px';
            document.querySelector('.less').style.display = 'none';
            document.querySelector('.more').style.display = 'flex';
            break;

        case "show-more":
            boxes.style.height = boxHeight;
            boxes.style.marginBottom = '20px';
            document.querySelector('.less').style.display = 'flex';
            document.querySelector('.more').style.display = 'none';
            break;

        case "triangle-down":
            boxes.style.height = boxHeight;
            boxes.style.marginBottom = '20px';
            document.querySelector('.less').style.display = 'flex';
            document.querySelector('.more').style.display = 'none';
            break;
        
        default:
            //some default here
    }
}
//<==== Reveal End ====>








