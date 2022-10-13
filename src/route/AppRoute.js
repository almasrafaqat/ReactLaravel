import React, { Fragment, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import FavouritePage from '../pages/FavouritePage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import HomePage from '../pages/HomePage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProfilePage from '../pages/ProfilePage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import UserLoginPage from '../pages/UserLoginPage';
import UserRegisterPage from '../pages/UserRegisterPage';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Practice from '../components/Practice';
import LogoutPage from '../pages/LogoutPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import ProductSubSubCategoryPage from '../pages/ProductSubSubCategoryPage';



const AppRoute = () => {
  const [Categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [Sliders, setSliders] = useState([]);
  const [sliderLoading, setSliderLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(AppURL.getCategories);

      setCategories(result.data);
      setCategoryLoading(false);
    };

    fetchData();

    const fetchSlider = async () => {
      const result = await axios(AppURL.getsliders);

      setSliders(result.data);
      setSliderLoading(false);
    };

    fetchSlider();

  }, []);

  const [user, userState] = useState({});

  useEffect(() => {

    axios.get(AppURL.UserData,).then(response => {
      setUser(response.data);
    })
      .catch(error => {

      })
  }, [])

  const setUser = (user) => {

    userState((prev) => prev = user);
  }

  return (
    <Fragment>

      <Routes>
        <Route path='/' element={<HomePage setUser={setUser} user={user} userState={value => userState(value)} Categories={Categories} categoryLoading={categoryLoading} Sliders={Sliders} sliderLoading={sliderLoading}/>} />
        <Route path='/cart' element={<CartPage user={user} Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/checkout' element={<CheckoutPage Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/productdetails/:id/:title' element={<ProductDetailsPage Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/category/:id/:slug' element={<ProductCategoryPage Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/productcategory/:id/:slug' element={<ProductCategoryPage Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/productsubcategory/:category/:id/:slug' element={<ProductSubCategoryPage Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/productsubsubcategory/:category/:subcategory/:id/:slug' element={<ProductSubSubCategoryPage Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/favourite' element={<FavouritePage Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/login' element={<UserLoginPage setUser={setUser} user={user} Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/register' element={<UserRegisterPage setUser={setUser} user={user} Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/forget/password' element={<ForgetPasswordPage />} Categories={Categories} categoryLoading={categoryLoading} />
        <Route path='/reset/password/:pincode' element={<ResetPasswordPage />} Categories={Categories} categoryLoading={categoryLoading} />
        <Route path='/profile' element={<ProfilePage setUser={setUser} user={user} Categories={Categories} categoryLoading={categoryLoading} />} />
        <Route path='/logout' element={<LogoutPage setUser={setUser} user={user} />} />

        <Route path='practice' element={<Practice initialCount={20} />} />
      </Routes>
    </Fragment>
  )
}

export default AppRoute