// Here to place onclick logo link to the first page at tidy up stage 


// Gets the inner HTML of the main section div's content 

let contentBox = document.getElementById("content-box");

// Adds event listener to the page 1 button
let button1 = document.getElementById("button1");
button1.addEventListener("click", pageTwo);

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
  button2.addEventListener("click", pageThree); 
}

// Creates the deck
let deck = [];

deck[0] = {
  image01: new Image(),
  src: "assets/images/advice.jpg",
  imageCaption: "Listen closely to your friends and colleagues today. You may get a very helpful advice!"
};

deck[1] = {
  image02: new Image(),
  src: "assets/images/angry.jpg",
  imageCaption: "You may feel quite angry today. No matter what caused you feel this way don't let it ruin your day!"
};

deck[2] = {
  image03: new Image(),
  src: "assets/images/annoyed.jpg",
  imageCaption: "Even a little things may get on your nerves today. Take a deep breaths and try not to overreact."
};

deck[3] = {
  image04: new Image(),
  src: "assets/images/anxiety.jpg",
  imageCaption: "Today your anxiety will try to take control over you. Don't let it win!"
};

deck[4] = {
  image05: new Image(),
  src: "assets/images/attack-chance.jpg",
  imageCaption: "Stay focused on your surroundings. Some unexpected situations may arrise!"
};

deck[5] = {
  image06: new Image(),
  src: "assets/images/attitude.jpg",
  imageCaption: "Today you should try to take responsibility for your emotions. Remember, that your attitude is created by your thoughts, and you CAN choose your thoughts."
};

deck[6] = {
  image07: new Image(),
  src: "assets/images/bad-day.jpg",
  imageCaption: "Maybe today is not going to be the one of your best days, but remember that you don't need to spread the negative vibrations to others."
};

deck[7] = {
  image08: new Image(),
  src: "assets/images/bizarre-adventure.jpg",
  imageCaption: "A high chance of a bizarre adventure. For example you may encounter some very fancy looking people having shady connections with Italian mafia... Or not."
};

deck[8] = {
  image09: new Image(),
  src: "assets/images/caffeine.jpg",
  imageCaption: "Try to control your caffeine intake today. Your heart is going to thank you in the future!"
};

deck[9] = {
  image10: new Image(),
  src: "assets/images/calm.jpg",
  imageCaption: "Even if things will go not exactly as planned today, you will find yourself calm and won't let anything to ruin your peace."
};

deck[10] = {
  image11: new Image(),
  src: "assets/images/doctor.jpg",
  imageCaption: "You should focus on your health today. Remember, that you own only one body and you need to take a good care of it!"
};

deck[11] = {
  image12: new Image(),
  src: "assets/images/drama-time.jpg",
  imageCaption: "You may try to hide it, but you surely like some spicy gossips (who doesn't?). Today is the day when your hunger for drama may be fulfilled!"
};

deck[12] = {
  image13: new Image(),
  src: "assets/images/foodie.jpg",
  imageCaption: "Today you may expect some delicious food! No matter if it's either healthy snack, little salami or big dinner, it definitely will fill you up with happiness."
};

deck[13] = {
  image13: new Image(),
  src: "assets/images/fragile.jpg",
  imageCaption: "You may feel very fragile- either physically, emotionally or mentally. Take it easy today, and don't be afraid to share your feelings with your close ones!"
};

deck[14] = {
  image14: new Image(),
  src: "assets/images/friend-hangout.jpg",
  imageCaption: "Spend your time with your friends today. Even if it's going to be a short hangout it will brighten your day and you will have a great time together!"
};

deck[15] = {
  image15: new Image(),
  src: "assets/images/fully-charged.jpg",
  imageCaption: "You are going to feel full of energy. This day is going to be full of positive vibes!"
};

deck[16] = {
  image16: new Image(),
  src: "assets/images/guests-over.jpg",
  imageCaption: "You are going to be busy with guests today. If you didn't expect any- now you know that you may be surprised by unanounced visit!"
};

deck[17] = {
  image17: new Image(),
  src: "assets/images/job-opportunity.jpg",
  imageCaption: "New job opportunity may arise within your area of interest! Be ready to update your CV as it may be your chance for a pay raise!"
};

deck[18] = {
  image18: new Image(),
  src: "assets/images/lazy-cosy.jpg",
  imageCaption: "Today maybe you may not do much, but don't worry. Taking a day off from your tasks may help your brain to recover and become more productive tomorrow!"
};

deck[19] = {
  image19: new Image(),
  src: "assets/images/love-messenger.jpg",
  imageCaption: "Love has many faces. Whichever of them you choose today, make sure to value and celebrate this feeling!"
};

deck[20] = {
  image20: new Image(),
  src: "assets/images/nice.jpg",
  imageCaption: "Having THAT outfit on surely feels good. Today you will get an extra confidence boost thanks to that."
};

// Prints the array of cards to the console

for(x = 0; x < deck.length; x++) {
  console.log(deck[x].src);
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
 * Function randomizing the content of 2 different sets of card arrays- in progress (needs FIX!!!)
 */

function setRandomize() {

    let cardSet1 = [];
    let cardSet2 = [];

    for (let i = 0; i <= deck.length; i++) {

      let deckA = deck;

      let shuffle = Math.floor(Math.random() * (deck.length));
      
      // three buckets shuffle method
      let tempCard = deckA[i];
      deckA[i] = deckA[shuffle];
      deckA[shuffle] = tempCard;
      

      console.log(deckA, "after shuffle"); // reshuffled
    

    let shuffled1= deckA.slice(0, deck.length / 2);
    let shuffled2 = deckA.slice(0, deck.length / 2, deck.length);
    
    cardSet1.push(shuffled1[i]);
    cardSet2.push(shuffled2[i]);

  };
  // check
  console.log(cardSet1);
  console.log(cardSet2);
};

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