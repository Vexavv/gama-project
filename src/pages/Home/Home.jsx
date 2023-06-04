import React from 'react';
import styles from './Home.module.css'
import BannerHome from "../../components/HomeComponent/BannerHome/BannerHome";
// import Investors from "../../components/Investors/Investors";
import CarouselHome from "../../components/HomeComponent/CarouselHome/CarouselHome";
import GetStart from "../../components/HomeComponent/GetStart/GetStart";
import FaqHome from "../../components/HomeComponent/FaqHome/FaqHome";
import StepsHome from "../../components/HomeComponent/StepsHome/StepsHome";

function Home(props) {
    return (
        <div className={styles.home}>
            <BannerHome/>
            <StepsHome/>
            <CarouselHome/>
            <FaqHome/>
            <GetStart/>
            {/*<Investors/>*/}
        </div>
    );
}

export default Home;