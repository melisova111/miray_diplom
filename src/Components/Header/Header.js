import "./Header.css";
// import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";

import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";

export default function HeaderSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">

          <Drawer open={drawerOpen} toggle={toggleDrawer} />

          <NavToggle callback={toggleDrawer} />
          {/* <Logo /> */}
          <a href="/">
            <p className="logo_name">MirAy</p>
          </a>
          <Search />
          <div className="buttons flex">
            <Auth />
            <CartLink />
          </div>
          <Menu />
        </div>
      </div>
    </header>
  )

}