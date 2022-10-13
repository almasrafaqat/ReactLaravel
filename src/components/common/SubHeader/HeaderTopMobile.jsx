import React, { Fragment } from 'react'
import { HeaderImage } from '../../ImagesImports';



const HeaderTopMobile = (props) => {

  return (
    <Fragment>
     
      <div className="header-action-right d-block d-lg-none">
        <div className="header-action-2">
          <div className="header-action-icon-2">
            <a href="shop-wishlist.html">
              <img alt="Nest" src={HeaderImage.IconHeart} />
              <span className="pro-count white">4</span>
            </a>
          </div>
          <div className="header-action-icon-2">
            <a className="mini-cart-icon" href="#">
              <img alt="Nest" src={HeaderImage.IconCart} />
              <span className="pro-count white">2</span>
            </a>
            <div className="cart-dropdown-wrap cart-dropdown-hm2">
              <ul>
                <li>
                  <div className="shopping-cart-img">
                    <a href="shop-product-right.html">
                      <img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" />
                    </a>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <a href="shop-product-right.html">Plain Striola Shirts</a>
                    </h4>
                    <h3>
                      <span>1 × </span>$800.00
                    </h3>
                  </div>
                  <div className="shopping-cart-delete">
                    <a href="#">
                      <i className="fi-rs-cross-small" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="shopping-cart-img">
                    <a href="shop-product-right.html">
                      <img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" />
                    </a>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <a href="shop-product-right.html">Macbook Pro 2022</a>
                    </h4>
                    <h3>
                      <span>1 × </span>$3500.00
                    </h3>
                  </div>
                  <div className="shopping-cart-delete">
                    <a href="#">
                      <i className="fi-rs-cross-small" />
                    </a>
                  </div>
                </li>
              </ul>
              <div className="shopping-cart-footer">
                <div className="shopping-cart-total">
                  <h4>
                    Total <span>$383.00</span>
                  </h4>
                </div>
                <div className="shopping-cart-button">
                  <a href="shop-cart.html">View cart</a>
                  <a href="shop-checkout.html">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HeaderTopMobile