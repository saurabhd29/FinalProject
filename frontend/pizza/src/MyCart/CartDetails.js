import React from 'react'

import { Link } from "react-router-dom";

const checkoutHandler = () => {
    
  };
export default function CartDetails() {
  return (
    <>
    <div>
        <section id="aa-catg-head-banner">
          <img src="/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
          <div className="aa-catg-head-banner-area">
            <div className="container">
              <div className="aa-catg-head-banner-content">
                <h2>Cart</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">Cart Details</li>
                </ol>
              </div>
            </div>
          </div>
        </section>      
    </div>
    <section id="cart-view">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-view-area">
                <div className="cart-view-table">
                  <form action>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Pizza image</th>
                            <th>Pizza name</th>
                            <th>Quantity</th>
                            <th>Price</th>

                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                        </tbody>
                      </table>
                    </div>
                  </form>
                  {/* Cart Total view */}
                  <div className="cart-view-total">
                    <h4>Cart Totals</h4>
                    <table className="aa-totals-table">
                      <tbody>
                        
                      </tbody>
                    </table>
                    <a
                      href="#"
                      className="aa-cart-view-btn"
                      
                    >
                      Proced to Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
</>
  )
}
