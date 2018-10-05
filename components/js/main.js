
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



//====================================================
//JavaScript Tests & Ramdon Code
//====================================================

//Sample 1
function doHomework(subject) {
    // alert(`Starting my ${subject} homework.`);
    someCallback();
}

function someCallback() {
    // console.log('I am the call back!!');
}

doHomework('Science');

//Sample 2
function doHomework(subject) {
    // alert(`Starting my ${subject} homework.`);
    someCallback();
}

function someCallback() {
    // console.log('I am the call back!!');
}

doHomework('Science');

//Reduce
let data = [
    {
      country: 'China',
      pop: 50,
    },
    {
      country: 'India',
      pop: 20,
    },
    {
      country: 'USA',
      pop: 10,
    },
    {
      country: 'Indonesia',
      pop: 6,
    }
  ]

  let newData = data.reduce((acc,v) => {
    return v.country == 'China' ? acc : acc + v.pop; 
  },0);

  console.log(newData); //36

  //Chaining map + filer + reduce
  data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];


var ages = data.filter((animal) => {
    return animal.type === 'dog';
}).map((animal) => {
    return animal.age * 7;
}).reduce((sum, age) => {
    return sum + age;
});

console.log(ages);
// ages = 84 
