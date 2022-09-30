import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export function Loader({visible, strokeColor, strokeWidth, width}){   
    return(
        <div>
            <RotatingLines
                visible= {visible}
                strokeColor= {strokeColor}
                strokeWidth= {strokeWidth}
                width= {width}            
            />
        </div>
    );
}