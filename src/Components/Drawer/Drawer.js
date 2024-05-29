
import Menu from "../Menu/Menu";
import "./Drawer.css";

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <div className="Logo-Nav">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Drawer;