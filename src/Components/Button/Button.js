import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
  return (
    <button to={props.path} type='submit'className="Btn">{props.children}</button>
  );
}

export default Button;