/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array containing the quotes to be sourced
***/
let quotes = []
quotes.push (
  {quote:'Experience without theory is blind, but theory without experience is mere intellectual play',
  source: 'Immanuel Kant' },
  {quote: 'Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity',
  source: 'John F. Kennedy' },
  {quote: 'Interpretation is the revenge of the intellectual upon art',
  source: 'Susan Sontag'},
  {quote: 'May the Force be with you',
  source: 'Obi-Wan Kenobi',
  citation: 'Star Wars', 
  year: '1977', 
  tags: '#movies'},
  {quote: "There's no place like home", 
  source: 'Dorothy', 
  citation: 'The Wizard of Oz', 
  year: '1939', 
  tags: '#movies'});





/***
 * `getRandomQuote` function that pulls a random quote object
***/
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * 5);
  return quotes[randomNumber];
}

/***
 * `printQuote` function that prints this object into the formatted html
***/

function printQuote () {
   let thequoteobject =  getRandomQuote(); 
   let htmlstring = `<p class = "quote"> ${thequoteobject.quote} </p><p class = "source"> ${thequoteobject.source}`;
     if(Object.keys(thequoteobject).length === 5)
        {htmlstring +=  `<span class = "citation"> ${thequoteobject.citation} </span>`+ `<span class = "year"> ${thequoteobject.year} </span>`+ `<span class = "tags"> ${thequoteobject.tags} </span>`} + 
    `</p>`
    document.getElementById('quote-box').innerHTML = htmlstring;
    return htmlstring; 
  
 
}


/***
 * `generateRandomColor` function that chooses a random colour and applies it to background within the body
 * code was adapted from: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
***/




function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var thechange = document.body.style.backgroundColor = randomColor;
    return thechange;

}

/***
 * the code below allows the show another quote button to prompt the printQuote function leading to random displays of quotes
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * the code below access the body node and allows the show another quote button click to generate a Random Color using the function generateRandomColor everytime it is clicked
 * I knew to use document.body because of this website: https://developer.mozilla.org/en-US/docs/Web/API/Document
***/

document.body.addEventListener("click", generateRandomColor, false);

/***
 * the code below sets intervals for the background colour to change and the quotes to change as well, calling both functions every 10 seconds. You also have the option to press the "Show Another quote button" if its too slow for you.
 * Code is adapted from: https://stackoverflow.com/questions/21848922/is-it-possible-to-put-two-function-in-a-one-setinterval-function
***/

setInterval(function(){ generateRandomColor(); printQuote(); },10000)



