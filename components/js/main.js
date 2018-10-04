
//Insert name into heading
// var name = prompt("Hi. What is your name?", "Joe");

let theName = document.getElementById('name');
let myName = "Henry";

//clear input if previously filled
theName.value = "";

//get value when the ENTER Key is pressed on the input.
theName.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        
        myName = theName.value;
        // console.log(myName);
        
        //get main title (H1) and insert the name
        var heading = document.querySelector('.main-title');
        
        if(myName && myName !== "null") {
            heading.innerHTML = "Hello " + myName + ".";
            
            //hide the input
            theName.style.display = 'none';
            
        } else {
            heading.innerHTML = "Hello.";
        }
    }
},false);



//Console Hello 'name'
var greeting = function hello(th) {
    // var th = 'the name';
    console.log('Hello ' + th);
};

greeting(myName);