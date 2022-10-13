import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ResetPassword from '../components/user/ResetPassword'
import ScrollTop from '../scroll/ScrollTop'

const ResetPasswordPage = () => {
    return (
        <Fragment>
            <Header />
            <ResetPassword />
            <Footer />
            <ScrollTop />
        </Fragment>
    )
}

export default ResetPasswordPage