import React from 'react';
import styles from "./LogoFooter.module.css";

function LogoFooter(props) {
    return (
        <div className={styles.footerLogo}>
            <img src="./image/svg/logo-footer.svg" alt="logo"/>
            <span>Made with 🤍 in India</span>
        </div>
    );
}

export default LogoFooter;