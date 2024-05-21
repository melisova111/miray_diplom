import './Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_big flex">

            <div className="footer_left">
              <div className="footer_tit">MirAy</div>
              <div className="footer_icons flex">
                <div className="footer_ic"></div>
                <div className="footer_ic"></div>
                <div className="footer_ic"></div>
                <div className="footer_ic"></div>
              </div>



            </div>

            <div className="footer_right flex">
              <div className="footer_nav">
                <span className="footer_txt"> Categories</span>
                <ul className="footer_list">
                  <li><a href="http://localhost:3001/categories/scincare">Skincare </a></li>
                  <li><a href="http://localhost:3001/categories/decorative">Lipstick</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a href="http://localhost:3001/categories/decorative">Makeup</a></li>
                </ul>
              </div>

              <div className="footer_nav">
                <span className="footer_txt"> Recources </span>
                <ul className="footer_list">
                  <li><a href="./contact">Contact</a></li>
                  <li><a href="./about">Help</a></li>
                </ul>
              </div>
            </div>

          </div>

          <p className="footer_copy">Copyright © 2024 Hashtag Developer. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
