import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink" >
      <Link to="/cart" >
      
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-weight-229-458409.png" alt=""className="cart_ic" />  
        <span className="cart_num"><b>{total}</b></span>
      </Link>
    </div>
  )
}