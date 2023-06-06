import React, {useState} from 'react';
import styles from './StepsHome.module.css'
import Container from "../../Container/Container";
import TabNav from "./TabNav/TabNav";

const tabs = [
    {
        id: 1,
        icon: './image/tabsIcon/tabIcon1.png',
        text: 'Create your account',
        img: './image/screens/Screen1.png'
    },
    {
        id: 2,
        icon: './image/tabsIcon/tabIcon2.png',
        text: 'Select a game',
        img: './image/screens/Screen2.png'
    },
    {
        id: 3,
        icon: './image/tabsIcon/tabIcon3.png',
        text: 'Create your first contests or tournament.',
        img: './image/screens/Screen3.png'
    },
    {
        id: 4,
        icon: './image/tabsIcon/tabIcon4.png',
        text: 'Share the link with your audience and start earning',
        img: './image/screens/Screen4.png'
    },
]

function StepsHome(props) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <Container>
            <div className={styles.steps}>
                <h2 className={styles.stepsTitle}>Four Simple<br/> Steps</h2>
                <div className={styles.stepsContent}>
                    <ul className={styles.stepsContentTabs}>
                        {tabs.map((tab,index) => {
                            return <TabNav key={index} {...tab} index={index} onClick={() => handleTabClick(index)} activeTab={activeTab} />
                        })}
                    </ul>
                    <div className={styles.stepsContentPicture}>
                        <div className={styles.fon}></div>
                        <img className={styles.screen} src={tabs[activeTab].img} alt=""/>
                    </div>
                </div>

            </div>
        </Container>

    );
}

export default StepsHome;