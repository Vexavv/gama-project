import React from 'react';
import styles from './Header.module.css'
import Container from "../Container/Container";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";


function Header(props) {


    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerContent}>
                    <img src="./image/logo.png" alt="logo" className={styles.headerLogo}/>
                    <Menu/>
                    <div className={styles.headerButton}>
                        <Button size='s'>Login</Button>
                    </div>
                    <span className={styles.burger}>
                <img src="./image/svg/burger.svg" alt="burger"/>
            </span>
                </div>

            </Container>


        </header>
    );
}

export default Header;