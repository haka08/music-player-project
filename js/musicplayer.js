const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name'); 
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time'); 
const musicDuration = document.querySelector('.song-duration'); 
const playBtn = document.querySelector('.play-btn'); 
const forwardBtn = document.querySelector('.forward-btn'); 
const backwardBtn = document.querySelector('.backward-btn');


playBtn.addEventListener('click',()=>{
    if(playBtn.className.includes('pause')){
        music.play();
    }
    else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');     
})

const setMusic = (i)=> {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.title;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML= '00:00';
    music.addEventListener('loadeddata', () => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
  })

}

setMusic(0);
