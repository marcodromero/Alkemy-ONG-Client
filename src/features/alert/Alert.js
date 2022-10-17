import React from 'react';
import SweetAlert from 'sweetalert2-react';
import Swal from "sweetalert2";


export function Alert({ type, title, text, show , cb}) {
    return (
        <SweetAlert
            type={type}
            title={title}
            text={text}
            show={show}
            onConfirm={() => {
                cb()
            }}

        />
    );
}

export const alert = (title, text, icon ,cb) => {
    Swal.fire({
        title: `${title}`,
        toast: true,
        position: "top-end",
        timerProgressBar: true,
        timer: 3000,
        text: `${text}`,
        icon: `${icon}`,
        showConfirmButton: false,
    });
}


