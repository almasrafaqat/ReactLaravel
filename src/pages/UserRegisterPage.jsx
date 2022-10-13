import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import UserRegister from '../components/user/UserRegister'
import ScrollTop from '../scroll/ScrollTop'

const UserRegisterPage = ({setUser, user,Categories, categoryLoading  }) => {
 

    return (
        <Fragment>
            <Header Categories={Categories} categoryLoading={categoryLoading} />
            <UserRegister setUser={setUser} user={user} />
            <Footer />
            <ScrollTop />
        </Fragment>
    )
}

export default UserRegisterPage