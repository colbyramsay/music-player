const allSongs = [
  {
    id: 0,
    title: "boots of spanish leather",
    artist: "bob dylan",
    duration: "1:11",
    src: "./songs/test.mp3"
  },
  {
    id: 1,
    title: "girl from the north country",
    artist: "bob dylan",
    duration: "2:22",
    src: "./songs/test.mp3"
  },
  {
    id: 3,
    title: "no woman no cry",
    artist: "bob marley",
    duration: "3:33",
    src: "./songs/test.mp3"
  },
]

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

console.log(currentSongs);