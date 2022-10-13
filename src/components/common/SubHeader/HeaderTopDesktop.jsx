import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const HeaderTopDesktop = () => {
   
    return (
        <Fragment>
            <div className="header-top header-top-ptb-1 d-none d-lg-block">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4} xl={3}>
                            <div className="header-info">
                                <ul>
                                    <li><a href="page-about.htlm">About Us</a></li>
                                    <li><a href="page-account.html">My Account</a></li>
                                    <li><a href="shop-wishlist.html">Wishlist</a></li>
                                    <li><a href="shop-order.html">Order Tracking</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} xl={6}>
                            <div className="text-center">
                                <div id="news-flash" className="d-inline-block">
                                    <ul>
                                        <li>100% Secure delivery without contacting the courier</li>

                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4}>
                            <div className="header-info header-info-right">
                                <ul>
                                    <li>Need help? Call Us: <strong className="text-brand"> + 1800 900</strong></li>
                                    <li>
                                        <a className="language-dropdown-active" href="#">English <i className="fi-rs-angle-small-down" /></a>
                                        <ul className="language-dropdown">
                                            <li>
                                                <a href="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />Français</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />Deutsch</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />Pусский</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="language-dropdown-active" href="#">USD <i className="fi-rs-angle-small-down" /></a>
                                        <ul className="language-dropdown">
                                            <li>
                                                <a href="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />INR</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />MBP</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />EU</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default HeaderTopDesktop