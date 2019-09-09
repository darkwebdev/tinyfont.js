const DEFAULT_CHAR_HEIGHT = 5;
const DEFAULT_COLOR = '#000';

const bin2arr = (bin, width) => bin.match(new RegExp(`.{${width}}`, 'g'));

const renderChar = ({ char, font, ctx, color=DEFAULT_COLOR, x, y=0, size=24 }) => {
    const { chars, height=DEFAULT_CHAR_HEIGHT } = font;
    const pixelSize = size/height;
    const binaryChar = chars[char];

    if (!binaryChar) {
        console.warn(`Char ${char} not found in the provided font`)
    }

    const binary = (binaryChar || 0).toString(2);
    const formattedBinary = binary.padStart(Math.ceil((binary.length/height)) * height, 0);
    const binaryCols = bin2arr(formattedBinary, height);
    console.log('rendering char', char, formattedBinary, binaryCols);

    binaryCols.map((column, dx) =>
        column
            .split('')
            .forEach((pixel, dy) => {
                ctx.fillStyle = !+pixel ? 'transparent' : color; // pixel == 0 ?
                ctx.fillRect(x + dx * pixelSize, y + dy * pixelSize, pixelSize, pixelSize);
            })
    );
};

const render = (string, { x=0, size=24, ...options }={}) => {
    console.log('rendering string', string);

    string
        .split('')
        .forEach((char, i) => renderChar({ ...options, size, char, x: x + i*size }));
};

export const initFont = ({ font, ctx }) => {
    if (!font) {
        console.error('No font provided!');
        return
    }
    if (!ctx) {
        console.error('No context provided');
    }

    return (string, options) => render(string, { ...options, font, ctx })
};
