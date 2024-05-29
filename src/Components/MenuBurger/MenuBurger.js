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
          <NavLink to="./about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="./contact">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="./delivery">Delivery</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="http://localhost:3002/categories/skincare">Scincare</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="http://localhost:3002/categories/MakeUp">MakeUp</NavLink>
        </li>
      </ul>
    </nav>
  );
}