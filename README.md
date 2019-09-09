# tinyfont.js
Tiniest possible pixel font for your JS games < 1Kb (suitable for js13k)

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
### if you use a bundler like webpack (common JS modules):
```ecmascript 6
import { initFont, font } from 'tinyfont/dist/tinyfont.min';
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

## examples
[Simple example](examples/simple.js)
[Multi fonts example](examples/index.js)
