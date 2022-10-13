import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import CategoryLoading from "../../placeholder/category/CategoryLoading";

const HomeCategories = ({Categories, categoryLoading }) => {


  const [display, setCatDisplay] = useState(false);
  if (display === false) {
    var disNone = "";
    var showHide = "";
    var title = "";
    disNone = "none";
    showHide = "";
    title = "Show More...";
  } else {
    disNone = "";
    showHide = "show";
    title = "Show Less";
  }

  return (
    <Fragment>
      <Col lg={2} className="d-none d-lg-flex">
        <div className="categories-dropdown-wrap style-2 font-heading mt-30">
          <div className="d-flex categori-dropdown-inner">
            <ul>
              {categoryLoading ? (
                <>
                  <CategoryLoading count={8} />
                </>
              ) : (
                Categories.slice(0, 4).map((category, indexe) => {
                  return (
                    <li>
                      <NavLink
                        to={
                          "/productcategory/" +
                          category.id +
                          "/" +
                          category.category_slug_en
                        }
                      >
                        <img src={category.category_icon} alt="" />
                        {category.category_name_en}
                      </NavLink>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <div className="more_slide_open" style={{ display: disNone }}>
            <div className="d-flex categori-dropdown-inner">
              <ul>
                {Categories.slice(4).map((category, indexe) => {
                  return (
                    <li>
                      <NavLink
                        to={
                          "/productcategory/" +
                          category.id +
                          "/" +
                          category.category_slug_en
                        }
                      >
                        <img src={category.category_icon} alt="" />
                        {category.category_name_en}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {categoryLoading ? (
            <></>
          ) : (
            <div className={`more_categories ${showHide}`}>
              <span className="icon" onClick={() => setCatDisplay(!display)} />
              <span
                className="heading-sm-1"
                onClick={() => setCatDisplay(!display)}
              >
                {title}
              </span>
            </div>
          )}
        </div>
      </Col>
    </Fragment>
  );
};

export default HomeCategories;
