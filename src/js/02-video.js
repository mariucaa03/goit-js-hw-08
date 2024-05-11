import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo.Player(document.getElementById('vimeo-player'));

const updatePlaybackTime = throttle(function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', updatePlaybackTime);

document.addEventListener('DOMContentLoaded', function() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime !== null) {
        player.setCurrentTime(parseFloat(currentTime));
    }
});



