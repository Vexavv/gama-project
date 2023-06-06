import React from 'react';
import styles from './TabNav.module.css'
import cn from 'classnames'
function TabNav({id, icon, text,onClick, activeTab, index}) {

    return (
        <div className={styles.tab}>
            <div className={index === activeTab ? cn(styles.activeNum,styles.num ): styles.num}>{id}</div>
            <div className={styles.content} onClick={onClick}>
                <div className={styles.icon}><img src={icon} alt="icon"/></div>
                <span className={styles.text}>{text}</span>
            </div>
        </div>
    );
}

export default TabNav;