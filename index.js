const twitchTvHandle = "TheWiseMeh";
const PAUSE_DURATION = 30 * 1000; // 30 seconds
const DISPLAY_DURATION = 10 * 1000; // 10 seconds

/* DOM */
const container = document.querySelector(".alerts");
const img = new Image();
const queue = new Queue();

/* Sound Effects */
const ElmoYell = new Audio("./Audio-Files/God_Fucking_Damnit.mp3")
const ScottNo = new Audio("./Audio-Files/Michael_Scott_No.mp3")

/* GIFs */
const ElmoGif = "https://media.giphy.com/media/yr7n0u3qzO9nG/source.gif"
const ScottNoGif = "https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif"


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
    new gifAlert(user,ScottNoGif, ScottNo,command);
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
  No : " Says No!"
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