// Here to place onclick logo link to the first page at tidy up stage 

// Imports the deck of cards
import { deck } from "./deck.js";

// Gets the inner HTML of the main section div's content 
let contentBox = document.getElementById("content-box");

// Creates 2 sets of cards to populate
let cardSet1 = [];
let cardSet2 = [];

// Global variable to determine if option one was chosen
let optionOne;

// Creates three cards for user to choose
let dayCard1;
let dayCard2;
let dayCard3;

// Adds event listener to the page 1 button
const getStarted = document.getElementById("get-started");
getStarted.addEventListener("click", introduction);


/**
 * On click function changing the content-box div's html for page 2 introduction content
 */

function introduction() {
  contentBox.innerHTML = `
    <div class="magic-box">
      <p>First of all let me introduce you to
      how it works!</p>
      <p class="p-break">after clicking the button below two sets
      of random cards from the deck are going to be presented to you, but your
      card  of the day will still be uncovered.
      Let the spirits guide you to click the right set! After you choose the set the three
      random cards will appear in front of you.
      The one you choose is going to be your
      <em>Card Of The Day</em>!</p>
      <p class="p-break">Remember- you can only choose it <b>once a day!</b></p>
    </div>
    <div class="btn-start" id="show-cardsets">
      <button type="button" aria-label="Show me the cards">Show me the cards!</button>
    </div>
  `;

  const showCardSets = document.getElementById("show-cardsets");
  showCardSets.addEventListener("click", chooseOneSet); 
};



/**
 * Function changing the content-box div's html for page 3 content
 */

function chooseOneSet() {

  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cards-box">
        <img src="assets/images/cards-set.png" class="card-backs" id="1st-set" alt="first set of cards">
        <img src="assets/images/cards-set.png" class="card-backs"  id="2nd-set" alt="second set of cards">
      </div>
      <p class="p-break">The deck of cards has been shuffled. Here you can see two sets of cards that have been 
      selected from the deck. One of them contains your <em>Card Of The Day</em>. Select the one that draws your attention.</p>
    </div>
    `;
    
    const set1 = document.getElementById("1st-set");
    const set2 = document.getElementById("2nd-set");

    setRandomize();

    set1.addEventListener("click", chooseFirstSet);
    set2.addEventListener("click", chooseSecondSet);
};


/**
 * Function randomizing the content of 2 different sets of card arrays.
 * First shuffle.
 * Then split.
 */

function setRandomize() {

    // Shuffling with Fisher-Yates method
    for (let i = deck.length -1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i+1));
      let k = deck[i];

      deck[i] = deck[j];
      deck[j] = k;
      
    };
  
  console.log(deck); // Reshuffled
  
  // Now finally split the deck 50/50

  let halfDeck = Math.ceil(deck.length /2);

  cardSet1 = deck.slice(0, halfDeck); // Gets the first half
  cardSet2 = deck.slice(halfDeck,deck.length); // Gets the second half

  // check
  console.log(cardSet1, "set1");
  console.log(cardSet2, "set2");

};


/**
 * Function returns the value 'true' of 1st card set after user clicks on left card set
 * for allowing to load page 4 with 1st set of cards in next function 
 */

function chooseFirstSet() {
  optionOne = true;
  dealThreeCards();
};

/**
 * Function returns the value 'false' for 1st card set after user clicks on right card set
 * for allowing to load page 4 with 2nd set of cards in next function 
 */
  
function chooseSecondSet() {
  optionOne = false;
  dealThreeCards();
};

/**
 * On click function that draws 3 cards out of the array from the chosen set that have been previously shuffled through
 * and changes the inner html to page 4
 */ 

function dealThreeCards() {

  // Deals 3 cards of the chosen set

  if (optionOne = true) {
    dayCard1 = cardSet1[0];
    dayCard2 = cardSet1[1];
    dayCard3 = cardSet1[2];
  } else {
    dayCard1 = cardSet2[0];
    dayCard2 = cardSet2[1];
    dayCard3 = cardSet2[2];
  };

  // Changes div's HTML to page 4 for displaying the 3 cards

  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cards-box">
        <img src="assets/images/cards-back.jpg" class="card-backs" id="1st-card" alt="first card">
        <img src="assets/images/cards-back.jpg" class="card-backs"  id="2nd-card" alt="second card">
        <img src="assets/images/cards-back.jpg" class="card-backs"  id="3rd-card" alt="third card">
      </div>
      <p class="p-break"> Now that you chose the set, we have drawn three cards random from it.
      Now it's time for you to select your <em>Card Of The Day</em>. Simply click on it to see your card revealed!</p>
    </div>
  `;

  // Gets the cards ID
  const card1 = document.getElementById("1st-card");
  const card2 = document.getElementById("2nd-card");
  const card3 = document.getElementById("3rd-card");

  // Adds event listeners for 3 cards
  card1.addEventListener("click", revealFirstCard);
  card2.addEventListener("click", revealSecondCard);
  card3.addEventListener("click", revealThirdCard);
}

// Reveals the Card Of The Day with it's description - in progress (base structure)

function revealFirstCard() {

  // Changes the div's html
  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cat-card" id="day-card1">
      </div>
      <p class="p-break p-smaller"> Here's your <em>Card Of The Day</em>! Don't forget to come back tomorrow!</p> 
      <p class="p-smaller">If you would like to find out more about the other forms of divination or creator's notes, please click "NEXT"!</p>
    </div>
    <div id="next" class="next"><p>-- NEXT --</p></div>
  `;

  // Adds the Card Of The Day 1 to the div

  let img1 = document.createElement("img");
  let catCard1 = document.getElementById("day-card1");
  let description1 = document.createElement("p");
  let text1 = dayCard1.imageCaption;
  let textBox1 = document.createElement("div");
  img1.src = dayCard1.src;
  img1.alt = dayCard1.alt;
  description1.innerText = text1;
  catCard1.appendChild(img1);
  catCard1.appendChild(textBox1);
  textBox1.appendChild(description1);

  console.log("revealing card 1");

  // Adds event listener for NEXT div to go to the additional info page
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", moreInformations);
};

function revealSecondCard() {

  // Changes the div's html
  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cat-card" id="day-card2">
      </div>
      <p class="p-break p-smaller"> Here's your <em>Card Of The Day</em>! Don't forget to come back tomorrow!</p> 
      <p class="p-smaller">If you would like to find out more about the other forms of divination or creator's notes, please click "NEXT"!</p>
    </div>
    <div id="next" class="next"><p>-- NEXT --</p></div>
  `;

  // Adds the Card Of The Day 2 to the div

  let img2 = document.createElement("img");
  let catCard2 = document.getElementById("day-card2");
  let description2 = document.createElement("p");
  let text2 = dayCard2.imageCaption;
  let textBox2 = document.createElement("div");
  img2.src = dayCard2.src;
  img2.alt = dayCard2.alt;
  description2.innerText = text2;
  catCard2.appendChild(img2);
  catCard2.appendChild(textBox2);
  textBox2.appendChild(description2);

  console.log("revealing card 2");

  // Adds event listener for NEXT div
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", moreInformations);

};

function revealThirdCard() {

  // Changes the div's html
  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cat-card" id="day-card3">
      </div>
      <p class="p-break p-smaller"> Here's your <em>Card Of The Day</em>! Don't forget to come back tomorrow!</p> 
      <p class="p-smaller">If you would like to find out more about the other forms of divination or creator's notes, please click "NEXT"!</p>
    </div>
    <div id="next" class="next"><p>-- NEXT --</p></div>
  `;

  // Adds the Card Of The Day 3 to the div

  let img3 = document.createElement("img");
  let catCard3 = document.getElementById("day-card3");
  let description3 = document.createElement("p");
  let textBox3 = document.createElement("div");
  let text3 = dayCard3.imageCaption;
  img3.src = dayCard3.src;
  img3.alt = dayCard3.alt;
  description3.innerText = text3;
  catCard3.appendChild(img3);
  catCard3.appendChild(textBox3);
  textBox3.appendChild(description3);

  console.log("revealing card 3");

  // Adds event listener for NEXT div to go to the additional info page
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", moreInformations);

};

/**
 *  Changes the inner html to page 5  that gives more info options and adds event listeners to buttons
 */

function moreInformations() {

  contentBox.innerHTML = `
    <div class="magic-box">
      <p>Hungry for more informations? No problem! Just click one of the options below. Left option is going to 
      show you informations about the creator and creator's notes, while right one is going to provide the links to the useful
      resources for you to do some research about other methods of divination!</p>
      <p class="p-break">
      <em>I would like to know more about:</em>
      </p>
      <div class="btns-box">
        <div class="btn-start" id="button-creator">
          <button type="button" aria-label="creator">That silly creator</button>
        </div>
        <div class="btn-start" id="button-other-methods">
          <button type="button" aria-label="other divination methods">Other divination methods</button>
        </div>
      </div>    
      <p class="p-break p-smaller">Hope that you enjoyed your experience with Oracle Cats! Please remember to come back tomorrow!</p>
    </div>  
  `;

  // Adds event listeners to buttons
  const creator = document.getElementById("button-creator");
  const otherMet = document.getElementById("button-other-methods");
  creator.addEventListener("click", creatorPg);
  otherMet.addEventListener("click", otherDivinationMethods);

};

/**
 * Function changing div's content to creator notes
 */

function creatorPg() {

  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="two">
        <div>
          <h2 class="inner-h2">Few words from the creator:</h2>
          <p class="p-break p-smaller">Hi! I'm TulaUnogi and I had the pleasure to create this website! I come from the beautiful south 
          of Poland and I live in Ireland since around 2016.</p>
          <p class="p-break p-smaller">Oracle Cats is a result of my passion to Tarot and other forms of divination like runes and 
          oracle cards (which were the main inspiration here). As I am also a crazy cat lady and I love scrolling through
          memes, I could just not combine those three together. I believe in divination but I also believe, that the card spirits 
          would allow us to also have some fun! :) While currently the amount of the cards in the deck is still not too big,
          I am planning to increase it within the next few months to the full deck capacity. Keep your eyes open for the updates 
          and my side projects!</p>
        </div>
        <div>
          <h2 class="inner-h2">Update notes:</h2>
          <p class="p-break p-smaller"><span class="em">5/06/2023:</span> Initial version of the website has been deployed to GitHub Pages.</p>
        </div>
      </div>
      <div class="btn-start" id="go-back">
      <button type="button" aria-label="Go back">Go back</button>
    </div>     
  `;

  const goBack = document.getElementById("go-back");
  goBack.addEventListener("click", moreInformations);
  

};

/**
 * Function changing div's content to other forms of divination
 */

function otherDivinationMethods() {

  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="other-div">
        <h2 class="inner-h2">Other froms of divination:</h2>
        <p>The links below will redirect you to the </p>
        <p>Click the following options to find out more about my favourite methods!</p>
      <div>
      <div class="next">
        <a href="https://www.astrologyzone.com/" target="_blank">Astrology</a>
      </div>
      <div class="next">
        <a href="https://medium.com/musings-with-meg/oracle-decks-what-they-are-and-how-to-use-them-c037251a7a84" target="_blank">Oracle Cards</a>
      </div>
      <div class="next">
        <a href="https://www.yourtango.com/2018316703/how-to-read-cast-interpret-rune-casting-astrology-zodiac-horoscope" target="_blank">Rune Casting</a>
      </div>
      <div class="next"> 
        <a href="https://www.tarot.com/tarot" target="_blank">Tarot</a>
      </div>

      <div class="btn-start" id="button-back">
      <button type="button" aria-label="Go back">Go back</button>
    </div>     
  `;

  const goBack = document.getElementById("button-back");
  goBack.addEventListener("click", moreInformations);
}


// Function to randomize the areas of focus and push them in a div
/**
 * 
 * 
 
function onceADay() {

  let date = new Date().toLocaleDateString();

  if( localStorage.yourapp_date == date ) {
  return false;
   

  localStorage.yourapp_date = date;
  return true;
}



// Prevents drawing the card more than once a day
  
// Prevents drawing the card more than once a day

    if( !hasOneDayPassed() ) return false;
}
*/