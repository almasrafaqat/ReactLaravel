import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Favourite from '../components/favourite/Favourite'
import ScrollTop from '../scroll/ScrollTop'

const FavouritePage = ({ Categories, categoryLoading }) => {
    return (
        <Fragment>
            <Header Categories={Categories} categoryLoading={categoryLoading} />
            <Favourite />
            <Footer />
            <ScrollTop />
        </Fragment>
    )
}

export default FavouritePage