import React, { Fragment, useState, useEffect } from "react";
import { CategoryImage, HeaderImage } from "../../ImagesImports";
import HeaderTopMobile from "./HeaderTopMobile";
import HeaderMenuMobile from "./HeaderMenuMobile";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import CategoryLoading from "../../placeholder/category/CategoryLoading";
import CategoriesComp from "../subcomponents/Categories";

const HeaderMenuDesktopMobile = ({ Categories, categoryLoading }) => {
  const [catarrow, setCatArrow] = useState("down");
  const [display, setCatDisplay] = useState(false);
  const [mobMenuOpenState, setmobMenuOpenState] = useState("");

  const MobMenuOnclick = () => {
    if (mobMenuOpenState === "") {
      setmobMenuOpenState("sidebar-visible");
      document.body.classList.add("mobile-menu-active");
      document.body.style.overflow = "visible";
      let bodyOverlay = document.getElementById("body-overlay");
      bodyOverlay.classList.add("body-overlay-1");
    }
  };

  const overOnClick = () => {
    if (mobMenuOpenState === "sidebar-visible") {
      setmobMenuOpenState("");
    }
  };

  const mobMenyEmptyState = () => {
    if (mobMenuOpenState === "") {
      document.body.classList.remove("mobile-menu-active");
      document.body.style = "";
    }
  };
  mobMenyEmptyState();

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

  const catOpenBySpan = () => {
    var CatDiv = document.getElementById("catDiv");
    if (catarrow === "down") {
      CatDiv.classList.toggle("open");
    } else {
      CatDiv.classList.toggle("open");
    }
  };

  const MenuItemClick = (event) => {
    var panel = event.target.nextElementSibling;
    if (catarrow === "down") {
      panel.classList.toggle("open");
      setCatArrow("up");
    } else {
      panel.classList.toggle("open");
      setCatArrow("down");
    }
  };

  return (
    <Fragment>
      <header class="header-area header-style-1 header-style-5 header-height-2">
        <div className="header-bottom header-bottom-bg-color sticky-bar">
          <Container>
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <a href="index.html">
                  <img src={HeaderImage.Logo} alt="logo" />
                </a>
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div
                  className="main-categori-wrap d-none d-lg-block"
                  onClick={MenuItemClick}
                >
                  <a className="categories-button-active" href="#">
                    <span className="fi-rs-apps" onClick={catOpenBySpan}></span>{" "}
                    <span className="et" onClick={catOpenBySpan}>
                      Trending
                    </span>
                    Categories
                    <i className={`fi-rs-angle-${catarrow}`} />
                  </a>
                  <div
                    id="catDiv"
                    className="categories-dropdown-wrap categories-dropdown-active-large font-heading"
                  >
                    <div className=" categori-dropdown-inner">
                      <ul>
                        {
                          categoryLoading ? <CategoryLoading count={4} /> :
                            Array.isArray(Categories) ? Categories.slice(0, 4).map((cat, indexe) => {
                              return <li key={indexe}>
                                <NavLink to={"/productcategory/" + cat.id + "/" + cat.category_slug_en}>

                                  <img src={cat.category_icon} alt="" />
                                  {cat.category_name_en}
                                </NavLink>
                              </li>
                            })
                              : null
                        }
                      </ul>

                      <ul className="end">
                        {
                          categoryLoading ? <CategoryLoading count={4} /> :
                            Array.isArray(Categories) ? Categories.slice(4, 8).map((cat, indexe) => {
                              return <li key={indexe}>
                                <NavLink to={"/productcategory/" + cat.id + "/" + cat.category_slug_en}>

                                  <img src={cat.category_icon} alt="" />
                                  {cat.category_name_en}
                                </NavLink>
                              </li>
                            })
                              : null
                        }
                      </ul>
                    </div>
                    <div
                      className="more_slide_open"
                      style={{ display: disNone }}
                    >
                      <div className="d-flex categori-dropdown-inner">
                        <ul>
                          {
                            categoryLoading ? <CategoryLoading count={4} /> :
                              Array.isArray(Categories) ? Categories.slice(8, 10).map((cat, indexe) => {
                                return <li key={indexe}>
                                  <NavLink to={"/productcategory/" + cat.id + "/" + cat.category_slug_en}>

                                    <img src={cat.category_icon} alt="" />
                                    {cat.category_name_en}
                                  </NavLink>
                                </li>
                              })
                                : null
                          }
                        </ul>
                        <ul className="end">
                          {
                            categoryLoading ? <CategoryLoading count={4} /> :
                              Array.isArray(Categories) ? Categories.slice(10).map((cat, indexe) => {
                                return <li key={indexe}>
                                  <NavLink to={"/productcategory/" + cat.id + "/" + cat.category_slug_en}>

                                    <img src={cat.category_icon} alt="" />
                                    {cat.category_name_en}
                                  </NavLink>
                                </li>
                              })
                                : null
                          }
                        </ul>
                      </div>
                    </div>
                    {
                      Categories && categoryLoading ? <></> : <div className={`more_categories ${showHide}`}>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => setCatDisplay(!display)}
                          className="icon"
                        />
                        <span className="heading-sm-1">{title}</span>
                      </div>
                    }

                  </div>
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                  <nav>
                    <ul>
                      <li className="hot-deals">
                        <img src={HeaderImage.IconHotDeal} alt="hot deals" />
                        <a href="shop-grid-right.html">Deals</a>
                      </li>
                      <li>
                        <NavLink className="active" to="/">
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/cart">New Arrivals</NavLink>
                      </li>
                      <li>
                        <NavLink to="/checkout">Men</NavLink>
                      </li>
                      <li>
                        <NavLink to="/register">Women</NavLink>
                      </li>
                      <li>
                        <NavLink to="/register">Popular Categories</NavLink>
                      </li>

                      {categoryLoading ? <><span style={{ color: 'white' }}>Loading...</span> <span style={{ color: 'white' }}>Loading...</span></> : <CategoriesComp category={Categories} />}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img src={HeaderImage.HeadPhone} alt="hotline" />
                <p>
                  1900 - 888<span>24/7 Support Center</span>
                </p>
              </div>

              <div
                className="header-action-icon-2 d-block d-lg-none"
                onClick={MobMenuOnclick}
              >
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <HeaderTopMobile />
            </div>
          </Container>
        </div>

        <div id="body-overlay" onClick={overOnClick}></div>
      </header>
      <HeaderMenuMobile
        NavOpen={mobMenuOpenState}
        onChange={(value) => setmobMenuOpenState(value)}
      />
    </Fragment>
  );
};

export default HeaderMenuDesktopMobile;
