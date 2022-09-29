import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import {
  hide,
  selectAlert,
} from './alertSlice';
import styles from './Alert.module.css';

export function Alert({type, title, text}){
    const alertIsVisible = useSelector(selectAlert);
    const dispatch = useDispatch();
    
    return(
        <SweetAlert
            show= {alertIsVisible}
            type = {type}
            title= {title}
            text= {text}
            onConfirm={() => dispatch(hide())}
         />
    );
}