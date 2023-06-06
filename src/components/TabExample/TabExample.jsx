import React,{useState} from 'react';
import styles from './TabExample.module.css'
import TabNav from "../HomeComponent/StepsHome/TabNav/TabNav";
function TabExample({tabs}) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
        console.log(index)
    };

    return (
        <div>
            <ul className={styles.tabsList}>
                {tabs.map((tab, index) => (
                    <TabNav key={index} {...tab} index={index} onClick={() => handleTabClick(index)} activeTab={activeTab} />
                    // <li
                    //     key={index}
                    //     className={index === activeTab ? 'active' : ''}
                    //     onClick={() => handleTabClick(index)}
                    // >
                    //     {tab.text}
                    // </li>
                ))}
            </ul>
            <div className={styles.tabContent}>
                <img src={tabs[activeTab].img} alt=""/>

            </div>
        </div>
    );
}

export default TabExample;
