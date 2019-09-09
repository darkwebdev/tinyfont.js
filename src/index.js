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
        const renderChar = (charX, char) => {
            const pixelSize = size/height;
            const binaryChar = chars[char];

            if (!binaryChar) {
                console.warn(`Char ${char} not found in the provided font`)
            }

            const binary = (binaryChar || 0).toString(2);


            const width = Math.ceil(binary.length / height);
            const marginX = charX + pixelSize;
            const formattedBinary = binary.padStart(width * height, 0);
            const binaryCols = bin2arr(formattedBinary, height);

            console.debug('Rendering char', char, binaryCols);

            binaryCols.map((column, colPos) =>
                column
                    .split('')
                    .forEach((pixel, pixPos) => {
                        ctx.fillStyle = !+pixel ? 'transparent' : color; // pixel == 0 ?
                        ctx.fillRect(marginX + colPos * pixelSize, y + pixPos * pixelSize, pixelSize, pixelSize);
                    })
            );

            return charX + (width+1)*pixelSize
        };

        console.debug('Rendering string', string);
        string
            .split('')
            .reduce(renderChar, 0);
    };
};
