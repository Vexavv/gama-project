import React, { useState } from 'react';
import styles from './CarouselHome.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselHomeCard from "./CarouselHomeCard/CarouselHomeCard";
import Container from "../../Container/Container";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1200 },
        items: 3,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 1200, min: 901 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 900, min: 601 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};

const info = [
    { id: 1, image: '', name: 'John', earning: 23943422, followers: 1 },
    { id: 2, image: '', name: 'John', earning: 23943422, followers: 1 },
    { id: 3, image: '', name: 'John', earning: 23943422, followers: 1 },
    { id: 4, image: '', name: 'John', earning: 23943422, followers: 1 },
    { id: 5, image: '', name: 'John', earning: 23943422, followers: 1 },
    { id: 6, image: '', name: 'John', earning: 23943422, followers: 1 },
    { id: 7, image: '', name: 'John', earning: 23943422, followers: 1 },
    { id: 8, image: '', name: 'John', earning: 23943422, followers: 1 },
    { id: 9, image: '', name: 'John', earning: 23943422, followers: 1 },
];

const CustomDot = ({ active, onClick }) => (
    <span
        className={`${styles["customDot"]} ${active ? styles.active : ""}`}
        onClick={onClick}
    />
);

function CarouselHome(props) {
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    return (
        <div className={styles.carousel}>
            <Container>
                <div className={styles.carouselContent}>
                    <h2 className={styles.carouselTitle}>Get iNSPIRE WITH OUR TOP CREATORS ON THE PLATFORM</h2>
                </div>
                <Carousel
                    responsive={responsive}
                    wipeable={true}
                    arrows={true}
                    renderDotsOutside={true}
                    customDot={<CustomDot onClick={(index) => setActiveDotIndex(index)} />}
                    removeArrowOnDeviceType={['tablet', 'desktop', 'superLargeDesktop']}
                    rewind={true}
                    keyBoardControl={true}
                    draggable
                    showDots={true}
                    activeIndex={activeDotIndex}
                >
                    {info.map(item => {
                        return <CarouselHomeCard key={item.id} {...item} />
                    })}
                </Carousel>

            </Container>
        </div>
    );
}

export default CarouselHome;
