import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ForgetPassword from '../components/user/ForgetPassword'
import ScrollTop from '../scroll/ScrollTop'

const ForgetPasswordPage = () => {
    return (
        <Fragment>
            <Header />
            <ForgetPassword />
            <Footer />
            <ScrollTop />
        </Fragment>
    )
}

export default ForgetPasswordPage