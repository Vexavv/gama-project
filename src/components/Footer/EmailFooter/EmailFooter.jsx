import React from 'react';
import styles from './EmailFooter.module.css'
import Button from "../../Button/Button";

function EmailFooter(props) {
    return (
        <div className={styles.email}>
            <a href="mailto:support@gaman.in">support@gaman.in</a>
            <Button color='ghost'>CONTACT US</Button>
        </div>
    );
}

export default EmailFooter;