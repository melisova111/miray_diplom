
import MenuBurger from "../MenuBurger/MenuBurger";
import "./Drawer.css";

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <div className="Logo-Nav">
          <MenuBurger />
        </div>
      </div>
    </div>
  );
}

export default Drawer;