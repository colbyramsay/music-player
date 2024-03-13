const allSongs = [
  {
    id: 0,
    title: "simple drum beat",
    artist: "colby ramsay",
    duration: "0:13",
    src: "./songs/simple-drum-beat.mp3",
  },
  {
    id: 1,
    title: "disco beat build-up",
    artist: "colby ramsay",
    duration: "2:56",
    src: "./songs/disco-beat-build-up.mp3",
  },
  {
    id: 3,
    title: "flute disco beat",
    artist: "colby ramsay",
    duration: "2:36",
    src: "./songs/flute-disco-beat.mp3",
  },
];

const prevBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const shufBtn = document.getElementById("shuffle");

const playlist = document.getElementById("playlist");

let currentSongs = {
  songs: [...allSongs],
  currentSong: null,
  currentSongTime: 0,
};

const displaySongs = (array) => {
  const songsHTML = array.map((song) => {
    return `<li>${song.title}</li>`;
  }).join("");
  playlist.innerHTML = songsHTML;
};

const sortSongs = () => {
  currentSongs?.songs.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return currentSongs?.songs;
}

displaySongs(sortSongs());

const audio = new Audio();

const playSong = (id) => {
  const song = currentSongs?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (currentSongs?.currentSong === null || currentSongs?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = currentSongs?.currentSongTime;
  }
  currentSongs.currentSong = song;
  
  audio.play();
};

const pauseSong = () => {
  currentSongs.currentSongTime = audio.currentTime;
  audio.pause();
};

const nextSong = () => {
  if (currentSongs?.currentSong === null) {
    playSong(currentSongs?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = currentSongs?.songs[currentSongIndex + 1];
    
    playSong(nextSong.id);
  }
};

const previousSong = () => {
  if (currentSongs?.currentSong === null) return;
  else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = currentSongs?.songs[currentSongIndex - 1];
    
    playSong(previousSong.id);
  }
};

const shuffle = () => {
  currentSongs?.songs.sort(() => Math.random() - 0.5);
  currentSongs.currentSong = null;
  currentSongs.currentSongTime = 0;
  displaySongs(currentSongs?.songs);
  pauseSong();
}

const getCurrentSongIndex = () => currentSongs?.songs.indexOf(currentSongs?.currentSong);

playBtn.addEventListener("click", () => {
  if (currentSongs?.currentSong === null) {
    playSong(currentSongs?.songs[0].id);
    console.log("hello current song");
  } else {
    playSong(currentSongs?.currentSong.id)
    console.log("hello again");
  }
});

pauseBtn.addEventListener("click", pauseSong);

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", previousSong);

shufBtn.addEventListener("click", shuffle);
