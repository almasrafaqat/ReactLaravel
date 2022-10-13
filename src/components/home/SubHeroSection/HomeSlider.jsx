import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Col } from "react-bootstrap";

import SliderLoading from "../../placeholder/slider/sliderLoading";

const HomeSlider = ({Sliders, sliderLoading}) => {
  
  const [slider, setSliderRef] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Col lg={7}>
        <div class="home-slide-cover mt-30">
          <div class="hero-slider-1 style-5 dot-style-1 dot-style-1-position-2">
            <Slider ref={setSliderRef} {...settings}>
              {sliderLoading ? (
                <SliderLoading />
              ) : (
                Sliders.map((slider, index) => {
                  return (
                    <div className="single-hero-slider">
                      <img
                        className="slider-img"
                        src={slider.slider_image}
                        alt={slider.slider_image}
                      />
                      <div
                        
                        style={{
                          position: "absolute",
                          top: "30px",
                          marginLeft: "70px",
                         
                          
                        }}
                      >
                        <h1 class="display-2 mb-40" style={{ width: "45%", fontSize: '2rem' }}>
                          {slider.slider_title}
                        </h1>
                        <p style={{ width: "40%", fontSize: '1rem' }}>
                          <strong>{slider.slider_desc}</strong>
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </Slider>
          </div>
          {sliderLoading ? (
            <></>
          ) : (
            <div class="slider-arrow hero-slider-1-arrow">
              <span
                class="slider-btn slider-prev slick-arrow"
                onClick={() => slider?.slickPrev()}
              >
                <i class="fi-rs-angle-left"></i>
              </span>
              <span
                class="slider-btn slider-next slick-arrow"
                onClick={() => slider?.slickNext()}
              >
                <i class="fi-rs-angle-right"></i>
              </span>
            </div>
          )}
        </div>
      </Col>
    </Fragment>
  );
};

export default HomeSlider;
