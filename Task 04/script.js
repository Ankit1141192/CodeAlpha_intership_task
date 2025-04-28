const songs = [
    {
        title: "unstoppable",
        artist: "Sia",
        src: "songs/song1.mp3",
        img: "images/song1.jpeg"
    },
    {
        title: "Cheap Thrills",
        artist: "Sia",
        src: "songs/song2.mp3",
        img: "images/song2.jpeg"
    },
    {
        title: "Titanium",
        artist: "Sia Titanium",
        src: "songs/song3.mp3",
        img: "images/song3.jpeg"
    }
];
let songIndex = 0;

const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const repeatBtn = document.getElementById('repeat');
const shuffle = document.getElementById('shuffle');


function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.img;
}

function playSong() {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}
function repeatSong() {
    audio.currentTime = 0;
    playSong();
}

function shuffleSongs() {
    songIndex = Math.floor(Math.random() * songs.length);
    loadSong(songs[songIndex]);
    playSong();
}

repeatBtn.addEventListener('click', repeatSong);
audio.addEventListener('ended', repeatSong);

shuffle.addEventListener('click', shuffleSongs);
audio.addEventListener('ended', shuffleSongs);

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateProgress() {
    if (!isNaN(audio.duration)) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent;
        currentTimeEl.innerText = formatTime(audio.currentTime);
        durationEl.innerText = formatTime(audio.duration);
    }
}

progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

audio.addEventListener('ended', nextSong);

audio.addEventListener('timeupdate', updateProgress);

// Load initial song
loadSong(songs[songIndex]);
