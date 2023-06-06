import React from 'react';
import styles from './BannerHome.module.css'
import Slogan from "../../Slogan/Slogan";
import Container from "../../Container/Container";

function BannerHome(props) {
    return (
        <div className={styles.banner}>
            <Container>
                <div className={styles.content}>
                    <Slogan/>
                    <div className={styles.man}>
                        <img className={styles.manImage} src="./image/man.png" alt="man"/>
                    </div>
                </div>

            </Container>

        </div>
    );
}

export default BannerHome;