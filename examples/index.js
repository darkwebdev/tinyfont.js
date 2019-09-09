import { initFont } from '../src/index.js'
import { font as defaultFont } from '../src/fonts/pixel.js';
import { font as tinyFont } from '../src/fonts/tiny.js';

const { innerWidth, devicePixelRatio: dpr = 1 } = window;
const canvas = document.querySelector('canvas');
const input = document.querySelector('input');

canvas.width = innerWidth;
canvas.height = 300;
const ctx = canvas.getContext('2d');
ctx.scale(dpr, dpr);

const renderWithDefaultFont = initFont(defaultFont, ctx);
const renderWithTinyFont = initFont(tinyFont, ctx);

const update = () => {
    input.style.width = `${input.value.length+1}ch`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderWithDefaultFont(input.value);
    renderWithTinyFont(input.value, 0, 50);
};

input.addEventListener('input', update);

update();
