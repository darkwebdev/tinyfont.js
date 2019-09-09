# tinyfont.js
Tiniest possible pixel font for your js games (suitable for js13k)

## install
```
yarn add tinyfont-js
```

## use
```js
import {initFont} from './tinyfont.js';
// Load the desired font
import * as font from './fonts/pixel.js';

// Get the canvas context
const ctx = document.querySelector('canvas').getContext('2d');

// Init the tinyfont and get the `render` function
const render = initFont({ font, ctx });

// Show the string on the screen
render('Simple example');
render('Complex stuff', { x: 100, y: 100, size: 50, color: 'red' });
```

## render options
- x: horizontal coordinate, px (default: 0)
- y: vertical coordinate, px (default: 0)
- size: font height, px (default: 24)
- color: font color, string (default: '#000')
