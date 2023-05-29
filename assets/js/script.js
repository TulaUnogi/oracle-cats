let cardsArray1 = [];

cardsArray1[0]  = {
  image01: new Image(),
  src: "assets/images/advice.jpg",
  imageCaption: "Listen closely to your friends and colleagues today. You may get a very helpful advice!"
};

cardsArray1[1]  = {
  image01: new Image(),
  src: "assets/images/angry.jpg",
  imageCaption: "You may feel quite angry today. No matter what caused you feel this way don't let it ruin your day!"
};

cardsArray1[2]  = {
  image01: new Image(),
  src: "assets/images/annoyed.jpg",
  imageCaption: "Even a little things may get on your nerves today. Take a deep breaths and try not to overreact."
};

cardsArray1[3]  = {
  image01: new Image(),
  src: "assets/images/anxiety.jpg",
  imageCaption: "Today your anxiety will try to take control over you. Don't let it win!"
};

cardsArray1[3]  = {
  image01: new Image(),
  src: "assets/images/attack-chance.jpg",
  imageCaption: "Stay focused on your surroundings. Some unexpected situations may arrise!"
};

cardsArray1[4]  = {
  image01: new Image(),
  src: "assets/images/attitude.jpg",
  imageCaption: "Today you should try to take responsibility for your emotions. Remember, that your attitude is created by your thoughts, and you CAN choose your thoughts."
};

cardsArray1[5]  = {
  image01: new Image(),
  src: "assets/images/bad-day.jpg",
  imageCaption: "Maybe today is not going to be the one of your best days, but remember that you don't need to spread the negative vibrations to others."
};

for(x = 0; x < cardsArray1.length; x++) {
  console.log(cardsArray1[x].src);
}