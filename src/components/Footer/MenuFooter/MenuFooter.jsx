import React from 'react';
import {Link} from "react-router-dom";
import styles from './MemuFooter.module.css'
const pages = [
    <Link to='/about'>About us</Link>,
    <Link to='/privacy'>Privacy policy</Link>,
    <Link to='/term'>Terms & condition</Link>,
    <Link to='/careers'>Careers</Link>,
    <Link to='/creator'>Creator zone</Link>,
]

function MenuFooter(props) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menuFooter}>
                {pages.map((item, index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>

        </nav>
    );
}

export default MenuFooter;