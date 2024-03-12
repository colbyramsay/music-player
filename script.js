const allSongs = [
  {
    id: 0,
    title: "boots of spanish leather",
    artist: "bob dylan",
    duration: "1:11",
    src: "./songs/test.mp3",
  },
  {
    id: 1,
    title: "girl from the north country",
    artist: "bob dylan",
    duration: "2:22",
    src: "./songs/test1.mp3",
  },
  {
    id: 3,
    title: "no woman no cry",
    artist: "bob marley",
    duration: "3:33",
    src: "./songs/test.mp3",
  },
  {
    id: 4,
    title: "the gambler",
    artist: "kenny rogers",
    duration: "4:44",
    src: "./songs/test1.mp3",
  },
  {
    id: 5,
    title: "another one bites the dust",
    artist: "queen",
    duration: "5:55",
    src: "./songs/test.mp3",
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

playBtn.addEventListener("click", () => {
  if (currentSongs?.currentSong === null) {
    playSong(currentSongs?.songs[0].id);
    console.log("hello current song");
  } else {
    playSong(currentSongs?.currentSong.id)
    console.log("hello again");
  }
});