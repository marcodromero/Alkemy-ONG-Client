import React from 'react';
import SweetAlert from 'sweetalert2-react';

export function Alert({type, title, text, show}){
    return(
        <SweetAlert
            type = {type}
            title= {title}
            text= {text}
            show = {show}
         />
    );
}

