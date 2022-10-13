import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ProductDetails from '../components/productdetails/ProductDetails'
import ScrollTop from '../scroll/ScrollTop'

const ProductDetailsPage = ({ Categories, categoryLoading }) => {
  return (
    <Fragment>
      <Header Categories={Categories} categoryLoading={categoryLoading} />
      <ProductDetails />
      <Footer />
      <ScrollTop />
    </Fragment>
  )
}

export default ProductDetailsPage