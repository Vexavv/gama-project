import React from 'react';
import styles from './FaqHome.module.css'
import Container from "../../Container/Container";
import Accordion from "../../Accordion/Accordion";

const info = [
    {
        id: 1,
        title: 'How is this different from other apps?',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis.'
    },
    {
        id: 2,
        title: 'Why should I trust Gaman',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis.'
    },
    {
        id: 3,
        title: 'When will I get the money earned in my account',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis.'
    },
    {
        id: 4,
        title: 'What is the Main Reson for using this platform',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis.'
    },
    {
        id: 5,
        title: 'What makes this different from other platforms?',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis.'
    },
]

function FaqHome(props) {
    return (
        <div className={styles.faq}>
            <Container>
                <h2 className={styles.title}>FAQ SECTION</h2>
                <div className={styles.faqContent}>
                    <ul className={styles.contentList}>
                        {info.map(item => {
                            return(
                                <Accordion key={item.id} {...item}/>
                            )
                        })}
                    </ul>
                    <div className={styles.contentImg}>
                        <img src="./image/sit_man.png" alt="sit_man"/>
                    </div>

                </div>


            </Container>

        </div>
    );
}

export default FaqHome;