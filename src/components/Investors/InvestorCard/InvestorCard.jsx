import React from 'react';
import styles from './InvestorCard.module.css'
function InvestorCard({item, image, title,name}) {
    return (
        <div className={styles.card}>
            <img src={image} alt={name}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.title}>{title}</span>

        </div>
    );
}

export default InvestorCard;