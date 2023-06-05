
// Creates the deck
export let deck = [];

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

for (let x = 0; x < deck.length; x++) {
  console.log(deck[x].src);
};