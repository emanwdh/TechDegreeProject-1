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
  year: '1977'},
  {quote: "There's no place like home", 
  source: 'Dorothy', 
  citation: 'The Wizard of Oz', 
  year: '1939'});





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
     if(Object.keys(thequoteobject).length === 4)
        {htmlstring +=  `<span class = "citation"> ${thequoteobject.citation} </span>`+ `<span class = "year"> ${thequoteobject.year} </span>`} + 
    `</p>`
    document.getElementById('quote-box').innerHTML = htmlstring;
    return htmlstring; 
  
 
}




/***
 * the code below allows the show another quote button to prompt the printQuote function leading to random displays of quotes
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
