import React from 'react';
import styles from './GetStart.module.css'
import MainTitle from "../../MainTitle/MainTitle";
import Container from "../../Container/Container";
import Button from "../../Button/Button";
function GetStart(props) {
    return (
        <Container>
        <div className={styles.start}>
            <div className={styles.startContent}>
                <MainTitle size='bottom'/>
                <div className={styles.startContentButton}>
                    <img className={styles.starsGroup} src="./image/Group-stars.png" alt="stars"/>
                    <img className={styles.curlyArrow} src="./image/curlyArrow.png" alt="curlyArrow"/>
                    <span className={styles.startContentTag}>#gamanforcreators</span>
                    <Button size='l' >Get Started with GAMAN</Button>
                </div>

            </div>

        </div>
        </Container>
    );
}

export default GetStart;