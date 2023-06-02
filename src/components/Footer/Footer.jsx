import React from 'react';
import styles from './Footer.module.css'
import Container from "../Container/Container";
import LogoFooter from "./LogoFooter/LogoFooter";
import MenuFooter from "./MenuFooter/MenuFooter";
import Contacts from "./Contacts/Contacts";
import EmailFooter from "./EmailFooter/EmailFooter";

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContent}>
                    <div className={styles.head}>
                        <LogoFooter/>
                    </div>
                    <div className={styles.bod1}><MenuFooter/></div>
                    <div className={styles.bod2}><EmailFooter/></div>
                    <div className={styles.foot}> <Contacts/></div>

                </div>
            </Container>
            <div className={styles.footerCopyright}>
                <p> Copyright © 2023 Gaman Pvt. Ltd. All Rights Reserved. </p>
            </div>
        </footer>
    );
}

export default Footer;