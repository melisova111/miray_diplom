import './Menu.css';
import {Link} from 'react-router-dom'

function Menu() {
  return (

        <nav className='menu flex' >
      
          <ul className='menu flex'>
            
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
              <Link to="./categorylist">CategoryList</Link>
            </li>
          </ul>
        
     
      </nav>

  );
}

export default Menu;