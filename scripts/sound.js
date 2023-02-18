import { Sound } from './elements.js';

Sound.Forest.loop = true;
Sound.Rain.loop = true;
Sound.CoffeeShop.loop = true;
Sound.Fireplace.loop = true;

export const bgAudioForest = () => { Sound.Forest.play() };
export const bgAudioRain = () => { Sound.Rain.play() };
export const bgAudioCoffeeShop = () => { Sound.CoffeeShop.play() };
export const bgAudioFireplace = () => { Sound.Fireplace.play() };
export const TimeEnd = () => { Sound.TimeEnd.play() };

export const bgAudioForestStop = () => { Sound.Forest.pause() };
export const bgAudioRainStop = () => { Sound.Rain.pause() };
export const bgAudioCoffeeShopStop = () => { Sound.CoffeeShop.pause() };
export const bgAudioFireplaceStop = () => { Sound.Fireplace.pause() };

