import React, { Fragment } from 'react'
import { useEffect } from 'react'
import Cart from '../components/cart/Cart'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import { GetVisitorDetails } from '../components/functions/GetVisitors'
import ScrollTop from '../scroll/ScrollTop'

const CartPage = ({ user, Categories, categoryLoading }) => {

  const page = "cartPage";

  useEffect(() => {
    window.scroll(0, 0);
    GetVisitorDetails({ user: user, page: page });
  });

  return (
    <Fragment>
      <Header Categories={Categories} categoryLoading={categoryLoading} />
      <Cart />
      <Footer />
      <ScrollTop />
    </Fragment>
  )
}

export default CartPage