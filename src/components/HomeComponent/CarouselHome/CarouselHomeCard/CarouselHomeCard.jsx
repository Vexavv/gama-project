import React from 'react';
import styles from './CarouselHomeCard.module.css';

function CarouselHomeCard({name, image, earning, followers, onclick}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                {/*<img src={image} alt={name}/>*/}
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                    <span className={styles.cardInfoTitle}>{name}</span>
                    <div className={styles.cardInfoData}>
                        <div className={styles.wrapper}>
                            <span className={styles.cardInfoDataPrice}>${earning}</span>
                            <span className={styles.cardInfoDataEarning}>Total Earning</span>
                        </div>
                        <div className={styles.wrapper}>
                            <span className={styles.cardInfoDataPrice}>{followers}M</span>
                            <span className={styles.cardInfoDataEarning}>Followers</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CarouselHomeCard;