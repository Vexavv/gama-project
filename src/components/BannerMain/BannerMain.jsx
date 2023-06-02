import React from 'react';
import styles from './BannerMaine.module.css'
function BannerMain({children}) {
    return (
        <div className={styles.banner}>
           <h1>{children}</h1>
        </div>
    );
}

export default BannerMain;