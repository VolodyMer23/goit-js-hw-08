
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const lodashThrottle = require('lodash.throttle');

const onPlay = function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

const onPlayThrottleDelay = lodashThrottle(onPlay, 1000);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.on('timeupdate', onPlayThrottleDelay);
