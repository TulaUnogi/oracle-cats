// Here to place onclick logo link to the first page at tidy up stage 


// Gets the inner HTML of the main section div's content 

let contentBox = document.getElementById("content-box");

// Adds event listener to the page 1 button
let button1 = document.getElementById("button1");
button1.addEventListener("click", pageTwo, buildDeck);

// On click function changing the content-box div's html for page 2 content

function pageTwo(event) {
  contentBox.innerHTML = `
    <div class="magic-box">
      <p>First of all let me introduce you to
      how it works!<p>
      <p class="p-break">after clicking the button below two sets
      of random cards from the deck are going to be presented to you, but your
      card  of the day will still be uncovered.
      Let the spirits guide you to click the right set! After you choose the set the three
      random cards will appear in front of you.
      The one you choose is going to be your
      <em>Card Of The Day</em>! 
      <p class="p-break">Remember- you can only choose it <b>once a day!</b></p>
    </div>
    <div class="btn-start" id="button2">
      <button type="button" aria-label="show-me-the-cards">Show me the cards!</button>
    </div>
  `;

  let button2 = document.getElementById("button2");
  button2.addEventListener("click", pageThree, setRandomize); 
}

// New approach to build a deck of cards

let deck = [];

function buildDeck() {

  let pictures = [
    assets/images/advice.jpg, assets/images/angry.jpg, assets/images/annoyed.jpg, assets/images/anxiety.jpg, 
    assets/images/attack-chance.jpg, assets/images/attitude.jpg, assets/images/bad-day.jpg, assets/images/bizarre-adventure.jpg,
    assets/images/caffeine.jpg, assets/images/calm.jpg, assets/images/doctor.jpg, assets/images/drama-time.jpg, assets/images/foodie.jpg,
    assets/images/fragile.jpg, assets/images/friend-hangout.jpg, assets/images/fully-charged.jpg, assets/images/guests-over.jpg,
    assets/images/job-opportunity.jpg, assets/images/lazy-cosy.jpg, assets/images/love-messenger.jpg, assets/images/nice.jpg,
  ];

  let descriptions = [
    "Listen closely to your friends and colleagues today. You may get a very helpful advice!", 
    "You may feel quite angry today. No matter what caused you feel this way don't let it ruin your day!", 
    "Even a little things may get on your nerves today. Take a deep breaths and try not to overreact.",
    "Today your anxiety will try to take control over you. Don't let it win!", "Stay focused on your surroundings. Some unexpected situations may arrise!",
    "Today you should try to take responsibility for your emotions. Remember, that your attitude is created by your thoughts, and you CAN choose your thoughts.",
    "Maybe today is not going to be the one of your best days, but remember that you don't need to spread the negative vibrations to others.",
    "A high chance of a bizarre adventure. For example you may encounter some very fancy looking people having shady connections with Italian mafia... Or not.",
    "Try to control your caffeine intake today. Your heart is going to thank you in the future!", "Even if things will go not exactly as planned today, you will find yourself calm and won't let anything to ruin your peace.",
    "You should focus on your health today. Remember, that you own only one body and you need to take a good care of it!",
    "You may try to hide it, but you surely like some spicy gossips (who doesn't?). Today is the day when your hunger for drama may be fulfilled!",
    "Today you may expect some delicious food! No matter if it's either healthy snack, little salami or big dinner, it definitely will fill you up with happiness.",
    "You may feel very fragile- either physically, emotionally or mentally. Take it easy today, and don't be afraid to share your feelings with your close ones!",
    "Spend your time with your friends today. Even if it's going to be a short hangout it will brighten your day and you will have a great time together!",
    "You are going to feel full of energy. This day is going to be full of positive vibes!", "You are going to be busy with guests today. If you didn't expect any- now you know that you may be surprised by unanounced visit!",
    "New job opportunity may arise within your area of interest! Be ready to update your CV as it may be your chance for a pay raise!",
    "Today maybe you may not do much, but don't worry. Taking a day off from your tasks may help your brain to recover and become more productive tomorrow!",
    "Love has many faces. Whichever of them you choose today, make sure to value and celebrate this feeling!",
    "Having THAT outfit on surely feels good. Today you will get an extra confidence boost thanks to that."
  ];

  for (var z= 0; z < pictures.length; z++) {
    for (var d = 0; d < description.length; d++) {
      let picture = pictures[z];
      let description = descriptions[d];
      deck.push({picture, description});
    }
  }
  return deck;
}

// Prints the array of cards to the console

for (x = 0; x < deck.length; x++) {
  console.log(deck[x].description);
}

/**
 * Function changing the content-box div's html for page 3 content- in progress 
 */


function pageThree() {

  contentBox.innerHTML = `
    <div class="magic-box">
      <div class="cards-box">
        <img src="assets/images/cards-set.png" class="card-backs" id="1st-set" alt="first set of cards">
        <img src="assets/images/cards-set.png" class="card-backs"  id="2nd-set" alt="second set of cards">
      </div>
      <p class="p-break">The deck of cards has been shuffled. Here you can see two sets of cards that have been 
      selected from the deck. One of them contains your <em>Card Of The Day</em>. Select the one that draws your attention.
    </div>
    `;
    
    let set1 = document.getElementById("1st-set");
    let set2 = document.getElementById("2nd-set");

    setRandomize();

    set1.addEventListener("click", pageFour)
    set2.addEventListener("click", pageFour)
}

/**
 * Function randomizing the content of 2 different sets of card arrays- in progress
 */

function setRandomize() {

  let deckShuffle;
  // Loops through the deck arrays - in progress
  for (let i = 0; i = deck.length; i++) {
    deckShuffle = Math.floor(Math.random() * (deck.length));
    return deckShuffle;
  }

  // Pushes the results into 2 sets
  let cardSet1 = [];
  let cardSet2 = [];

  // Throws undefined, to be fixed
  cardSet1.push(deckShuffle);
  cardSet2.push(deckShuffle);
  
  // check
  console.log(cardSet1);
  console.log(cardSet2);

}


/**
 * On click "card shuffling" function that draws 3 random cards out of the arrays from the set
 * and changes the inner html to page 4 
 */ 

function pageFour() {
  console.log("Here pg4 soon");
}

// Adds event listener for 3 cards


// Reveals the Card Of The Day with it's description 


// Creates an array of things to focus on

// Function to randomize the areas of focus and push them in a div

// Prevents drawing the card more than once a day

// Adds event listener for "NEXT"

// Changes the inner html to page 5

// Event listeners for the 2 buttons leading to the informations about creator and other forms of divination

// Displays the creator's page

// Displays divination links