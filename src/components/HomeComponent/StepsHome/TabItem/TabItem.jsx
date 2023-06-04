import React from 'react';
import styles from './TabItem.module.css'
function TabItem({id, icon, text, onClick}) {
    return (
        <div className={styles.tab}>
           <div className={styles.num}>{id}</div>
            <div className={styles.content}>
                <div className={styles.icon}><img src={icon} alt="icon"/></div>
                <span className={styles.text}>{text}</span>
            </div>
        </div>
    );
}

export default TabItem;