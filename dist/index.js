'use strict';

const DEFAULT_CHAR_HEIGHT = 5;
const DEFAULT_COLOR = '#000';

const initFont = ({ height=DEFAULT_CHAR_HEIGHT, ...chars }={}, ctx) => {
    if (!chars) {
        console.error('No font provided!');
        return
    }
    if (!ctx) {
        console.error('No context provided');
        return
    }

    return ( string, x = 0, y = 0, size = 24, color = DEFAULT_COLOR ) => {
        const pixelSize = size / height;
        const renderChar = ( charX, char ) => {
            const fontCode = chars[ char.charCodeAt() ] || '';
            let bin = Number.isInteger( fontCode ) ? fontCode : fontCode.codePointAt();
            const binary = ( bin || 0 ).toString( 2 );
            const width = Math.ceil( binary.length / height );
            const mask = ( 1 << height ) - 1;

            ctx.fillStyle = color;
            for ( let col = width; col > 0; col-- ) {
                let rowPos = height - 1;
                for ( let row = bin & mask; row > 0; row >>= 1 ) {
                    if ( row & 1 ) {
                        let y1 = y + rowPos * pixelSize, h = pixelSize;

                        while ( ( row >> 1 ) & 1 ) {
                            y1 -= pixelSize;
                            h += pixelSize;
                            row >>= 1;
                            rowPos--;
                        }

                        ctx.fillRect( x + charX + col * pixelSize, y1, pixelSize, h );
                    }
                    rowPos--;
                }
                bin >>= height;
            }

            return charX + ( width + 1 ) * pixelSize;
        };

        console.debug('Rendering string', string);
        [...string].reduce(renderChar, 0);
    };
};

exports.initFont = initFont;
