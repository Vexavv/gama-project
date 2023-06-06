import React, {useEffect, useState} from 'react';
import styles from './MainTitle.module.css'
import cn from 'classnames'
function MainTitle({size,}) {
    const [value, setValue] = useState('FANS');
    useEffect(() => {
        const slogans = ['FANS', 'AUDIENCE', 'Community'];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slogans.length;
            setValue(slogans[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (

            <span className={cn(styles.title, {
                [styles.titleTop]:size  === 'top',
                [styles.titleBottom]:size  === 'bottom',
            })}>Monetize & Engage Your
            <span className={styles.valueWrapper}>
            <span className={value === 'Community' ? cn(styles.valueCommunity,styles.value) : styles.value}>{' ' + value + ' '}</span>
            </span>
            with Personalized Games</span>

    );
}

export default MainTitle;

