var blueButton = document.querySelector('.button');

//click event
blueButton.addEventListener('click', showAlert, false);

function showAlert() { 
    document.querySelector('.message').innerHTML = "Use these files to get started.. <br> Now lets go! What are you waiting for?";
    //alert("Use these files to get started.. \n Now lets go! What are you waiting for?");
}