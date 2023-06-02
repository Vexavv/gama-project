import React from 'react';
import Button from "../../components/Button/Button";

function Home(props) {
    return (
        <div>Home

            <Button size='m'arrow={true}>Get Started</Button>
            <Button size='l' >Get Started with GAMAN</Button>
        </div>
    );
}

export default Home;