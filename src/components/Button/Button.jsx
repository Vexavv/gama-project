import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css'
function Button({children, size, color, arrow, onClick}) {
    return (
        <button className={cn(styles.button,{
            [styles.small]: size === 's',
            [styles.medium]: size === 'm',
            [styles.large]: size === 'l',
            [styles.ghost]: color === 'ghost',
        })}>
            {arrow && <img src="./image/Arrow.png" alt="arrow" className={styles.arrow} />}
            {children}
        </button>
    );
}

export default Button;