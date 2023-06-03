import React from 'react';
import styles from './Slogan.module.css'
import Button from "../Button/Button";
import MainTitle from "../MainTitle/MainTitle";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <MainTitle size='top'/>
            <p className={styles.text}>Unlock the Power of play and turn your passion into
                profits effortlessly.</p>
            <Button size='m' arrow={true}>Get Started</Button>
        </div>
    );
}

export default Slogan;