import React from 'react';
import styles from './Slogan.module.css'
import Button from "../Button/Button";

function Slogan({paragraph, teg, }) {
    return (
        <div className={styles.slogan}>
            <span className={styles.title}>Monetize & Engage
                Your <span>FANS</span> with
                Personalized Games</span>
            <p className={styles.text}>Unlock the Power of play and turn your passion into
                profits effortlessly.</p>
            <Button size='m' arrow={true}>Get Started</Button>
        </div>
    );
}

export default Slogan;