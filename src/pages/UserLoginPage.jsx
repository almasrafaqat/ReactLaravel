import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import UserLogin from '../components/user/UserLogin'
import ScrollTop from '../scroll/ScrollTop'

const UserLoginPage = ({setUser, user,Categories, categoryLoading  }) => {
    
    return (
        <Fragment>
        <Header Categories={Categories} categoryLoading={categoryLoading} />
            <UserLogin setUser={setUser} user={user} />
            <Footer />
            <ScrollTop />
        </Fragment>
    )
}

export default UserLoginPage