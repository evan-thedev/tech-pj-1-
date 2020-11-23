/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes =[{
  quote:'Just keep swimming',
  source:'-Finding Nemo',
  citation:'-dory',
  year:'2003'

},{
  quote:"Frankly, my dear, I don't give a damn",
  source:'-Gone With the Wind',
  year:'1939'

},{
  quote:'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams',
  soure:'- Dr. Suess'
  
},{
  quote:'E.T. phone home.',
  source:' - E.T. The Extra-Terrestrial',
  citation:'E.T.'

},{
  quote:'Why so serious?',
  source:' - The Dark Knight',
  citation:'-the joker',
  year:'2008'

},{
  quote:'May the Force be with you.',
  source:'-Star Wars',
  citation:'han solo',
  year:'1977'
}];//the array of objects has all or not, of the requirements, just to see if the printQuote function will work as intened


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {//the getRandomQuote function will take for the array of objects and apply it to a random number based on the legth of the array
  var randomNum = Math.floor( Math.random() * quotes.length);
  var randomQuote = quotes[randomNum]; 
  
  return randomQuote;
};


/***
 * `printQuote` function
***/
function printQuote(innerHTML) {// the printQuote function will take for the getRandomQuote to add it to the page and check if their are any additional strings to add
  var randomQuote = getRandomQuote( quotes );

  var htmlString = `<p class = "quote">${randomQuote.quote}</p>`;
      htmlString += `<p class = "source">${randomQuote.source}`;

  if ( randomQuote.citation ) {// this will add the citation if there is one 
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  };

  if ( randomQuote.year ) {//this will add the year if there is one 
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  };
      htmlString += `</p>`;
  

 document.getElementById('quote-box').innerHTML = htmlString;

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);