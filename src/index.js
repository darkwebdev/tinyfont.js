const DEFAULT_CHAR_HEIGHT = 5;
const DEFAULT_COLOR = '#000';

const bin2arr = (bin, width) => bin.match(new RegExp(`.{${width}}`, 'g'));

export const initFont = ({ height=DEFAULT_CHAR_HEIGHT, ...chars }={}, ctx) => {
    if (!chars) {
        console.error('No font provided!');
        return
    }
    if (!ctx) {
        console.error('No context provided');
    }

    return (string, x=0, y=0, size=24, color=DEFAULT_COLOR) => {
        const renderChar = (char, marginX) => {
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
                        ctx.fillRect(marginX + dx * pixelSize, y + dy * pixelSize, pixelSize, pixelSize);
                    })
            );
        };

        console.log('rendering string', string);
        string
            .split('')
            .forEach((char, i) => renderChar(char, x + i*size));
    };
};
