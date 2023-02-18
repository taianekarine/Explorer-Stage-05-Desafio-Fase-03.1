import { Button } from './elements.js';

export const ToggleCardForest = () => {
  Button.Forest.classList.add('selected')
  Button.Rain.classList.remove('selected')
  Button.CoffeeShop.classList.remove('selected')
  Button.Fireplace.classList.remove('selected')
};

export const ToggleCardRain = () => {
  Button.Rain.classList.add('selected')
  Button.Forest.classList.remove('selected')
  Button.CoffeeShop.classList.remove('selected')
  Button.Fireplace.classList.remove('selected')
};

export const ToggleCardCoffeeShop = () => {
  Button.CoffeeShop.classList.add('selected')
  Button.Forest.classList.remove('selected')
  Button.Rain.classList.remove('selected')
  Button.Fireplace.classList.remove('selected')
};

export const ToggleCardFireplace = () => {
  Button.Fireplace.classList.add('selected')
  Button.Forest.classList.remove('selected')
  Button.Rain.classList.remove('selected')
  Button.CoffeeShop.classList.remove('selected')
};