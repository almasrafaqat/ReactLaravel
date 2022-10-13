import React, { Fragment } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SubCategory from "../components/productdetails/SubCategory";
import ScrollTop from "../scroll/ScrollTop";

const ProductSubCategoryPage = ({ Categories, categoryLoading }) => {
  return (
    <Fragment>
      <Header Categories={Categories} categoryLoading={categoryLoading} />
      <SubCategory />
      <Footer />
      <ScrollTop />
    </Fragment>
  );
};

export default ProductSubCategoryPage;
