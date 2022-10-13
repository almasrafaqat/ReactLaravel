import React, { Fragment, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FeaturedCategoryLoading from '../placeholder/category/FeaturedCategoryLoading';

const FeaturedCategories = ({ Categories, categoryLoading }) => {
    const [slider, setSliderRef] = useState(null);
  
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Fragment>
        {
            categoryLoading ? <><FeaturedCategoryLoading count={8} /></> :
            <main className="main">
                <section className="popular-categories section-padding">
                    <Container className="wow animate__animated animate__fadeIn">
                        <div className="section-title">
                            <div className="title">
                                <h3>Featured Categories</h3>
                                <ListGroup horizontal className="list-inline nav nav-tabs links">
                                {
                                    Categories.slice(0,4).map((category, indexe) => {
                                        return  <ListGroup.Item className="list-inline-item nav-item">
                                        <NavLink to={"/productcategory/" + category.id + "/" + category.category_slug_en}  className="nav-link">
                                            {category.category_name_en}
                                        </NavLink>
                                    </ListGroup.Item>
                                    })
                                }
                                   
                                    

                               </ListGroup>

                            </div>
                            <div
                                className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                                id="carausel-10-columns-arrows">
                                <span class="slider-btn slider-prev slick-arrow" onClick={() => slider?.slickPrev()} ><i class="fi-rs-arrow-small-left"></i></span>
                                <span class="slider-btn slider-next slick-arrow" onClick={() => slider?.slickNext()} ><i class="fi-rs-arrow-small-right"></i></span>
                            </div>
                        </div>
                        <div className="carausel-10-columns-cover position-relative">
                        
                        
                            <Slider ref={setSliderRef} {...settings}>

                                {
                                   
                                    Categories.map((category, indexe) => {
                                        return <div key={indexe} className="carausel-10-columns" id="carausel-10-columns">

                                            <div className="card-2 bg-13 wow animate__animated animate__fadeInUp" data-wow-delay=".7s" >
                                                <figure className="img-hover-scale overflow-hidden">
                                                    <NavLink to={"/productcategory/" + category.id + "/" + category.category_slug_en} >
                                                        <img src={category.category_image} alt="" />
                                                    </NavLink>
                                                </figure>
                                                <h6>
                                                    <NavLink to={"/productcategory/" + category.id + "/" + category.category_slug_en} >
                                                        {category.category_name_en}
                                                    </NavLink>
                                                </h6>
                                                <span>26 items</span>
                                            </div>

                                        </div>
                                    })
                                }
                            

                            </Slider>
                        
                        </div>


                    </Container>
                </section>
            </main>
                            }

        </Fragment>
    )
}

export default FeaturedCategories