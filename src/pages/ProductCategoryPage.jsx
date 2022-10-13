import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Category from '../components/productdetails/Category'
import ScrollTop from '../scroll/ScrollTop'

const ProductCategoryPage = ({ Categories, categoryLoading }) => {
    return (
        <Fragment>
            <Header Categories={Categories} categoryLoading={categoryLoading} />
            <Category />
            <Footer />
            <ScrollTop />
        </Fragment>
    )
}

export default ProductCategoryPage