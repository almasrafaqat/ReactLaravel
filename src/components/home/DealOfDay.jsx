import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { BannersImage } from '../ImagesImports'
const DealOfDay = () => {
    const [timerDays, setTimerDays] = useState(2);
    const [timerHours, setTimerHours] = useState(3);
    const [timerMinutes, setTimerMinutes] = useState(60);
    const [timerSeconds, setTimerSeconds] = useState(50);

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("Aug 19,2022 ").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <Fragment>
            <section className="section-padding pb-5">
                <Container>
                    <div
                        className="section-title wow animate__animated animate__fadeIn"
                        data-wow-delay={0}
                    >
                        <h3 className="">Deals Of The Day</h3>
                        <a className="show-all" href="shop-grid-right.html">
                            All Deals
                            <i className="fi-rs-angle-right" />
                        </a>
                    </div>
                    <Row>
                        <Col xl={3} lg={4} md={6}>
                            <div
                                className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                data-wow-delay={0}
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <a href="shop-product-right.html">
                                            <img src={BannersImage.Banner5} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown">
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerDays}</span>
                                                <span className="countdown-period"> days </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerHours}</span>
                                                <span className="countdown-period"> hours </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerMinutes}</span>
                                                <span className="countdown-period"> mins </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerSeconds}</span>
                                                <span className="countdown-period"> sec </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="deals-content">
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
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
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
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div
                                className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <a href="shop-product-right.html">
                                            <img src={BannersImage.Banner6} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown">
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerDays}</span>
                                                <span className="countdown-period"> days </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerHours}</span>
                                                <span className="countdown-period"> hours </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerMinutes}</span>
                                                <span className="countdown-period"> mins </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerSeconds}</span>
                                                <span className="countdown-period"> sec </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="deals-content">
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Perdue Simply Smart Organics Gluten Free
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
                                                By <a href="vendor-details-1.html">Old El Paso</a>
                                            </span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$24.85</span>
                                                <span className="old-price">$26.8</span>
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
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6} className="d-none d-lg-block">

                            <div
                                className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >

                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <a href="shop-product-right.html">
                                            <img src={BannersImage.Banner7} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown">
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerDays}</span>
                                                <span className="countdown-period"> days </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerHours}</span>
                                                <span className="countdown-period"> hours </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerMinutes}</span>
                                                <span className="countdown-period"> mins </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerSeconds}</span>
                                                <span className="countdown-period"> sec </span>
                                            </span>
                                        </div>

                                    </div>
                                    <div className="deals-content">

                                        <h2>
                                            <a href="shop-product-right.html">
                                                Signature Wood-Fired Mushroom and Caramelized
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "80%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.0)</span>
                                            <br />

                                        </div>
                                        <div>
                                            <span className="font-small text-muted">
                                                By <a href="vendor-details-1.html">Progresso</a>
                                            </span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$12.85</span>
                                                <span className="old-price">$13.8</span>
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
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6} className="d-none d-xl-block">
                            <div
                                className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <a href="shop-product-right.html">
                                            <img src={BannersImage.Banner8} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown">
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerDays}</span>
                                                <span className="countdown-period"> days </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerHours}</span>
                                                <span className="countdown-period"> hours </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerMinutes}</span>
                                                <span className="countdown-period"> mins </span>
                                            </span>
                                            <span className="countdown-section">
                                                <span className="countdown-amount hover-up">{timerSeconds}</span>
                                                <span className="countdown-period"> sec </span>
                                            </span>
                                        </div>

                                    </div>
                                    <div className="deals-content">
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Simply Lemonade with Raspberry Juice
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "80%" }} />
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">
                                                By <a href="vendor-details-1.html">Yoplait</a>
                                            </span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$15.85</span>
                                                <span className="old-price">$16.8</span>
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
    )
}

export default DealOfDay