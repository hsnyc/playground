var quotes = {
    1 : [
            "Life is so short that it must be lived very slowly.",
            "Buddhist saying"
        ],
    2 : [
            "Flow with whatever may happen and let your mind be free: Stay centered by accepting what you are doing. This is the ultimate.",
            "Chuang-Tzu, The Writings of Chuang-Tzu"
        ],
    3 : [
            "Self-control is strength; right thought is mastery; calmness is power; say into your heart, 'Peace, be still'",
            "James Allen, As a Man Thinketh"
        ],
    4 : [
            "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
            "Master Oogway"
        ],
    5 : [
            "..the more you take, the less you have.",
            "Master Oogway"
        ],
    6 : [
            "There is just news. There is no good or bad.",
            "Master Oogway"
        ],
    7 : [
            "One often meets his destiny on the road he takes to avoid it.",
            "Master Oogway"
        ],
    8 : [
            "There are no accidents.",
            "Master Oogway"
        ],
    9 : [
            "Your mind is like this water, my friend. When it gets agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
            "Master Oogway"
        ],
    10 : [
            "There is always something more to learn. Even for a master.",
            "Master Oogway"
        ],
    11 : [
            "Mastering others is strength. Mastering yourself is true power.",
            "Lao Tzu"
        ],
    12 : [
            "Nature does not hurry, yet everything is accomplished.",
            "Lao Tzu"
        ],
    13 : [
            "A good traveler has no fixed plans, and is not intent on arriving.",
            "Lao Tzu"
        ],
    14 : [
            "He who knows, does not speak. He who speaks, does not know.",
            "Lao Tzu"
        ],
    15 : [
            "The journey of a thousand miles begins with one step.",
            "Lao Tzu"
        ]
};

//get button to trigger new quote
var quoteButton = document.querySelector('button');

//create click event
quoteButton.addEventListener('click', newQuote, false);

//create new quote function
function newQuote() {
    //lets do this!

    // console.log();

    //get a random number from 1 - (total# of quotes)
    //total# of quotes obtained by using 'Object.keys(quotes).length'
    var totalQuotes = Object.keys(quotes).length;
    var randomQuote = getRandomInt(1, totalQuotes + 1);
    
    //lets get random!
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

    //console.log(randomQuote);
    // console.log("I am in!");

    //call 'replace quote' function
    replaceQuote(randomQuote); 
}

function replaceQuote(num) {
    //get blockquote and author
    var blockQuote = document.querySelector('blockquote');
    var authorP = document.getElementById('author');

    var quoteC = document.getElementById('quote');

    //get new quote and author from the quotes object by using a random number
    var quote = quotes[num][0];
    var author = quotes[num][1];

    // console.log(quote);
    // console.log(author);

    //get current element height
    var cHeight = blockQuote.clientHeight;
    var quoteSH = quoteC.clientHeight;

    //change quote
    blockQuote.innerHTML = quote;

    //change author
    authorP.innerHTML = author;
    
    // console.log(blockQuote.clientHeight);

    //get height of quote element in order to animate it
    var quoteH = quoteC.clientHeight;

    quoteC.animate([
        // keyframes
        { height: quoteSH + 'px' }, 
        { height: quoteH + 'px' }
      ], { 
        // timing options
        duration: 200
      });

    quoteC.animate([
        // keyframes
        { opacity: 0 }, 
        { opacity: 1 }
      ], { 
        // timing options
        duration: 1000
      });
}