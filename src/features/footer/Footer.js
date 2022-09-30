import React from 'react';
import styles from './Footer.module.css';

export function Footer({/*data*/}){
    const data = {
        title: "ONG",
        description: "Description",
        image: "https://image.shutterstock.com/image-vector/foundation-logo-ngo-child-education-260nw-1899054808.jpg",
        facebook: "https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Microphone-icon.png",
        instagram: "https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Microphone-icon.png",
        linkedin: "https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Microphone-icon.png"
    };

    return(
        <footer>
            <section className={styles.logo}>
                <hr className={styles.logo__bar}/>
                    <div className={styles.logo__container}>
                        <img className={styles.logo__image} src = {data.image} alt ="logo" />
                        <h4 className={styles.logo__title}>{data.title}</h4>
                    </div>
                <hr className={styles.logo__bar}/>
            </section>
            <section className={styles.links}>
                <ul>
                    <li className = {styles.links__item}><a href ="#">Inicio</a></li>
                    <li className = {styles.links__item}><a href ="#">Nosotros</a></li>
                    <li className = {styles.links__item}><a href ="#">Novedades</a></li>
                    <li className = {styles.links__item}><a href ="#">Testimonios</a></li>
                    <li className = {styles.links__item}><a href ="#">Contacto</a></li>
                    <li className = {styles.links__item}><a href ="#">Contribuye</a></li>
                </ul>
            </section>
            <hr/>
            <section className={styles.social}>
                <ul>
                    <li className = {styles.social__item}><a href ="https://www.facebook.com"><img className={styles.social__image} src={data.facebook} alt ="logo facebook"/></a></li>
                    <li className = {styles.social__item}><a href ="https://www.linkedin.com"><img className={styles.social__image} src={data.linkedin} alt ="logo linkedin"/></a></li>
                    <li className = {styles.social__item}><a href ="https://www.instagram.com"><img className={styles.social__image} src={data.instagram} alt ="logo instagram"/></a></li>
                </ul>
                <p className={styles.social__credits}>2022 by Alkemy. All Rights Reserved.</p>
            </section>
        </footer>
    );
}