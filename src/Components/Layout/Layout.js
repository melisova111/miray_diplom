import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  
  return (
    <>
      <Header />
      <div className="container">
        <div className="Layout flex">
          {/* <aside>
            <CategoryList />
          </aside> */}
          <main>{props.children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}