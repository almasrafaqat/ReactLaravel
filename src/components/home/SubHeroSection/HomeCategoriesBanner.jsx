import React, { Fragment } from 'react'
import { CategoryImage } from '../../ImagesImports';
import { Col, Row } from 'react-bootstrap'
import CategoryLoading from '../../placeholder/category/CategoryLoading';
import CategoryBannerLoading from '../../placeholder/category/CategoryBannerLoading';
import { NavLink } from 'react-router-dom';


const HomeCategoriesBanner = ({ Categories, categoryLoading }) => {

    return (
        <Fragment>
            <Col lg={3}>
                <Row>
                    {
                        categoryLoading ? <CategoryBannerLoading count={2} /> :
                            Categories.slice(0, 2).map((category) => {
                                return (
                                    <Col lg={12} md={6}>
                                        <div className="banner-img style-4 mt-30">
                                            <img src={category.category_banner} alt="" />
                                            <div className="banner-text">
                                                <h4 className="mb-30">
                                                    {category.category_title}
                                                </h4>
                                                <NavLink to={"/productcategory/" +
                                                    category.id +
                                                    "/" +
                                                    category.category_slug_en} className="btn btn-xs mb-50">
                                                    Shop Now <i className="fi-rs-arrow-small-right" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                    }


                </Row>
            </Col>
        </Fragment>
    )
}

export default HomeCategoriesBanner