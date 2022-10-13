import React, { Fragment } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SubSubCategory from "../components/productdetails/SubSubCategory";
import ScrollTop from "../scroll/ScrollTop";

const ProductSubSubCategoryPage = ({ Categories, categoryLoading }) => {
  return (
    <Fragment>
      <Header Categories={Categories} categoryLoading={categoryLoading} />
      <SubSubCategory />
      <Footer />
      <ScrollTop />
    </Fragment>
  );
};

export default ProductSubSubCategoryPage;
