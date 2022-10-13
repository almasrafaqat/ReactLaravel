import React, { Fragment } from 'react'
import { HeaderImage } from '../../ImagesImports';
import { Container } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


const HeaderMainDesktop = ({ setUser, user, userState }) => {

    const history = useNavigate();
    const logoutOnClick = () => {
        localStorage.clear();
        history("/");
    }


    let buttons;
    if (localStorage.getItem('token')) {
        buttons = (
            <div class="header-action-icon-2">
                <a href="page-account.html">
                    <img class="svgInject" alt="Nest" src={HeaderImage.IconUser} />
                </a>
                <NavLink to="/profile"><span class="lable ml-0">Account</span></NavLink>
                <div class="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                    <ul>
                        <li>
                            <a href="page-account.html"><i class="fi fi-rs-user mr-10"></i>My Account</a>
                        </li>
                        <li>
                            <a href="page-account.html"><i class="fi fi-rs-location-alt mr-10"></i>Order Tracking</a>
                        </li>
                        <li>
                            <a href="page-account.html"><i class="fi fi-rs-label mr-10"></i>My Voucher</a>
                        </li>
                        <li>
                            <a href="shop-wishlist.html"><i class="fi fi-rs-heart mr-10"></i>My Wishlist</a>
                        </li>
                        <li>
                            <a href="page-account.html"><i class="fi fi-rs-settings-sliders mr-10"></i>Setting</a>
                        </li>
                        <li>
                            <Link to="/" onClick={logoutOnClick}><i class="fi fi-rs-sign-out mr-10"></i>Sign out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } else {
        buttons = (
            <div className="header-action-icon-2">
                <Link to="/login"><span class="lable"><i class="fi fi-rs-user mr-5"></i> Login</span></Link>
                <Link to="/register"><span class="lable"><i class="fi fi-rs-user mr-5"></i> Register</span></Link>
            </div>
        )
    }





    return (
        <Fragment>
            <header class="header-area header-style-1 header-style-5 header-height-2">
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <Container>
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link to="/"><img src={HeaderImage.Logo} alt="logo" /></Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Form action="#">
                                        <Form.Select class="select-active">
                                            <option>All Categories</option>
                                            <option>Milks and Dairies</option>
                                            <option>Wines & Alcohol</option>
                                            <option>Clothing & Beauty</option>
                                            <option>Pet Foods & Toy</option>
                                            <option>Fast food</option>
                                            <option>Baking material</option>
                                            <option>Vegetables</option>
                                            <option>Fresh Seafood</option>
                                            <option>Noodles & Rice</option>
                                            <option>Ice cream</option>
                                        </Form.Select>
                                        <input type="text" placeholder="Search for items..." />
                                    </Form>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="search-location location-customize">
                                            <form action="#" data-select2-id="30">
                                                <select class="select-active select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">

                                                    <option data-select2-id="6">Your Location</option>
                                                    <option data-select2-id="16">Alabama</option>
                                                    <option data-select2-id="17">Alaska</option>
                                                    <option data-select2-id="18">Arizona</option>
                                                    <option data-select2-id="19">Delaware</option>
                                                    <option data-select2-id="20">Florida</option>
                                                    <option data-select2-id="21">Georgia</option>
                                                    <option data-select2-id="22">Hawaii</option>
                                                    <option data-select2-id="23">Indiana</option>
                                                    <option data-select2-id="24">Maryland</option>
                                                    <option data-select2-id="25">Nevada</option>
                                                    <option data-select2-id="26">New Jersey</option>
                                                    <option data-select2-id="27">New Mexico</option>
                                                    <option data-select2-id="28">New York</option>
                                                </select>
                                            </form>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <a href="shop-compare.html">
                                                <img className="svgInject" alt="Nest" src={HeaderImage.IconCamparison} />
                                                <span className="pro-count blue">3</span>
                                            </a>
                                            <a href="shop-compare.html"><span className="lable ml-0">Compare</span></a>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <a href="shop-wishlist.html">
                                                <img className="svgInject" alt="Nest" src={HeaderImage.IconHeart} />
                                                <span className="pro-count blue">6</span>
                                            </a>
                                            <NavLink to="/favourite"><span class="lable">Wishlist</span></NavLink>
                                        </div>
                                        <div class="header-action-icon-2">
                                            <a class="mini-cart-icon" href="shop-cart.html">
                                                <img alt="Nest" src={HeaderImage.IconCart} />
                                                <span class="pro-count blue">2</span>
                                            </a>
                                            <Link to="/cart"><span class="lable">Cart</span></Link>
                                            <div class="cart-dropdown-wrap cart-dropdown-hm2">
                                                <ul>
                                                    <li>
                                                        <div class="shopping-cart-img">
                                                            <a href="shop-product-right.html"><img alt="Nest" src={HeaderImage.IconShopThumb} /></a>
                                                        </div>
                                                        <div class="shopping-cart-title">
                                                            <h4><a href="shop-product-right.html">Daisy Casual Bag</a></h4>
                                                            <h4><span>1 × </span>$800.00</h4>
                                                        </div>
                                                        <div class="shopping-cart-delete">
                                                            <a href="#"><i class="fi-rs-cross-small"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="shopping-cart-img">
                                                            <a href="shop-product-right.html"><img alt="Nest" src={HeaderImage.IconShopThumb} /></a>
                                                        </div>
                                                        <div class="shopping-cart-title">
                                                            <h4><a href="shop-product-right.html">Corduroy Shirts</a></h4>
                                                            <h4><span>1 × </span>$3200.00</h4>
                                                        </div>
                                                        <div class="shopping-cart-delete">
                                                            <a href="#"><i class="fi-rs-cross-small"></i></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div class="shopping-cart-footer">
                                                    <div class="shopping-cart-total">
                                                        <h4>Total <span>$4000.00</span></h4>
                                                    </div>
                                                    <div class="shopping-cart-button">
                                                        <a href="shop-cart.html" class="outline">View cart</a>
                                                        <a href="shop-checkout.html">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {buttons}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </Fragment>
    )
}

export default HeaderMainDesktop