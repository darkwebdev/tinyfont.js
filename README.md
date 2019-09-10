# tinyfont.js
Tiniest possible pixel font for your JS games (<1Kb, suitable for js13k): [Demo](https://darkwebdev.github.io/tinyfont.js/examples)

Inspired by https://github.com/PaulBGD/PixelFont

## install
```
yarn add tinyfont
```

## import...
### if you use ES-modules in the browser:
```ecmascript 6
import { initFont } from 'node_modules/tinyfont/src/index.js';
// Load the desired font
import { font } from 'node_modules/tinyfont/src/fonts/pixel.js';
```
### if you use Common JS or ES modules with a bundler like webpack or rollup:
```ecmascript 6
import { initFont, font } from 'tinyfont';
```

## render:
```ecmascript 6
// Get the canvas context
const ctx = document.querySelector('canvas').getContext('2d');

// Init the tinyfont and get the `render` function
const render = initFont(font, ctx);

// Show the string on the screen
render('Simple example');
render('Complex stuff', 100, 100, 50, 'red');
```

### render function signature:
`render(string, x, y, size, color)`
- x: horizontal coordinate, px (default: 0)
- y: vertical coordinate, px (default: 0)
- size: font height, px (default: 24)
- color: font color, string (default: '#000')

## use different fonts:
Builtin fonts:
- `pixel` (default, based on [Pixel Font](https://github.com/PaulBGD/PixelFont))
- `tiny` (Based on [game over Font](https://www.1001fonts.com/game-over-font.html))

import from a browser:
```ecmascript 6
import { font } from 'node_modules/tinyfont/src/fonts/tiny.js';
```
import using a bundler:
```ecmascript 6
import { initFont, font } from 'tinyfont/font-tiny';
```

## examples
[Simple example](https://darkwebdev.github.io/tinyfont.js/examples/simple) ([source](examples/simple.js))

[Multi fonts example](https://darkwebdev.github.io/tinyfont.js/examples) ([source](examples/index.js))
