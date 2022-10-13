import React, { Fragment } from 'react'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

import Pro1 from "../../assets/imgs/shop/product-1-1.jpg";
import Pro2 from "../../assets/imgs/shop/product-1-2.jpg";
import ProImage1 from "../../assets/imgs/shop/product-1-1.jpg";
import ProImage2 from "../../assets/imgs/shop/product-1-2.jpg";
import ProImage4 from "../../assets/imgs/shop/thumbnail-4.jpg";


const DailyBestSells = () => {
    const [slider, setSliderRef] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);




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
            <section className="section-padding pb-5">
                <Container>
                    <div className="section-title wow animate__animated animate__fadeIn">
                        <h3 className="">Daily Best Sells</h3>
                        <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="nav-tab-one-1"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-one-1"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab-one"
                                    aria-selected="true"
                                >
                                    Featured
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="nav-tab-two-1"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-two-1"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab-two"
                                    aria-selected="false"
                                >
                                    Popular
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="nav-tab-three-1"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-three-1"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab-three"
                                    aria-selected="false"
                                >
                                    New added
                                </button>
                            </li>
                        </ul>
                    </div>
                    <Row>
                        <Col lg={3} className="d-none d-lg-flex wow animate__animated animate__fadeIn">
                            <div className="banner-img style-2">
                                <div className="banner-text">
                                    <h2 className="mb-100">Bring nature into your home</h2>
                                    <a href="shop-grid-right.html" className="btn btn-xs">
                                        Shop Now <i className="fi-rs-arrow-small-right" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9} md={12} sm={12}
                            className="wow animate__animated animate__fadeIn"
                            data-wow-delay=".4s">
                            <div className="carausel-4-columns-cover arrow-center position-relative">
                                <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-arrows">
                                    <span class="slider-btn slider-prev slick-arrow" onClick={() => slider?.slickPrev()}><i class="fi-rs-arrow-small-left"></i></span>
                                    <span class="slider-btn slider-next slick-arrow" onClick={() => slider?.slickNext()}><i class="fi-rs-arrow-small-right"></i></span>
                                </div>
                                <Row>
                                    <Slider ref={setSliderRef} {...settings}>
                                        <Col md={6} sm={6} xs={12} lg={3}>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img
                                                                className="default-img"
                                                                src={Pro1}
                                                                alt=""
                                                            />
                                                            <img
                                                                className="hover-img"
                                                                src={Pro2}
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a
                                                            aria-label="Quick view"
                                                            className="action-btn small hover-up"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quickViewModal"
                                                        >
                                                            {" "}
                                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                                        </a>
                                                        <a
                                                            aria-label="Add To Wishlist"
                                                            className="action-btn small hover-up"
                                                            href="shop-wishlist.html"
                                                        >
                                                            <i className="fi-rs-heart" />
                                                        </a>
                                                        <a
                                                            aria-label="Compare"
                                                            className="action-btn small hover-up"
                                                            href="shop-compare.html"
                                                        >
                                                            <i className="fi-rs-shuffle" />
                                                        </a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Save 15%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Hodo Foods</a>
                                                    </div>
                                                    <h2>
                                                        <a href="shop-product-right.html">
                                                            Seeds of Change Organic Quinoa, Brown
                                                        </a>
                                                    </h2>
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "80%" }} />
                                                    </div>
                                                    <div className="product-price mt-10">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="sold mt-15 mb-15">
                                                        <div className="progress mb-5">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                style={{ width: "50%" }}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                        <span className="font-xs text-heading"> Sold: 90/120</span>
                                                    </div>
                                                    <a href="shop-cart.html" className="btn w-100 hover-up">
                                                        <i className="fi-rs-shopping-cart mr-5" />
                                                        Add To Cart
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6} xs={12} lg={3}>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img
                                                                className="default-img"
                                                                src={Pro1}
                                                                alt=""
                                                            />
                                                            <img
                                                                className="hover-img"
                                                                src={Pro2}
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a
                                                            aria-label="Quick view"
                                                            className="action-btn small hover-up"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quickViewModal"
                                                        >
                                                            {" "}
                                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                                        </a>
                                                        <a
                                                            aria-label="Add To Wishlist"
                                                            className="action-btn small hover-up"
                                                            href="shop-wishlist.html"
                                                        >
                                                            <i className="fi-rs-heart" />
                                                        </a>
                                                        <a
                                                            aria-label="Compare"
                                                            className="action-btn small hover-up"
                                                            href="shop-compare.html"
                                                        >
                                                            <i className="fi-rs-shuffle" />
                                                        </a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Save 15%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Hodo Foods</a>
                                                    </div>
                                                    <h2>
                                                        <a href="shop-product-right.html">
                                                            Seeds of Change Organic Quinoa, Brown
                                                        </a>
                                                    </h2>
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "80%" }} />
                                                    </div>
                                                    <div className="product-price mt-10">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="sold mt-15 mb-15">
                                                        <div className="progress mb-5">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                style={{ width: "50%" }}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                        <span className="font-xs text-heading"> Sold: 90/120</span>
                                                    </div>
                                                    <a href="shop-cart.html" className="btn w-100 hover-up">
                                                        <i className="fi-rs-shopping-cart mr-5" />
                                                        Add To Cart
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6} xs={12} lg={3}>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img
                                                                className="default-img"
                                                                src={Pro1}
                                                                alt=""
                                                            />
                                                            <img
                                                                className="hover-img"
                                                                src={Pro2}
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a
                                                            aria-label="Quick view"
                                                            className="action-btn small hover-up"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quickViewModal"
                                                        >
                                                            {" "}
                                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                                        </a>
                                                        <a
                                                            aria-label="Add To Wishlist"
                                                            className="action-btn small hover-up"
                                                            href="shop-wishlist.html"
                                                        >
                                                            <i className="fi-rs-heart" />
                                                        </a>
                                                        <a
                                                            aria-label="Compare"
                                                            className="action-btn small hover-up"
                                                            href="shop-compare.html"
                                                        >
                                                            <i className="fi-rs-shuffle" />
                                                        </a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Save 15%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Hodo Foods</a>
                                                    </div>
                                                    <h2>
                                                        <a href="shop-product-right.html">
                                                            Seeds of Change Organic Quinoa, Brown
                                                        </a>
                                                    </h2>
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "80%" }} />
                                                    </div>
                                                    <div className="product-price mt-10">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="sold mt-15 mb-15">
                                                        <div className="progress mb-5">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                style={{ width: "50%" }}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                        <span className="font-xs text-heading"> Sold: 90/120</span>
                                                    </div>
                                                    <a href="shop-cart.html" className="btn w-100 hover-up">
                                                        <i className="fi-rs-shopping-cart mr-5" />
                                                        Add To Cart
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6} xs={12} lg={3}>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img
                                                                className="default-img"
                                                                src={Pro1}
                                                                alt=""
                                                            />
                                                            <img
                                                                className="hover-img"
                                                                src={Pro2}
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a
                                                            aria-label="Quick view"
                                                            className="action-btn small hover-up"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quickViewModal"
                                                        >
                                                            {" "}
                                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                                        </a>
                                                        <a
                                                            aria-label="Add To Wishlist"
                                                            className="action-btn small hover-up"
                                                            href="shop-wishlist.html"
                                                        >
                                                            <i className="fi-rs-heart" />
                                                        </a>
                                                        <a
                                                            aria-label="Compare"
                                                            className="action-btn small hover-up"
                                                            href="shop-compare.html"
                                                        >
                                                            <i className="fi-rs-shuffle" />
                                                        </a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Save 15%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Hodo Foods</a>
                                                    </div>
                                                    <h2>
                                                        <a href="shop-product-right.html">
                                                            Seeds of Change Organic Quinoa, Brown
                                                        </a>
                                                    </h2>
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "80%" }} />
                                                    </div>
                                                    <div className="product-price mt-10">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="sold mt-15 mb-15">
                                                        <div className="progress mb-5">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                style={{ width: "50%" }}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                        <span className="font-xs text-heading"> Sold: 90/120</span>
                                                    </div>
                                                    <a href="shop-cart.html" className="btn w-100 hover-up">
                                                        <i className="fi-rs-shopping-cart mr-5" />
                                                        Add To Cart
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6} xs={12} lg={3}>
                                            <div className="product-cart-wrap">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href="shop-product-right.html">
                                                            <img
                                                                className="default-img"
                                                                src={Pro1}
                                                                alt=""
                                                            />
                                                            <img
                                                                className="hover-img"
                                                                src={Pro2}
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a
                                                            aria-label="Quick view"
                                                            className="action-btn small hover-up"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quickViewModal"
                                                        >
                                                            {" "}
                                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                                        </a>
                                                        <a
                                                            aria-label="Add To Wishlist"
                                                            className="action-btn small hover-up"
                                                            href="shop-wishlist.html"
                                                        >
                                                            <i className="fi-rs-heart" />
                                                        </a>
                                                        <a
                                                            aria-label="Compare"
                                                            className="action-btn small hover-up"
                                                            href="shop-compare.html"
                                                        >
                                                            <i className="fi-rs-shuffle" />
                                                        </a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Save 15%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href="shop-grid-right.html">Hodo Foods</a>
                                                    </div>
                                                    <h2>
                                                        <a href="shop-product-right.html">
                                                            Seeds of Change Organic Quinoa, Brown
                                                        </a>
                                                    </h2>
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "80%" }} />
                                                    </div>
                                                    <div className="product-price mt-10">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="sold mt-15 mb-15">
                                                        <div className="progress mb-5">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                style={{ width: "50%" }}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                        <span className="font-xs text-heading"> Sold: 90/120</span>
                                                    </div>
                                                    <a href="shop-cart.html" className="btn w-100 hover-up">
                                                        <i className="fi-rs-shopping-cart mr-5" />
                                                        Add To Cart
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Slider>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Modal

                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
            >
                <Modal.Header closeButton onClick={() => setModalShow(false)}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} sm={12} md={6} className="mb-md-0 mb-sm-5">
                            <div className="detail-gallery">
                                <span className="zoom-icon">
                                    <i className="fi-rs-search" />
                                </span>
                                {/* MAIN SLIDES */}
                                <div className="product-image-slider">
                                    <figure className="border-radius-10">
                                        <InnerImageZoom src={ProImage2} zoomSrc={ProImage2} className="detailimage" zoomScale={1.8} zoomType={"hover"} />

                                    </figure>
                                    <Row className="my-3">
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img src={ProImage2} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img src={ProImage2} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img src={ProImage2} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img src={ProImage2} />
                                        </Col>

                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <div className="detail-info pr-30 pl-30">
                                <span className="stock-status out-stock"> Sale Off </span>
                                <h3 className="title-detail">
                                    <a href="shop-product-right.html" className="text-heading">
                                        Seeds of Change Organic Quinoa, Brown
                                    </a>
                                </h3>
                                <div className="product-detail-rating">
                                    <div className="product-rate-cover text-end">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{ width: "90%" }} />
                                        </div>
                                        <span className="font-small ml-5 text-muted">
                                            {" "}
                                            (32 reviews)
                                        </span>
                                    </div>
                                </div>
                                <div className="clearfix product-price-cover">
                                    <div className="product-price primary-color float-left">
                                        <span className="current-price text-brand">$38</span>
                                        <span>
                                            <span className="save-price font-md color3 ml-15">
                                                26% Off
                                            </span>
                                            <span className="old-price font-md ml-15">$52</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="detail-extralink mb-30">
                                    <div className="detail-qty border radius">
                                        <a href="#" className="qty-down">
                                            <i className="fi-rs-angle-small-down" />
                                        </a>
                                        <input
                                            type="text"
                                            name="quantity"
                                            className="qty-val"
                                            defaultValue={1}
                                            min={1}
                                        />
                                        <a href="#" className="qty-up">
                                            <i className="fi-rs-angle-small-up" />
                                        </a>
                                    </div>
                                    <div className="product-extra-link2">
                                        <button type="submit" className="button button-add-to-cart">
                                            <i className="fi-rs-shopping-cart" />
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <div className="font-xs">
                                    <ul>
                                        <li className="mb-5">
                                            Vendor: <span className="text-brand">Nest</span>
                                        </li>
                                        <li className="mb-5">
                                            MFG:<span className="text-brand"> Jun 4.2022</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Detail Info */}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>


        </Fragment>
    )
}

export default DailyBestSells