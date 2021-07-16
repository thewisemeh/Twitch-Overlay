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
var HI_GREETING_COUNTDOWN = 0
var YOURE_NEW_COUNTDOWN = 0

/* DOM */
// const container = document.querySelector(".alerts");
const documentdiv = document.getElementById('divcontainer')
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
  if (HI_GREETING_COUNTDOWN > 0) {
    HI_GREETING_COUNTDOWN--
  }
  else {
    HI_GREETING_COUNTDOWN
  }
}, 1000);


/* Sound Effects */
const ElmoYell = new Audio("Audio-Files/God_Fucking_Damnit.mp3")
const ScottNo = new Audio("Audio-Files/Michael_Scott_No.mp3")
const Igotproblems = new Audio("Audio-Files/Ive_got_a_lot_of_problems_with_you_people.mp3")
const Festivus = new Audio("Audio-Files/A_FESTIVUS_for_the_rest_of_US.mp3")
const HeyListen = new Audio("Audio-Files/hey_listen.mp3")
const hiaduio = new Audio("")
const yourenewaudio = new Audio("Audio-Files/Peri_-_Oh_GOSH_youre_new_v1.mp3")
//Audio-Files\Peri_-_Oh_GOSH_youre_new_v1.mp4


/* GIFs */
const blank = ""

const ElmoGif = "https://media.giphy.com/media/yr7n0u3qzO9nG/source.gif"
const ScottNoGif = "https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif"
const Igotalotofproblemsgif = "https://media.giphy.com/media/SSQuHAbavAkmFthVkf/source.gif"
const Festivusgif = "https://media.giphy.com/media/AhQvSi0Kc0XbrS0B9C/source.gif"
const HeyListenPicture = "https://media.giphy.com/media/U8o1ssggvfKAo/source.gif"
const hi1 = "https://media.giphy.com/media/dzaUX7CAG0Ihi/source.gif"                  //from here
const hi2 = "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
const hi3 = "https://media.giphy.com/media/QAsHga1AB6dIGUsui6/giphy.gif"
const hi4 = "https://media.giphy.com/media/BVStb13YiR5Qs/source.gif"
const hi5 = "https://media.giphy.com/media/9HBduC3ZIgrG8/source.gif"
const hi6 = "https://media.giphy.com/media/OnnUZxcHsbBN6/source.gif"
const hi7 = "https://media.giphy.com/media/4QkiIdlJXvGPC/source.gif"
const hi8 = "https://media.giphy.com/media/srGTTWHrBMIcU/source.gif"
const hi9 = "https://media.giphy.com/media/ifxLK48cnyDDi/source.gif"
const hi10 = "https://media.giphy.com/media/xT0BKpqAaJczduXXJ6/source.gif"
const hi11 = "https://giphy.com/gifs/hello-adam-demamp-television-6yU7IF9L3950A"    //to here I hate david
const yourenewgif = "https://media.tenor.com/images/fe75a808e6aaa030a92f2566be089b2f/tenor.gif"
//yes i know this could had been done a different way, but this is the way it is.....



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
    if (FESIVUS_COUNTDOWN <= 0) {
      new gifAlert(user, Festivusgif, Festivus, command)
      FESIVUS_COUNTDOWN = 300
    }
    else (
      console.log("Festivus is over")
    )
  }

  if (command == "hey") {
    if (HEY_LISTEN_COUNTDOWN <= 0) {
      new gifAlert(user, HeyListenPicture, HeyListen, command)
      HEY_LISTEN_COUNTDOWN = 120
    }
    else {
      console.log("Finally swatted that bug")
    }

  }

  if (command == "hi") {
    var randomnumber = randomnumberfunction()
    if (randomnumber == 1) {
      new gifAlert(user, hi1, hiaduio, command)
    }
    else if (randomnumber == 2) {
      new gifAlert(user, hi2, hiaduio, command)
    }
    else if (randomnumber == 3) {
      new gifAlert(user, hi3, hiaduio, command)
    }
    else if (randomnumber == 4) {
      new gifAlert(user, hi4, hiaduio, command)
    }
    else if (randomnumber == 5) {
      new gifAlert(user, hi5, hiaduio, command)
    }
    else if (randomnumber == 6) {
      new gifAlert(user, hi6, hiaduio, command)
    }
    else if (randomnumber == 7) {
      new gifAlert(user, hi7, hiaduio, command)
    }
    else if (randomnumber == 8) {
      new gifAlert(user, hi8, hiaduio, command)
    }
    else if (randomnumber == 9) {
      new gifAlert(user, hi9, hiaduio, command)
    }
    else if (randomnumber == 10) {
      new gifAlert(user, hi10, hiaduio, command)
    }
    else if (randomnumber == 11) {
      new gifAlert(user, hi11, hiaduio, command)
    }
    HI_GREETING_COUNTDOWN = 60
  }

  if (command == "new") {
    if (YOURE_NEW_COUNTDOWN <= 0) {
      new gifAlert(user, yourenewgif, yourenewaudio, command)
      YOURE_NEW_COUNTDOWN = 300
    }
    else (
      console.log("You're no longer new")
    )
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
  gfdi: " IS RAGE!",
  no: " Says No!",
  problems: " Has problems with us.",
  festivus: " fest",
  hey: " Needs you to listen",
  hi: " just wanted to say hi",
  new: " you're new"
};

function gifAlert(user, gif, audio, type) {
  queue.add(async () => {
    audio.play();
    documentdiv.innerHTML = `<div id='div1'class="text-shadows">${user + generateTitle[type]}</div>
    <div id='div2'><img src="${gif}" /></div>`;
    // container.style.opacity = 1;
    documentdiv.style.opacity = 1;

    await wait(DISPLAY_DURATION)

    if (!queue.isLooping) {
      // container.style.opacity = 0;
      documentdiv.style.opacity = 0;
    }

  });
}


function randomnumberfunction() {
  var randomnum = Math.floor(Math.random() * 11)
  return randomnum
}