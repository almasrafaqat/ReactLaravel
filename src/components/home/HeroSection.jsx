import React, { Fragment } from 'react'
import HomeSlider from './SubHeroSection/HomeSlider'
import { Container, Row } from 'react-bootstrap';
import HomeCategoriesBanner from './SubHeroSection/HomeCategoriesBanner';
import HomeCategories from './SubHeroSection/HomeCategories';



const HeroSection = ({ Categories, categoryLoading, Sliders, sliderLoading }) => {
 
    return (
        <Fragment>
            <main className="main">
                <section className="home-slider position-relative mb-30">
                    <Container>
                        <Row>
                            <HomeCategories Categories={Categories} categoryLoading={categoryLoading} />
                            <HomeSlider Sliders={Sliders} sliderLoading={sliderLoading} />
                            <HomeCategoriesBanner Categories={Categories} categoryLoading={categoryLoading} />
                        </Row>
                    </Container>
                </section>
            </main>
        </Fragment>
    )
}

export default HeroSection