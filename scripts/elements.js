export const Button = {
  Play: document.querySelector('.btn-play'),
  Stop: document.querySelector('.btn-stop'),
  Add: document.querySelector('.btn-add'),
  Subtract: document.querySelector('.btn-subtract'),

  Forest: document.querySelector('.forest'),
  Rain: document.querySelector('.rain'),
  CoffeeShop: document.querySelector('.coffee-shop'),
  Fireplace: document.querySelector('.fireplace'),
};

export const Time = {
  Minutes: document.querySelector('.minutes'),
  Seconds: document.querySelector('.seconds'),
};

export const Sound = {
  Forest: new Audio('../assets/forest.wav'),
  Rain: new Audio ('../assets/rain.wav'),
  CoffeeShop: new Audio ('../assets/coffee-shop.wav'),
  Fireplace: new Audio ('../assets/fireplace.wav'),
  TimeEnd: new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'),
};

