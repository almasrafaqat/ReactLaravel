import React from 'react'
import { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ThumbImages } from '../ImagesImports'

const ProductWidgets = () => {
    return (
        <Fragment>
            <section className="section-padding mb-30">
                <Container>
                    <Row>
                        <Col xl={3} lg={4} md={6}
                            className="mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
                            data-wow-delay={0}
                        >
                            <h4 className="section-title style-1 mb-30 animated animated">
                                Top Selling
                            </h4>
                            <div className="product-list-small animated animated">
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage1} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Nestle Original Coffee-Mate Coffee Creamer
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage2} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Nestle Original Coffee-Mate Coffee Creamer
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage3} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Nestle Original Coffee-Mate Coffee Creamer
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}
                            className="mb-md-0 wow animate__animated animate__fadeInUp"
                            data-wow-delay=".1s"
                        >
                            <h4 className="section-title style-1 mb-30 animated animated">
                                Trending Products
                            </h4>
                            <div className="product-list-small animated animated">
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage4} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Organic Cage-Free Grade A Large Brown Eggs
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage5} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage6} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Naturally Flavored Cinnamon Vanilla Light Roast Coffee
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}
                            className="mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <h4 className="section-title style-1 mb-30 animated animated">
                                Recently added
                            </h4>
                            <div className="product-list-small animated animated">
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage7} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Pepperidge Farm Farmhouse Hearty White Bread
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage8} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Organic Frozen Triple Berry Blend
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage9} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Oroweat Country Buttermilk Bread
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}
                            className="mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <h4 className="section-title style-1 mb-30 animated animated">
                                Top Rated
                            </h4>
                            <div className="product-list-small animated animated">
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage10} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Foster Farms Takeout Crispy Classic Buffalo Wings
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage11} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center hover-up">
                                    <figure className="col-md-4 mb-0">
                                        <a href="shop-product-right.html">
                                            <img src={ThumbImages.ThumbImage12} alt="" />
                                        </a>
                                    </figure>
                                    <div className="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">
                                                All Natural Italian-Style Chicken Meatballs
                                            </a>
                                        </h6>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div className="product-price">
                                            <span>$32.85</span>
                                            <span className="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
    )
}

export default ProductWidgets