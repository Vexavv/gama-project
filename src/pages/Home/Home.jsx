import React from 'react';
import BannerHome from "../../components/HomeComponent/BannerHome/BannerHome";
import Investors from "../../components/Investors/Investors";
import CarouselHome from "../../components/HomeComponent/CarouselHome/CarouselHome";
import GetStart from "../../components/HomeComponent/GetStart/GetStart";

function Home(props) {
    return (
        <>
            <BannerHome/>
            {/*<Investors/>*/}
            <CarouselHome/>
            <GetStart/>
            {/*<Button size='l' >Get Started with GAMAN</Button>*/}

        </>
    );
}

export default Home;