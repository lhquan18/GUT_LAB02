import React, { useContext } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "contexts/cart";
import { CommonDispatchContext, setSearchKeyword } from "contexts/common";
import CartPreview from "components/CartPreview";

const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  return (
    <header>
      <div className="container">
        <div className="brand">
          <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/dyelht5de/image/upload/v1638587004/Fresh-vegetables-logo-design-vector-05_v8a78f.jpg"
              alt="Veggy Brand Logo"
            />
          </Link>
        </div>

        <div className="search">
          <a
            className="mobile-search"
            href="#"
        
          >
            <img
              src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
              alt="search"
            />
          </a>
          <form action="#" method="get" className="search-form">
          
            <input
              type="search"
              placeholder="Tìm kiếm sản phẩm"
              className="search-keyword"
              onChange={handleSearchInput}
            />
            <button
              className="search-button"
              type="submit"
  
            />
          </form>
        </div>

        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>Giỏ hàng</td>
                  <td>:</td>
                  <td>
                    <strong>{cartQuantity} SP</strong>
                  </td>
                </tr>
                <tr>
                  <td>Tổng tiền</td>
                  <td>:</td>
                  <td>
                    <strong>{cartTotal} ₫</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className="cart-icon" href="#" onClick={handleCartButton}>
            <img
              className={props.cartBounce ? "tada" : " "}
              src="https://res.cloudinary.com/dyelht5de/image/upload/v1638589158/260709340_2305346016266859_1846160824636280255_n_ciupop.png"
              alt="Cart"
            />
            {cartQuantity ? (
              <span className="cart-count">{cartQuantity}</span>
            ) : (
              ""
            )}
          </a>
          <CartPreview />
        </div>
      </div>
    </header>
  );
};
export default Header;
