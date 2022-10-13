import React, { Fragment, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

import ProImage1 from "../../assets/imgs/shop/product-1-1.jpg";
import ProImage2 from "../../assets/imgs/shop/product-1-2.jpg";
import ProImage4 from "../../assets/imgs/shop/thumbnail-4.jpg";


const PopularProducts = () => {
    const [modalShow, setModalShow] = useState(false);
    return (

        <Fragment>

            <section className="product-tabs section-padding position-relative">
                <Container>

                    <div class="section-title style-2 wow animate__animated animate__fadeIn">
                        <h3>Popular Products</h3>
                        <ul className="nav nav-tabs links" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="nav-tab-one"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-one"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab-one"
                                    aria-selected="true"
                                >
                                    All
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="nav-tab-two"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-two"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab-two"
                                    aria-selected="false"
                                >
                                    Milks &amp; Dairies
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="nav-tab-three"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab-three"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab-three"
                                    aria-selected="false"
                                >
                                    Coffes &amp; Teas
                                </button>
                            </li>
                        </ul>

                    </div>
                    <Row className="product-grid-4">
                        <Col md={4} sm={6} xs={12} className="col-lg-1-5">
                            <div
                                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                data-wow-delay=".1s"
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <NavLink to="/productdetails/2/green-vagetables-fruit">
                                            <img
                                                className="default-img"
                                                src={ProImage1}
                                                alt=""
                                            />
                                            <img
                                                className="hover-img"
                                                src={ProImage2}
                                                alt=""
                                            />
                                        </NavLink>
                                    </div>
                                    <div className="product-action-1">
                                        <a
                                            aria-label="Add To Wishlist"
                                            className="action-btn"
                                            href="shop-wishlist.html"
                                        >
                                            <i className="fi-rs-heart" />
                                        </a>
                                        <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                                            <i className="fi-rs-shuffle" />
                                        </a>
                                        <a
                                            aria-label="Quick view"
                                            className="action-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickViewModal"
                                        >
                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                        </a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span class="sale">Sale</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="product-category">
                                        <a href="shop-grid-right.html">Snack</a>
                                    </div>
                                    <h2>
                                        <NavLink to="/productdetails/2/green-vagetables-fruit">
                                            Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                        </NavLink>
                                    </h2>
                                    <div className="product-rate-cover">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{ width: "90%" }} />
                                        </div>
                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span className="font-small text-muted">
                                            By <a href="vendor-details-1.html">NestFood</a>
                                        </span>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-price">
                                            <span>$28.85</span>
                                            <span className="old-price">$32.8</span>
                                        </div>
                                        <div className="add-cart">
                                            <a className="add" href="shop-cart.html">
                                                <i className="fi-rs-shopping-cart mr-5" />
                                                Add{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="col-lg-1-5">
                            <div
                                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                data-wow-delay=".1s"
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img
                                                className="default-img"
                                                src={ProImage1}
                                                alt=""
                                            />
                                            <img
                                                className="hover-img"
                                                src={ProImage2}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a
                                            aria-label="Add To Wishlist"
                                            className="action-btn"
                                            href="shop-wishlist.html"
                                        >
                                            <i className="fi-rs-heart" />
                                        </a>
                                        <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                                            <i className="fi-rs-shuffle" />
                                        </a>
                                        <a
                                            aria-label="Quick view"
                                            className="action-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickViewModal"
                                        >
                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                        </a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span class="new">New</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="product-category">
                                        <a href="shop-grid-right.html">Snack</a>
                                    </div>
                                    <h2>
                                        <a href="shop-product-right.html">
                                            Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                        </a>
                                    </h2>
                                    <div className="product-rate-cover">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{ width: "90%" }} />
                                        </div>
                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span className="font-small text-muted">
                                            By <a href="vendor-details-1.html">NestFood</a>
                                        </span>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-price">
                                            <span>$28.85</span>
                                            <span className="old-price">$32.8</span>
                                        </div>
                                        <div className="add-cart">
                                            <a className="add" href="shop-cart.html">
                                                <i className="fi-rs-shopping-cart mr-5" />
                                                Add{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="col-lg-1-5">
                            <div
                                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                data-wow-delay=".1s"
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img
                                                className="default-img"
                                                src={ProImage1}
                                                alt=""
                                            />
                                            <img
                                                className="hover-img"
                                                src={ProImage2}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a
                                            aria-label="Add To Wishlist"
                                            className="action-btn"
                                            href="shop-wishlist.html"
                                        >
                                            <i className="fi-rs-heart" />
                                        </a>
                                        <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                                            <i className="fi-rs-shuffle" />
                                        </a>
                                        <a
                                            aria-label="Quick view"
                                            className="action-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickViewModal"
                                        >
                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                        </a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span class="best">-14%</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="product-category">
                                        <a href="shop-grid-right.html">Snack</a>
                                    </div>
                                    <h2>
                                        <a href="shop-product-right.html">
                                            Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                        </a>
                                    </h2>
                                    <div className="product-rate-cover">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{ width: "90%" }} />
                                        </div>
                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span className="font-small text-muted">
                                            By <a href="vendor-details-1.html">NestFood</a>
                                        </span>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-price">
                                            <span>$28.85</span>
                                            <span className="old-price">$32.8</span>
                                        </div>
                                        <div className="add-cart">
                                            <a className="add" href="shop-cart.html">
                                                <i className="fi-rs-shopping-cart mr-5" />
                                                Add{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="col-lg-1-5">
                            <div
                                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                data-wow-delay=".1s"
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img
                                                className="default-img"
                                                src={ProImage1}
                                                alt=""
                                            />
                                            <img
                                                className="hover-img"
                                                src={ProImage2}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a
                                            aria-label="Add To Wishlist"
                                            className="action-btn"
                                            href="shop-wishlist.html"
                                        >
                                            <i className="fi-rs-heart" />
                                        </a>
                                        <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                                            <i className="fi-rs-shuffle" />
                                        </a>
                                        <a
                                            aria-label="Quick view"
                                            className="action-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickViewModal"
                                        >
                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                        </a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="hot">Hot</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="product-category">
                                        <a href="shop-grid-right.html">Snack</a>
                                    </div>
                                    <h2>
                                        <a href="shop-product-right.html">
                                            Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                        </a>
                                    </h2>
                                    <div className="product-rate-cover">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{ width: "90%" }} />
                                        </div>
                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span className="font-small text-muted">
                                            By <a href="vendor-details-1.html">NestFood</a>
                                        </span>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-price">
                                            <span>$28.85</span>
                                            <span className="old-price">$32.8</span>
                                        </div>
                                        <div className="add-cart">
                                            <a className="add" href="shop-cart.html">
                                                <i className="fi-rs-shopping-cart mr-5" />
                                                Add{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="col-lg-1-5">
                            <div
                                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                data-wow-delay=".1s"
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img
                                                className="default-img"
                                                src={ProImage1}
                                                alt=""
                                            />
                                            <img
                                                className="hover-img"
                                                src={ProImage2}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a
                                            aria-label="Add To Wishlist"
                                            className="action-btn"
                                            href="shop-wishlist.html"
                                        >
                                            <i className="fi-rs-heart" />
                                        </a>
                                        <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                                            <i className="fi-rs-shuffle" />
                                        </a>
                                        <a
                                            aria-label="Quick view"
                                            className="action-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickViewModal"
                                        >
                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                        </a>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="hot">Hot</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="product-category">
                                        <a href="shop-grid-right.html">Snack</a>
                                    </div>
                                    <h2>
                                        <a href="shop-product-right.html">
                                            Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                        </a>
                                    </h2>
                                    <div className="product-rate-cover">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{ width: "90%" }} />
                                        </div>
                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span className="font-small text-muted">
                                            By <a href="vendor-details-1.html">NestFood</a>
                                        </span>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-price">
                                            <span>$28.85</span>
                                            <span className="old-price">$32.8</span>
                                        </div>
                                        <div className="add-cart">
                                            <a className="add" href="shop-cart.html">
                                                <i className="fi-rs-shopping-cart mr-5" />
                                                Add{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="col-lg-1-5">
                            <div
                                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                data-wow-delay=".1s"
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <a href="shop-product-right.html">
                                            <img
                                                className="default-img"
                                                src={ProImage1}
                                                alt=""
                                            />
                                            <img
                                                className="hover-img"
                                                src={ProImage2}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="product-action-1">
                                        <a
                                            aria-label="Add To Wishlist"
                                            className="action-btn"
                                            href="shop-wishlist.html"
                                        >
                                            <i className="fi-rs-heart" />
                                        </a>
                                        <a aria-label="Compare" className="action-btn" href="shop-compare.html">
                                            <i className="fi-rs-shuffle" />
                                        </a>
                                        <a
                                            aria-label="Quick view"
                                            className="action-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickViewModal"
                                        >
                                            <i className="fi-rs-eye" onClick={() => setModalShow(true)} />
                                        </a>
                                    </div>

                                </div>
                                <div className="product-content-wrap">
                                    <div className="product-category">
                                        <a href="shop-grid-right.html">Snack</a>
                                    </div>
                                    <h2>
                                        <a href="shop-product-right.html">
                                            Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                        </a>
                                    </h2>
                                    <div className="product-rate-cover">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{ width: "90%" }} />
                                        </div>
                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div>
                                        <span className="font-small text-muted">
                                            By <a href="vendor-details-1.html">NestFood</a>
                                        </span>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-price">
                                            <span>$28.85</span>
                                            <span className="old-price">$32.8</span>
                                        </div>
                                        <div className="add-cart">
                                            <a className="add" href="shop-cart.html">
                                                <i className="fi-rs-shopping-cart mr-5" />
                                                Add{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
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

export default PopularProducts