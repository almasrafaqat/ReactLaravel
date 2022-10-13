import React, { Fragment, useEffect } from "react";
import Header from "../components/common/Header";
import Banners from "../components/home/Banners";
import HeroSection from "../components/home/HeroSection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import PopularProducts from "../components/home/PopularProducts";
import ImageBanner from "../components/home/ImageBanner";
import DailyBestSells from "../components/home/DailyBestSells";
import DealOfDay from "../components/home/DealOfDay";
import ProductWidgets from "../components/home/ProductWidgets";
import Footer from "../components/common/Footer";
import ScrollTop from "../scroll/ScrollTop";
import { GetVisitorDetails } from "../components/functions/GetVisitors";



const HomePage = ({ setUser, user, userState, Categories, categoryLoading, Sliders, sliderLoading }) => {
  
 

  const page = "homePage";

  useEffect(() => {
    // window.scroll(0, 0);
    GetVisitorDetails({ user: user, page: page });
  });



  return (
    <Fragment>
      <Header setUser={setUser} user={user} userState={userState} Categories={Categories} categoryLoading={categoryLoading} />
      <HeroSection Sliders={Sliders} sliderLoading={sliderLoading} Categories={Categories} categoryLoading={categoryLoading} />
      <FeaturedCategories Categories={Categories} categoryLoading={categoryLoading} />
      <Banners Categories={Categories} categoryLoading={categoryLoading} />
      <PopularProducts />
      <ImageBanner />
      <DailyBestSells />
      <DealOfDay />
      <ProductWidgets />
      <Footer />
      <ScrollTop />
    </Fragment>
  );
};

export default HomePage;
