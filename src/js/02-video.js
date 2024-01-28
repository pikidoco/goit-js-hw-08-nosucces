import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveCurrentTime = throttle(() => {
  player.getCurrentTime().then(currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });}, 1000);

player.on('timeupdate', saveCurrentTime);

if (localStorage.getItem('videoplayer-current-time') !== null) {
  const currentTime = parseFloat(localStorage.getItem('videoplayer-current-time'));// Corrected parsing to float
  player.setCurrentTime(currentTime);
}
