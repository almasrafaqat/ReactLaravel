import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'

const CategoryBannerLoading = ({ count }) => {

    function Box({ children }) {
        return (
            <div
                style={{

                    lineHeight: 2,
                    marginBottom: '0.7rem',


                }}
            >
                {children}
            </div>
        )
    }

    return (
        <Fragment>
            <div className="banner-img style-4 mt-30">
                <Skeleton wrapper={Box} count={count} width={350} height={250} />
            </div>
            <br />
        </Fragment>
    )
}

export default CategoryBannerLoading