import { initFont } from '../src/index.js'
import { font } from '../src/fonts/pixel.js';

const ctx = document.querySelector('canvas').getContext('2d');

const render = initFont(font, ctx);

render('1234567890+-/?.,');
render('ABCDEFGHIJKLNM', 0, 100, 50, 'red');
render('OPQRSTUVWXYZ', 0, 200, 50, 'blue');
