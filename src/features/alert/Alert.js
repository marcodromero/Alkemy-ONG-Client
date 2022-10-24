import React from 'react';
import SweetAlert from 'sweetalert2-react';
import Swal from "sweetalert2";

export function Alert({ type, title, text, show, methodConfirm }) {
    return (
        <SweetAlert
            type={type}
            title={title}
            text={text}
            show={show}
            onConfirm={methodConfirm}
        />

    );
}
export const alertUpdateSucess = (type, cb) => {

    
    Swal.fire(
        "Actualizado",
        `La ${type} ha sido actualizada.`,
        "success"
      ).then(cb);
}
export const alertUpdateError = (type) => {

    Swal.fire(
        "Ha ocurrido un error",
        `La ${type} no se ha podido actualizar.`,
        "error"
      )
}
export const alertCreateSucess = (type, cb) => {
    Swal.fire(
        "Publicado",
        `La ${type} ha sido publicada.`,
        "success"
      ).then(cb);
}

export const alertCreateError = (type) => {
    Swal.fire(
        "Ha ocurrido un error",
        `La ${type} no se ha podido publicar.`,
        "error"
        )
}
export const alertDeleteSucess = (type, cb) => {
    
    Swal.fire(
        "Eliminado",
        `La ${type} ha sido eliminada.`,
        "success"
        ).then(cb);
}
export const alertDeleteError = (type) => {
    Swal.fire(
        "Ha ocurrido un error",
        `La ${type} no se ha podido eliminar.`,
        "error"
        )
}


export const alert = (title, text, icon, isShowConfirmButton = true) => {
    Swal.fire({
        title: `${title}`,
        toast: true,
        position: "top-end",
        timerProgressBar: true,
        timer: 3000,
        text: `${text}`,
        icon: `${icon}`,
        showConfirmButton: isShowConfirmButton,
    });
}

export function DeleteAlert({ title, text, show, onConfirm, onCancel }) {
    return (
        <SweetAlert
            type='warning'
            title={title}
            text={text}
            show={show}
            showCancelButton={true}
            cancelButtonText="Cancelar"
            confirmButtonText="Eliminar"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    )
}


