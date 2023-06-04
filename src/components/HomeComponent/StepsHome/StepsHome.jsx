import React from 'react';
import styles from './StepsHome.module.css'
import Container from "../../Container/Container";
import TabItem from "./TabItem/TabItem";


const screns = [
    {id:1, img:'./image/screens/Screen1.png'},
    {id:2, img:'./image/screens/Screen2.png'},
    {id:3, img:'./image/screens/Screen3.png'},
    {id:4, img:'./image/screens/Screen4.png'},
    ];
const tabs = [
    {id:1, icon:'./image/tabsIcon/tabIcon1.png', text:'Create your account'},
    {id:2, icon:'./image/tabsIcon/tabIcon2.png', text:'Select a game'},
    {id:3, icon:'./image/tabsIcon/tabIcon3.png', text:'Create your first contests or tournament.'},
    {id:4, icon:'./image/tabsIcon/tabIcon4.png', text:'Share the link with your audience and start earning'},
]
function StepsHome(props) {
    return (
        <Container>
            <div className={styles.steps}>
                <h2 className={styles.stepsTitle}>Four Simple<br/>  Steps</h2>
                <div className={styles.stepsContent}>
                    <ul className={styles.stepsContentTabs}>
                        {tabs.map(item => {
                            return <TabItem key={item.id} {...item}/>
                        })}
                    </ul>
                    <div className={styles.stepsContentPicture}>
<div className={styles.fon}></div>
                            <img className={styles.screen} src="./image/screens/Screen1.png" alt="scren"/>

                    </div>
                </div>

            </div>
        </Container>

    );
}

export default StepsHome;