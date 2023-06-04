import React from 'react';
import styles from './Investors.module.css';
import InvestorCard from "./InvestorCard/InvestorCard";




const investors = [
    {id: 1, image: './image/investors/1.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 2, image: './image/investors/2.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 3, image: './image/investors/3.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 4, image: './image/investors/4.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 5, image: './image/investors/5.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 6, image: './image/investors/6.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 7, image: './image/investors/7.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 8, image: './image/investors/8.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 9, image: './image/investors/9.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
    {id: 10, image: './image/investors/10.png', name: 'Jahid Hasan  ', title: 'Investor, Creator Economy'},
];

function Investors(props) {
    return (
        <div className={styles.investors}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Investors who believe in us</h2>
                <ul className={styles.list}>
                    {investors.map(item => {
                        return (
                            <InvestorCard key={item.id} item={item} {...item}/>
                        )
                    })}
                </ul>
            </div>
            <img className={styles.cer} src="./image/investors/cer.png" alt="cer"/>
            <img className={styles.ellips} src="./image/investors/Ellipse.png" alt="Ellipse"/>
            <img className={styles.star} src="./image/investors/Star.png" alt="Star"/>
        </div>
    );
}

export default Investors;