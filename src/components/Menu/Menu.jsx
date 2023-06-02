import React from 'react';
import styles from './Menu.module.css'
import {NavLink} from "react-router-dom";


const pages = [<NavLink to='/'>Home</NavLink>,
    <NavLink to='about' >About us</NavLink>,
    <NavLink to='creator'>Creator zone</NavLink>,
]

function Menu(props) {
    return (
        <nav>
            <ul className={styles.menu}>
                {pages.map((item, index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Menu;