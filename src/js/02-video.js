import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const getCurrentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
player.setCurrentTime(getCurrentTime);

function onPlay({seconds}) {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds)
}
player.on('timeupdate', throttle(onPlay, 1000))

player.on('play', function() {
    console.log('played the video!');
    console.log(getCurrentTime)
    player.getCurrentTime().then(function (seconds) {
    console.log(getCurrentTime)
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});
});

