import React, { Fragment } from 'react'
import HeaderTopDesktop from './SubHeader/HeaderTopDesktop'
import HeaderMainDesktop from '../../components/common/SubHeader/HeaderMainDesktop';
import HeaderMenuDesktopMobile from '../../components/common/SubHeader/HeaderMenuDesktopMobile';


const Header = ({setUser, user, userState, Categories, categoryLoading }) => {
  return (
    <Fragment>
      <HeaderTopDesktop/>
      <HeaderMainDesktop setUser={setUser} user={user} userState={userState} />
      <HeaderMenuDesktopMobile Categories={Categories} categoryLoading={categoryLoading} />
     
    </Fragment>
  )
}

export default Header
