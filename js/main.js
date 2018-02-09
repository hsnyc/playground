var greeting = function hello(th) {
    // var th = 'the name';
    console.log(th);
};

greeting('Henry');

document.querySelector('.first').addEventListener('click', function(e) {
    var removeTarget = e.target.parentNode;
    // removeTarget.parentNode.removeChild(removeTarget);
    
    console.log(e);
}, false);