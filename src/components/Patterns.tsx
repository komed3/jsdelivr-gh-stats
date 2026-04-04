import React from 'react';

export const Patterns: React.FC = () => {
    return ( <svg style={ { height: 0, width: 0, position: 'absolute' } }>
        <defs>
            <pattern id="hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="4" stroke="black" strokeWidth="1" opacity="0.35" />
            </pattern>
        </defs>
    </svg> );
};
