import React from 'react';
import styles from './Contacts.module.css'




const links = [
    <a href='https://www.instagram.com/'><img src="./image/svg/instagram.svg" alt="instagram"/></a>,
    <a href='https://www.facebook.com/'><img src="./image/svg/facebook.svg" alt="facebook"/></a>,
    <a href='https://www.twitter.com/'><img src="./image/svg/twitter.svg" alt="twitter"/></a>,
    <a href='https://www.linkedin.com/'><img src="./image/svg/linkedin.svg" alt="linkedin"/></a>,
    <a href='https://www.youtube.com/'><img src="./image/svg/youtube.svg" alt="youtube"/></a>,
]
function Contacts(props) {
    return (
        <div className={styles.contacts}>
            <span>Follow us on</span>
            <ul className={styles.list}>
                {links.map((item, index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            
        </div>
    );
}

export default Contacts;