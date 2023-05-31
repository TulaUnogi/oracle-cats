// Creates the first card set
let cardsArray1 = [];

cardsArray1[0] = {
  image01: new Image(),
  src: "assets/images/advice.jpg",
  imageCaption: "Listen closely to your friends and colleagues today. You may get a very helpful advice!"
};

cardsArray1[1] = {
  image02: new Image(),
  src: "assets/images/angry.jpg",
  imageCaption: "You may feel quite angry today. No matter what caused you feel this way don't let it ruin your day!"
};

cardsArray1[2] = {
  image03: new Image(),
  src: "assets/images/annoyed.jpg",
  imageCaption: "Even a little things may get on your nerves today. Take a deep breaths and try not to overreact."
};

cardsArray1[3] = {
  image04: new Image(),
  src: "assets/images/anxiety.jpg",
  imageCaption: "Today your anxiety will try to take control over you. Don't let it win!"
};

cardsArray1[3] = {
  image05: new Image(),
  src: "assets/images/attack-chance.jpg",
  imageCaption: "Stay focused on your surroundings. Some unexpected situations may arrise!"
};

cardsArray1[4] = {
  image06: new Image(),
  src: "assets/images/attitude.jpg",
  imageCaption: "Today you should try to take responsibility for your emotions. Remember, that your attitude is created by your thoughts, and you CAN choose your thoughts."
};

cardsArray1[5] = {
  image07: new Image(),
  src: "assets/images/bad-day.jpg",
  imageCaption: "Maybe today is not going to be the one of your best days, but remember that you don't need to spread the negative vibrations to others."
};

// Prints the array of cards to the console

for(x = 0; x < cardsArray1.length; x++) {
  console.log(cardsArray1[x].src);
}

// Creates the second card set
let cardsArray2 = [];

cardsArray2[0] = {
  image08: new Image(),
  src: "assets/images/bizarre-adventure.jpg",
  imageCaption: "A high chance of a bizarre adventure. For example you may encounter some very fancy looking people having shady connections with Italian mafia... Or not."
};

cardsArray2[1] = {
  image09: new Image(),
  src: "assets/images/caffeine.jpg",
  imageCaption: "Try to control your caffeine intake today. Your heart is going to thank you in the future!"
};

cardsArray2[2] = {
  image10: new Image(),
  src: "assets/images/calm.jpg",
  imageCaption: "Even if things will go not exactly as planned today, you will find yourself calm and won't let anything to ruin your peace."
};

cardsArray2[3] = {
  image11: new Image(),
  src: "assets/images/doctor.jpg",
  imageCaption: "You should focus on your health today. Remember, that you own only one body and you need to take a good care of it!"
};

cardsArray2[3] = {
  image12: new Image(),
  src: "assets/images/drama-time.jpg",
  imageCaption: "You may try to hide it, but you surely like some spicy gossips (who doesn't?). Today is the day when your hunger for drama may be fulfilled!"
};

cardsArray2[4] = {
  image13: new Image(),
  src: "assets/images/foodie.jpg",
  imageCaption: "Today you may expect some delicious food! No matter if it's either healthy snack, little salami or big dinner, it definitely will fill you up with happiness."
};

cardsArray2[5] = {
  image13: new Image(),
  src: "assets/images/fragile.jpg",
  imageCaption: "You may feel very fragile- either physically, emotionally or mentally. Take it easy today, and don't be afraid to share your feelings with your close ones!"
};

// Prints the array of cards to the console

for(x = 0; x < cardsArray2.length; x++) {
  console.log(cardsArray2[x].src);
}

// Creates the third card set
let cardsArray3 = [];

cardsArray3[0] = {
  image14: new Image(),
  src: "assets/images/friend-hangout.jpg",
  imageCaption: "Spend your time with your friends today. Even if it's going to be a short hangout it will brighten your day and you will have a great time together!"
};

cardsArray3[1] = {
  image15: new Image(),
  src: "assets/images/fully-charged.jpg",
  imageCaption: "You are going to feel full of energy. This day is going to be full of positive vibes!"
};

cardsArray3[2] = {
  image16: new Image(),
  src: "assets/images/guests-over.jpg",
  imageCaption: "You are going to be busy with guests today. If you didn't expect any- now you know that you may be surprised by unanounced visit!"
};

cardsArray3[3] = {
  image17: new Image(),
  src: "assets/images/job-opportunity.jpg",
  imageCaption: "New job opportunity may arise within your area of interest! Be ready to update your CV as it may be your chance for a pay raise!"
};

cardsArray3[3] = {
  image18: new Image(),
  src: "assets/images/lazy-cosy.jpg",
  imageCaption: "Today maybe you may not do much, but don't worry. Taking a day off from your tasks may help your brain to recover and become more productive tomorrow!"
};

cardsArray3[4] = {
  image19: new Image(),
  src: "assets/images/love-messenger.jpg",
  imageCaption: "Love has many faces. Whichever of them you choose today, make sure to value and celebrate this feeling!"
};

cardsArray3[5] = {
  image20: new Image(),
  src: "assets/images/nice.jpg",
  imageCaption: "Having THAT outfit on surely feels good. Today you will get an extra confidence boost thanks to that."
};

// Prints the array of cards to the console

for(x = 0; x < cardsArray2.length; x++) {
  console.log(cardsArray2[x].src);
}

// Gets the inner HTML of the main section div's content 

let contentBox = document.getElementsByClassName("content-box");
let newContent = contentBox.innerHTML;

// Adds event listener to the button

let button1 = document.getElementsByClassName("btn-start");
button1.addEventListener(click, pageTwo);

// On click function changing the content-box div's html for page 2 content

function pageTwo() {
  let newContent = `
    <div class="magic-box">
      <p>First of all let me introduce you to
      how it works!</p>
      <p>after clicking the button below two sets
      of random cards from the deck are going to be presented to you, but your</p>
      <p>card  of the day will still be uncovered.
      let the spirits guide you to click the right set! After you choose the set the three</p>
      <p>random cards will appear in front of you.
      The one you choose is going to be your</p>
      <p>card of the day! Remember- you can only choose it once a day!</p>
    </div>
    <div class="btn-start">
      <button type="button" aria-label="show-me-the-cards">Show me the cards!!</button>
    </div>
  `
}

// Adds event listener for page 2 button

/**
 * On click function changing the content-box div's html for page 3 content 
 * and randomizing the content of 2 different sets of card arrays
 */


// Adds event listener for 2 card sets

/**
 * On click "card shuffling" function that draws 3 random cards out of the arrays from the set
 * and changes the inner html to page 4 
 */ 

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