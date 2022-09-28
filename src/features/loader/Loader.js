import React from 'react';
import styles from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector} from 'react-redux';
import { selectLoader } from './loaderSlice';

export function Loader({strokeColor, strokeWidth, width}){
    const isLoading = useSelector(selectLoader);
    
    return(
        <div>
            <RotatingLines
                visible= {isLoading}
                strokeColor= {strokeColor || "grey"}
                strokeWidth= {strokeWidth || "5"}
                width= {width || "30"}            
            />
        </div>
    );
}