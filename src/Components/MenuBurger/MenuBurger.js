import { NavLink } from "react-router-dom";
import "./MenuBurger.css";

export default function MenuBurger() {
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  );
}