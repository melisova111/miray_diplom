import "./Header.css";
// import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";

export default function HeaderSection() {

  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          {/* <Logo /> */}
          <a href="/">
          <p className="logo_name">MirAy</p>
          </a>
          <Menu />
        
          <div className="buttons flex">
            <Auth />
            <CartLink />
          </div>
        </div>
      </div>
    </header>
  )
  
}