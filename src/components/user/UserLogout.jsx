import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';




const UserLogout = () => {
    
    if (localStorage.getItem('token')) {
        localStorage.clear();
        return <Navigate to="/" replace={true} />
    }


    // const history = useNavigate();

    // if (localStorage.getItem('token')) {
    //     localStorage.clear();
    //     history("/");
    // }
    


    return (
        <></>
    )
}

export default UserLogout