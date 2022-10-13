import React, { Fragment } from 'react'
import Checkout from '../components/cart/Checkout'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ScrollTop from '../scroll/ScrollTop'

const CheckoutPage = ({ Categories, categoryLoading }) => {
    return (
        <Fragment>
            <Header Categories={Categories} categoryLoading={categoryLoading} />
            <Checkout />
            <Footer />
            <ScrollTop />
        </Fragment>
    )
}

export default CheckoutPage