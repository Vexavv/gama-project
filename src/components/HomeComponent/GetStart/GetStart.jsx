import React from 'react';
import styles from './GetStart.module.css'
import MainTitle from "../../MainTitle/MainTitle";
import Container from "../../Container/Container";
function GetStart(props) {
    return (
        <Container>
        <div className={styles.start}>
                <MainTitle size='bottom'/>
        </div>
        </Container>
    );
}

export default GetStart;