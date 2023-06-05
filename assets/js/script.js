// Here to place onclick logo link to the first page at tidy up stage 


// Gets the inner HTML of the main section div's content 

let contentBox = document.getElementById("content-box");

// Adds event listener to the page 1 button
const button1 = document.getElementById("button1");
button1.addEventListener("click", pageTwo);

// On click function changing the content-box div's html for page 2 content

function pageTwo(event) {
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
    <div class="btn-start" id="button2">
      <button type="button" aria-label="show-me-the-cards">Show me the cards!</button>
    </div>
  `;

  const button2 = document.getElementById("button2");
  button2.addEventListener("click", pageThree); 
};

// Creates the deck
let deck = [];

deck[0] = {
  alt: "Buddha cat",
  src: "assets/images/advice.jpg",
  imageCaption: "Listen closely to your friends and colleagues today. You may get a very helpful advice!"
};

deck[1] = {
  alt: "Angry cat poked by a twig",
  src: "assets/images/angry.jpg",
  imageCaption: "You may feel quite angry today. No matter what caused you feel this way don't let it ruin your day!"
};

deck[2] = {
  alt: "Annoyed cat",
  src: "assets/images/annoyed.jpg",
  imageCaption: "Even a little things may get on your nerves today. Take a deep breaths and try not to overreact."
};

deck[3] = {
  alt: "Scared cat hissing at nothing",
  src: "assets/images/anxiety.jpg",
  imageCaption: "Today your anxiety will try to take control over you. Don't let it win!"
};

deck[4] = {
  alt: "Military cat sitting on a tank",
  src: "assets/images/attack-chance.jpg",
  imageCaption: "Stay focused on your surroundings. Some unexpected situations may arrise!"
};

deck[5] = {
  alt: "Cat showing attitude",
  src: "assets/images/attitude.jpg",
  imageCaption: "Today you should try to take responsibility for your emotions. Remember, that your attitude is created by your thoughts, and you CAN choose your thoughts."
};

deck[6] = {
  alt: "Cat angrily throwing the litter outide of his litterbox",
  src: "assets/images/bad-day.jpg",
  imageCaption: "Maybe today is not going to be the one of your best days, but remember that you don't need to spread the negative vibrations to others."
};

deck[7] = {
  alt: "Cat dressed up as Mista from JoJo",
  src: "assets/images/bizarre-adventure.jpg",
  imageCaption: "A high chance of a bizarre adventure. For example you may encounter some very fancy looking people having shady connections with Italian mafia... Or not."
};

deck[8] = {
  alt: "Cat looking like he drunk way too much of RedBulls",
  src: "assets/images/caffeine.jpg",
  imageCaption: "Try to control your caffeine intake today. Your heart is going to thank you in the future!"
};

deck[9] = {
  alt: "Cat calmly sitting on broken cat tree",
  src: "assets/images/calm.jpg",
  imageCaption: "Even if things will go not exactly as planned today, you will find yourself calm and won't let anything to ruin your peace."
};

deck[10] = {
  alt: "Men complaining about chest problems with cat sitting on top of him",
  src: "assets/images/doctor.jpg",
  imageCaption: "You should focus on your health today. Remember, that you own only one body and you need to take a good care of it!"
};

deck[11] = {
  alt: "Curious cat",
  src: "assets/images/drama-time.jpg",
  imageCaption: "You may try to hide it, but you surely like some spicy gossips (who doesn't?). Today is the day when your hunger for drama may be fulfilled!"
};

deck[12] = {
  alt: "VERY full of food, chunky cat",
  src: "assets/images/foodie.jpg",
  imageCaption: "Today you may expect some delicious food! No matter if it's either healthy snack, little salami or big dinner, it definitely will fill you up with happiness."
};

deck[13] = {
  alt: "Cat with 'fragile' sticker on it's head",
  src: "assets/images/fragile.jpg",
  imageCaption: "You may feel very fragile- either physically, emotionally or mentally. Take it easy today, and don't be afraid to share your feelings with your close ones!"
};

deck[14] = {
  alt: "Two happy, sleepy cats",
  src: "assets/images/friend-hangout.jpg",
  imageCaption: "Spend your time with your friends today. Even if it's going to be a short hangout it will brighten your day and you will have a great time together!"
};

deck[15] = {
  alt: "Fully charged kitten",
  src: "assets/images/fully-charged.jpg",
  imageCaption: "You are going to feel full of energy. This day is going to be full of positive vibes!"
};

deck[16] = {
  alt: "Tiny kitten on the big couch being the main guest",
  src: "assets/images/guests-over.jpg",
  imageCaption: "You are going to be busy with guests today. If you didn't expect any- now you know that you may be surprised by unanounced visit!"
};

deck[17] = {
  alt: "Nervous kitten wearing suit on a job interview",
  src: "assets/images/job-opportunity.jpg",
  imageCaption: "New job opportunity may arise within your area of interest! Be ready to update your CV as it may be your chance for a pay raise!"
};

deck[18] = {
  alt: "Very sleepy and cosy cat",
  src: "assets/images/lazy-cosy.jpg",
  imageCaption: "Today maybe you may not do much, but don't worry. Taking a day off from your tasks may help your brain to recover and become more productive tomorrow!"
};

deck[19] = {
  alt: "Cat with heart-shaped marks on it's fur",
  src: "assets/images/love-messenger.jpg",
  imageCaption: "Love has many faces. Whichever of them you choose today, make sure to value and celebrate this feeling!"
};

deck[20] = {
  alt: "Nice kitten wearing a nice hat looking nice and feeling nice",
  src: "assets/images/nice.jpg",
  imageCaption: "Having THAT outfit on surely feels good. Today you will get an extra confidence boost thanks to that."
};

// Prints the array of cards to the console

for (x = 0; x < deck.length; x++) {
  console.log(deck[x].src);
};

/**
 * Function changing the content-box div's html for page 3 content
 */


function pageThree() {

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

    set1.addEventListener("click", option1);
    set2.addEventListener("click", option2);
};

// Creates 2 sets of cards to populate
let cardSet1 = [];
let cardSet2 = [];

/**
 * Function randomizing the content of 2 different sets of card arrays.
 * First shuffle.
 * Then split.
 */

function setRandomize() {

    // trying Fisher-Yates method
    for (let i = deck.length -1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i+1));
      let k = deck[i];

      deck[i] = deck[j];
      deck[j] = k;
      
    };
  
  console.log(deck); // Reshuffled, works!
  
  // Now finally split the deck 50/50

  let halfDeck = Math.ceil(deck.length /2);

  cardSet1 = deck.slice(0, halfDeck); // Gets the first half
  cardSet2 = deck.slice(halfDeck,deck.length); // Gets the second half

  // check
  console.log(cardSet1, "set1");
  console.log(cardSet2, "set2");

};

// Global variable to determine if option one was chosen
let optionOne;

/**
 * Function returns the value 'true' of 1st card set after user clicks on left card set
 * for allowing to load page 4 with 1st set of cards in next function 
 */

function option1() {
  optionOne = true;
  pageFour();
};

/**
 * Function returns the value 'false' for 1st card set after user clicks on right card set
 * for allowing to load page 4 with 2nd set of cards in next function 
 */
  
function option2() {
  optionOne = false;
  pageFour();
};

let dayCard1;
let dayCard2;
let dayCard3;

/**
 * On click "card shuffling" function that draws 3 random cards out of the arrays from the set
 * and changes the inner html to page 4
 */ 

function pageFour() {

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

  // Changes div's HTML to page 4

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
  card1.addEventListener("click", reveal1);
  card2.addEventListener("click", reveal2);
  card3.addEventListener("click", reveal3);
}

// Reveals the Card Of The Day with it's description - in progress (base structure)

function reveal1() {

  // Changes the div's html
  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cat-card" id="day-card1">
      </div>
      <p class="p-break"> Here's your <em>Card Of The Day</em>! Don't forget to come back tomorrow!</p> 
      <p>If you would like to find out more about the other forms of divination or creator's notes, please click "NEXT"!</p>
    </div>
    <div id="next">NEXT</div>
  `;

  // Adds the Card Of The Day 1 to the div- in progress

  let img1 = document.createElement("img");
  let catCard1 = document.getElementById("day-card1");
  let description1 = document.createElement("p");
  let text1 = dayCard1.imageCaption;
  img1.src = dayCard1.src;
  img1.alt = dayCard1.alt;
  description1.innerText = text1;
  catCard1.appendChild(img1);
  catCard1.appendChild(description1);

  console.log("revealing card 1");

  // Adds event listener for NEXT div
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", pageFive);
};

function reveal2() {

  // Changes the div's html
  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cat-card" id="day-card2">
      </div>
      <p class="p-break"> Here's your <em>Card Of The Day</em>! Don't forget to come back tomorrow!</p> 
      <p>If you would like to find out more about the other forms of divination or creator's notes, please click "NEXT"!</p>
    </div>
    <div id="next">NEXT</div>
  `;

  // Adds the Card Of The Day 2 to the div- in progress

  let img2 = document.createElement("img");
  let catCard2 = document.getElementById("day-card2");
  let description2 = document.createElement("p");
  let text2 = dayCard2.imageCaption;
  img2.src = dayCard2.src;
  img2.alt = dayCard2.alt;
  description2.innerText = text2;
  catCard2.appendChild(img2);
  catCard2.appendChild(description2);

  console.log("revealing card 2");

  // Adds event listener for NEXT div
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", pageFive);

};

function reveal3() {

  // Changes the div's html
  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cat-card" id="day-card3">
      </div>
      <p class="p-break"> Here's your <em>Card Of The Day</em>! Don't forget to come back tomorrow!</p> 
      <p>If you would like to find out more about the other forms of divination or creator's notes, please click "NEXT"!</p>
    </div>
    <div id="next">NEXT</div>
  `;

  // Adds the Card Of The Day 3 to the div- in progress

  let img3 = document.createElement("img");
  let catCard3 = document.getElementById("day-card3");
  let description3 = document.createElement("p");
  let text3 = dayCard3.imageCaption;
  img3.src = dayCard3.src;
  img3.alt = dayCard3.alt;
  description3.innerText = text3;
  catCard3.appendChild(img3);
  catCard3.appendChild(description3);

  console.log("revealing card 3");

  // Adds event listener for NEXT div
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", pageFive);

};

/**
 *  Changes the inner html to page 5 and adds event listeners to buttons
 */

function pageFive() {

  contentBox.innerHTML = `
    <div class="magic-box">
      <p>Hungry for more informations? No problem! Just click one of the options below. Left option is going to 
      show you informations about the creator and creator's notes, while right one is going to provide the links to the useful
      resources for you to do some research about other methods of divination!</p>
      <p class="p-break"><b><em>I would like to know more about:</em><b></p>
      <div class="btn-start" id="button-creator">
      <button type="button" aria-label="creator">That silly creator</button>
    </div>
    <div class="btn-start" id="button-other">
      <button type="button" aria-label="other divination methods">Other divination methods</button>
    </div>
      <p class="p-break">Hope that you enjoyed your experience with Oracle Cats! Please remember to come back <b>tomorrow</b>!</p>
    </div>  
  `;

  // Adds event listeners to buttons
  const creator = document.getElementById("button-creator");
  const otherMet = document.getElementById("button-other");
  creator.addEventListener("click");
  otherMet.addEventListener("click");

};

// Creates an array of things to focus on

// Function to randomize the areas of focus and push them in a div

// Prevents drawing the card more than once a day


// Displays the creator's page

// Displays divination links