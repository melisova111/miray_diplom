
import CategoryList from '../CategoryList/CategoryList';
import './Menu.css';
import {Link} from 'react-router-dom'
export default function Menu() {
  let menuBtn = document.querySelectorAll(".NavItem a");
  let menu = document.querySelector(".Drawer");
  menuBtn.forEach((el) => {
    el.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  });
  return (
<header>
        <nav className='menu' >

          <ul className='flex'>      
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="./about">Shop all</Link>
            </li>
            <li>
              <Link to="./delivery">Delivery</Link>
            </li>
            <li>
              <Link to="./contact">Contact</Link>
            </li>
            {/* <li>
              <Link to="./productpp">Product </Link>
            </li> */}
            <CategoryList />
         
            </ul>
            </nav>
</header>
  );
}
