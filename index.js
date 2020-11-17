const twitchTvHandle = "TheWiseMeh";
const PAUSE_DURATION = 600 * 1000; // 600 seconds or 10 mins
const DISPLAY_DURATION = 10 * 1000; // 10 seconds

/* DOM */
const container = document.querySelector(".alerts");
const img = new Image();
const queue = new Queue();

/* Sound Effects */
const ElmoYell = new Audio("./Audio-Files/God_Fucking_Damnit.mp3")
const ScottNo = new Audio("./Audio-Files/Michael_Scott_No.mp3")
const Igotproblems = new Audio("./Audio-Files/Ive_got_a_lot_of_problems_with_you_people.mp3")
const Festivus = new Audio("./Audio-Files/A_FESTIVUS_for_the_rest_of_US.mp3")

/* GIFs */
const ElmoGif = "https://media.giphy.com/media/yr7n0u3qzO9nG/source.gif"
const ScottNoGif = "https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif"
const Igotalotofproblemsgif = "https://media.giphy.com/media/SSQuHAbavAkmFthVkf/source.gif"
const Festivusgif = "https://media.giphy.com/media/AhQvSi0Kc0XbrS0B9C/source.gif"


// Resolve promise after duration
const wait = async duration => {
  return new Promise(resolve => setTimeout(resolve, duration));
};

ComfyJS.Init(twitchTvHandle);
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  console.log(`!${command} was typed in chat`);

  if (command == "gfdi") {
    new gifAlert(user, ElmoGif, ElmoYell, command);
  }

  if(command == "no"){
    new gifAlert(user, ScottNoGif, ScottNo, command);
  }

  if(command == "problems"){
    new gifAlert(user,Igotalotofproblemsgif,Igotproblems, command )
  }

  if(command == "festivus"){
    new gifAlert(user, Festivusgif, Festivus, command)
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
  gfdi : " Is RAGE!",
   no : " Says No!",
   problems : " Has problems with us.",
   festivus : " fest"
  // pizza: " needed a pizza party!",
};

function gifAlert(user, gif, audio, type) {
  queue.add(async () => {
    audio.play();
    container.innerHTML = `
      <h1 class="text-shadows">${user + generateTitle[type]}</h1>
      <img src="${gif}" />
    `;
    container.style.opacity = 1;

    await wait(DISPLAY_DURATION);

    if (!queue.isLooping) {
      container.style.opacity = 0;
    }

  });
}