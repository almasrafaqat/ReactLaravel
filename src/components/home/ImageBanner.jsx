import React, { Fragment } from 'react'

import { BannersImage } from '../ImagesImports';


const ImageBanner = () => {
    return (
        <Fragment>
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="banner-img style-6 wow animate__animated animate__fadeInUp"
                                data-wow-delay={0}
                            >
                                <img src={BannersImage.Banner16} alt="" />
                                <div className="banner-text">
                                    <h6 className="mb-10 mt-30">
                                        Everyday Fresh with
                                        <br />
                                        Our Products
                                    </h6>
                                    <p>Go to supplier</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="banner-img style-6 wow animate__animated animate__fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <img src={BannersImage.Banner17} alt="" />
                                <div className="banner-text">
                                    <h6 className="mb-10 mt-30">
                                        100% guaranteed all
                                        <br />
                                        Fresh items
                                    </h6>
                                    <p>Go to supplier</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="banner-img style-6 wow animate__animated animate__fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <img src={BannersImage.Banner18} alt="" />
                                <div className="banner-text">
                                    <h6 className="mb-10 mt-30">
                                        Special grocery sale
                                        <br />
                                        off this month
                                    </h6>
                                    <p>Go to supplier</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="banner-img style-6 wow animate__animated animate__fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <img src={BannersImage.Banner19} alt="" />
                                <div className="banner-text">
                                    <h6 className="mb-10 mt-30">
                                        Enjoy 15% OFF for all
                                        <br />
                                        vegetable and fruit
                                    </h6>
                                    <p>Go to supplier</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default ImageBanner