import { initFont } from '../src/index.js'
import { font as defaultFont } from '../src/fonts/pixel.js';
import { font as tinyFont } from '../src/fonts/tiny.js';

const { innerWidth, devicePixelRatio: dpr = 1 } = window;
const canvas = document.querySelector('canvas');
const textInput = document.querySelector('#text');
const sizeInput = document.querySelector('#size');

canvas.width = innerWidth;
canvas.height = 300;
const ctx = canvas.getContext('2d');
ctx.scale(dpr, dpr);

const renderWithDefaultFont = initFont(defaultFont, ctx);
const renderWithTinyFont = initFont(tinyFont, ctx);

const update = () => {
    textInput.style.width = `${textInput.value.length+1}ch`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderWithDefaultFont(textInput.value, 0, 0, sizeInput.value);
    renderWithTinyFont(textInput.value, 50, 50, sizeInput.value);
};

textInput.addEventListener('input', update);
sizeInput.addEventListener('input', update);

update();
