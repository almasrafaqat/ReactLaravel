import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Profile from '../components/user/Profile'
import ScrollTop from '../scroll/ScrollTop'

const ProfilePage = ({ user,Categories,categoryLoading }) => {
  // let user = props.user;

  return (
    <Fragment>
      <Header Categories={Categories} categoryLoading={categoryLoading} />
      <Profile user={user} />
      <Footer />
      <ScrollTop />
    </Fragment>
  )
}

export default ProfilePage