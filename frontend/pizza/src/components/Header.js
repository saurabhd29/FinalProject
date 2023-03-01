import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Header() {
    

  
  
  
  
    return (
        <header id="aa-header">
        {/* start header top  */}
        <div className="aa-header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-top-area">
                  {/* start header top left */}
                  <div className="aa-header-top-left">
                    {/* start language */}
                    <div className="aa-language">
                      
                    </div>
                    {/* / language */}
                    {/* start currency */}
                    
                    {/* / currency */}
                    {/* start cellphone */}
                    <div className="cellphone hidden-xs">
                      <p>
                        <span className="fa fa-phone" />
                        +91-90112-46750 | Sujit Shinde 
                      </p>
                     
                    </div>
                    {/* / cellphone */}
                  </div>
                  {/* / header top left */}
                  <div className="aa-header-top-right">
                    <ul className="aa-head-top-nav-right">
                      <li >
                        <Link to="/MyOrders">My Orders</Link>
                      </li>
                      <li >
                        <Link to="/UserProfile">My Account</Link>
                      </li>
                      
                      <li className="hidden-xs">
                        <Link to="/MyCart">My Cart</Link>
                      </li>
                      <li className="hidden-xs">
                        <Link to="/Checkout">Checkout</Link>
                      </li>
                      <li>
                        <a href data-toggle="modal" data-target="#login-modal">
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / header top  */}
        {/* start header bottom  */}
        <div className="aa-header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-bottom-area">
                  {/* logo  */}
                  <div className="aa-logo">
                    {/* Text based logo */}
                    <a href="/">
                      <span className="fa fa-shopping-cart" />
                      <p>
                        Pizza<strong>Shop</strong>
                        <span>Get your pizza on Door </span>
                      </p>
                    </a>
                    {/* img based logo */}
                    {/* <a href="index.html"><img src="img/logo.jpg" alt="logo img"></a> */}
                  </div>
                  {/* / logo  */}
                  {/* cart box */}
                  <div className="aa-cartbox">
                    <Link to="/cart">
                      <a className="aa-cart-link" href="#">
                        <span className="fa fa-shopping-basket" />
                        <span className="aa-cart-title">SHOPPING CART</span>
                        <span className="aa-cart-notify">0</span>
                      </a>
                    </Link>
                  </div>
                  {/* / cart box */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / header bottom  */}
      </header>
  )
}

