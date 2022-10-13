import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import AppURL from '../../api/AppURL';


   export const GetVisitorDetails = ({ page ,user }) => {

        const data = {
            page: page,
            email: user.email,
            userId: user.id,
        }
        if (!localStorage.getItem('token')) {
            data.email = "guest";
            data.userId = "0";
        }
        axios.get(AppURL.VisitorDetails(data.userId, data.email, data.page)).then().catch();
    }

   
