import React from 'react';
import styles from './CarouselHome.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselHomeCard from "./CarouselHomeCard/CarouselHomeCard";
import Container from "../../Container/Container";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 1200},
        items: 3,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: {max: 1200, min: 901},
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: {max: 900, min: 601},
        items: 2
    },
    mobile: {
        breakpoint: {max: 600, min: 0},
        items: 1
    }
};
const info = [
    {id: 1, image: './image/investors/1.png', name: 'John', earning: 23943422, followers: 1},
    {id: 2, image: './image/investors/2.png', name: 'John', earning: 23943422, followers: 1},
    {id: 3, image: './image/investors/3.png', name: 'John', earning: 23943422, followers: 1},
    {id: 4, image: './image/investors/4.png', name: 'John', earning: 23943422, followers: 1},
    {id: 5, image: './image/investors/5.png', name: 'John', earning: 23943422, followers: 1},
    {id: 6, image: './image/investors/6.png', name: 'John', earning: 23943422, followers: 1},
    {id: 7, image: './image/investors/7.png', name: 'John', earning: 23943422, followers: 1},
    {id: 8, image: './image/investors/8.png', name: 'John', earning: 23943422, followers: 1},
    {id: 9, image: './image/investors/9.png', name: 'John', earning: 23943422, followers: 1},

]

function CarouselHome(props) {
    return (
        <div className={styles.carousel}>
            <Container>
                <div className={styles.carouselContent}>
                    <h2 className={styles.carouselTitle}>Get iNSPIRE WITH OUR TOP CREATORS ON THE PLATFORM</h2>
                </div>
                <Carousel responsive={responsive}
                          wipeable={true}
                          renderArrowsWhenDisabled={true}
                          removeArrowOnDeviceType={[ 'tablet','desktop','superLargeDesktop']}
                          shouldResetAutoplay
                          arrows
                          rewind={true}
                          keyBoardControl={true}
                          draggable
                          showDots={true}
                >
                    {/*{info.map(item => (*/}
                    {/*     <CarouselHomeCard key={item.id} {...item} />*/}
                    {/*))}*/}
                    {info.map(item => {
                        return <CarouselHomeCard key={item.id} {...item} />
                    })}
                </Carousel>

            </Container>

            {/*<CarouselHomeCard/>*/}
        </div>
    );
}

export default CarouselHome;