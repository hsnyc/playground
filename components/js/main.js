
//Insert name into heading
var name = prompt("Hi. What is your name?", "Joe");

var heading = document.querySelector('.main-title');

if(name !== "null" && name) {
   heading.innerHTML = "Hello " + name + "."; 
} else {
    heading.innerHTML = "Hello.";
}

//Console Hello 'name'
var greeting = function hello(th) {
    // var th = 'the name';
    console.log('Hello ' + th);
};

greeting(name);