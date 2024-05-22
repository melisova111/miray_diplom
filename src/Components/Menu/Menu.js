import CategoryList from '../CategoryList/CategoryList';
import './Menu.css';
import {Link} from 'react-router-dom'
// import Product from '../Page/Product/Product';
function Menu() {
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
            <li>
              <Link to="./product">Product </Link>
            </li>
         
            </ul>


            </nav>
</header>
           
        
     

  );
}

export default Menu;