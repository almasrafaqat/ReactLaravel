import React, { Fragment, useState, useEffect } from 'react'


const ScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);


  return (
    <Fragment>
      {
        showTopBtn ? <div className="top-to-btm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

          <i className="fi-rs-arrow-small-up ScrollIcon icon-position icon-style" />
        </div> :
          <></>


      }

    </Fragment>
  )
}

export default ScrollTop