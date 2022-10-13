import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import BannerLoading from '../placeholder/category/BannerLoading'

const Banners = ({ Categories, categoryLoading }) => {
    return (
        <Fragment>
            <section className="banners mb-25">
                <Container>
                    <Row>
                        {
                            categoryLoading ? <BannerLoading/>:
                            Categories.slice(2, 5).map((category, indexe) => {

                                return <div className="col-lg-4 col-md-6">
                                    <div
                                        className="banner-img wow animate__animated animate__fadeInUp"
                                        data-wow-delay={0}
                                    >
                                        <img src={category.category_banner} alt="" />
                                        <div className="banner-text">
                                            <h4>
                                               {category.category_title}
                                            </h4>
                                            <NavLink to={"/productcategory/" + category.id + "/" + category.category_slug_en}  className="btn btn-xs">
                                                Shop Now <i className="fi-rs-arrow-small-right" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </Row>
                </Container>
            </section>

        </Fragment>
    )
}

export default Banners