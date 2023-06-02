import React from 'react';
import BannerHome from "../../components/BannerHome/BannerHome";
import Investors from "../../components/Investors/Investors";

function Home(props) {
    return (
        <>
            <BannerHome/>
            <Investors/>
            {/*<Button size='l' >Get Started with GAMAN</Button>*/}
        </>
    );
}

export default Home;