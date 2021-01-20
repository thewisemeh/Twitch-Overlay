const twitchTvHandle = "TheWiseMeh";
var PAUSE_DURATION = 60 * 1000; // 60 seconds or 1 min
var DISPLAY_DURATION = 10 * 1000; // 10 seconds
var PROBLEMS_DURATION = 6 * 1000;// 6 seconds
var CURRENT_DISPLAY_DURATION = 0;

var ELMO_COUNTDOWN = 0; // 120 seconds
var MICHAEL_SCOTT_NO_COUNTDOWN = 0; // 300
var IGOT_PROBLEMS_COUNTDOWN = 0; //300
var FESIVUS_COUNTDOWN = 0 // 300
var HEY_LISTEN_COUNTDOWN = 0 // 120

/* DOM */
const container = document.querySelector(".alerts");
const img = new Image();
const queue = new Queue();



/* Timer to control gifs*/
let timercountdown = setInterval(() => {
  if (ELMO_COUNTDOWN > 0) {
    ELMO_COUNTDOWN--
  }
  else {
    ELMO_COUNTDOWN
  }
  if (MICHAEL_SCOTT_NO_COUNTDOWN > 0) {
    MICHAEL_SCOTT_NO_COUNTDOWN--
  }
  else {
    MICHAEL_SCOTT_NO_COUNTDOWN
  }
  if (IGOT_PROBLEMS_COUNTDOWN > 0) {
    IGOT_PROBLEMS_COUNTDOWN--
  }
  else {
    IGOT_PROBLEMS_COUNTDOWN
  }
  if (FESIVUS_COUNTDOWN > 0) {
    FESIVUS_COUNTDOWN--
  }
  else {
    FESIVUS_COUNTDOWN
  }
  if (HEY_LISTEN_COUNTDOWN > 0) {
    HEY_LISTEN_COUNTDOWN--
  }
  else {
    HEY_LISTEN_COUNTDOWN
  }
}, 1000);


/* Sound Effects */
const ElmoYell = new Audio("Audio-Files/God_Fucking_Damnit.mp3")
const ScottNo = new Audio("Audio-Files/Michael_Scott_No.mp3")
const Igotproblems = new Audio("Audio-Files/Ive_got_a_lot_of_problems_with_you_people.mp3")
const Festivus = new Audio("Audio-Files/A_FESTIVUS_for_the_rest_of_US.mp3")
const HeyListen = new Audio("Audio-Files/hey_listen.mp3")



/* GIFs */
const ElmoGif = "https://media.giphy.com/media/yr7n0u3qzO9nG/source.gif"
const ScottNoGif = "https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif"
const Igotalotofproblemsgif = "https://media.giphy.com/media/SSQuHAbavAkmFthVkf/source.gif"
const Festivusgif = "https://media.giphy.com/media/AhQvSi0Kc0XbrS0B9C/source.gif"
const HeyListenPicture = "https://media.giphy.com/media/U8o1ssggvfKAo/source.gif"


// Resolve promise after duration
const wait = async duration => {
  return new Promise(resolve => setTimeout(resolve, duration));
};

ComfyJS.Init(twitchTvHandle);
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  console.log(`!${command} was typed in chat`);


  if (command == "gfdi") {
    if (ELMO_COUNTDOWN <= 0) {
      new gifAlert(user, ElmoGif, ElmoYell, command);
      ELMO_COUNTDOWN = 120
    }
    else {
      console.log("Elmo needs a lozenge")
    }
  }

  if (command == "no") {
    if (MICHAEL_SCOTT_NO_COUNTDOWN <= 0) {
      new gifAlert(user, ScottNoGif, ScottNo, command);
      MICHAEL_SCOTT_NO_COUNTDOWN = 300
    }
    else (
      console.log('"I knew exactly what to do. But in a much more real sense, I had no idea what to do."')
    )
  }

  if (command == "problems") {
    if (IGOT_PROBLEMS_COUNTDOWN <= 0) {
      new gifAlert(user, Igotalotofproblemsgif, Igotproblems, command)
      IGOT_PROBLEMS_COUNTDOWN = 300
    }
    else (
      console.log("I guess I dont have as many problems as before")
    )
  }

   if (command == "festivus") {
    if(FESIVUS_COUNTDOWN <= 0){
      new gifAlert(user, Festivusgif, Festivus, command)
      FESIVUS_COUNTDOWN = 300
    }
    else(
      console.log("Festivus is over")
    )
  }

  if(command == "hey"){
    if(HEY_LISTEN_COUNTDOWN <= 0){
      new gifAlert(user, HeyListenPicture, HeyListen, command) 
      HEY_LISTEN_COUNTDOWN = 120
    }
    else{
      console.log("Finally swatted that bug")
    }

  }

  if (flags.broadcaster && command == "pause") {
    // Clear GIF queue and pause for PAUSE_DURATION
    queue.clear();
    queue.pause(PAUSE_DURATION);
  }
};

ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(user + ":", message);
};

const generateTitle = {
  gfdi: " Is RAGE!",
  no: " Says No!",
  problems: " Has problems with us.",
  festivus: " fest",
  hey : " Needs you to listen"
};

function gifAlert(user, gif, audio, type) {
  queue.add(async () => {
    audio.play();
    container.innerHTML = `
      <h1 class="text-shadows">${user + generateTitle[type]}</h1>
      <img src="${gif}" />
    `;
    container.style.opacity = 1;

    await wait(DISPLAY_DURATION)

    if (!queue.isLooping) {
      container.style.opacity = 0;
    }

  });
}