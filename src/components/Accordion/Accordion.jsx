import React, {useState} from 'react';
import styles from './Accordion.module.css'
import {BiCheckCircle} from 'react-icons/bi';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import cn from 'classnames'

function Accordion({title, content}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={isActive ? cn(styles.accordionActive, styles.accordion) : styles.accordion}>
            <div className={isActive ? cn(styles.accordionTitleActive, styles.accordionTitle) : styles.accordionTitle}
                 onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                {isActive ?
                    <AiOutlineCloseCircle className={isActive ? cn(styles.iconActive, styles.icon) : styles.icon}/> :
                    <BiCheckCircle className={styles.icon}/>}
            </div>
            {isActive && <div className={styles.accordionContent}>{content}</div>}
        </div>
    );
}

export default Accordion;