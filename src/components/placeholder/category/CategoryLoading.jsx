import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CategoryLoading = ({count}) => {

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
            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '0.5rem', marginRight: '0.5'}}>
                <Skeleton wrapper={Box} count={count} circle={true} height={30} width={30} />
                &nbsp;
                <Skeleton wrapper={Box} count={count} height={30} width={140} />
            </div>
            <br/>
        </Fragment>
    )
}

export default CategoryLoading