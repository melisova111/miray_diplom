import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="contacts-container container">
      <h2 className="contacts-heading">Get in Touch</h2>
      <div className="contact-details">
        <p className='contact-label-child'>
          <strong className="contact-label">Address:</strong> Kyrgyzstan, Bishkek
boulevard Erkindik 14
        </p>
        <p className='contact-label-child'>
          <strong className="contact-label">Phone:</strong> +996500365555
        </p>
        <p className='contact-label-child'>
          <strong className="contact-label">Email:</strong> info@hellobeauty.kg
        </p>
        <p className='contact-label-child'>
          <strong className="contact-label">Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
        </p>
      </div>
      <p className="contact-message">
	  May you radiate beauty inside and out, and may MirAy be your trusted ally on this journey. Here's to embracing your unique charm and finding joy in every moment.
      </p>

	  <div className="network-icons">
        <Link
          to="https://www.instagram.com/aytunuk.melisova/"
          target='_blank'
          onClick={scrollToTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="network-icon" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </Link>
        
        <Link
          to="https://wa.me/0703720077."
          target='_blank'
          onClick={scrollToTop}
        >
          <img src="https://toppng.com/uploads/preview/whatsapp-svg-png-icon-free-download-whatsapp-logo-vector-black-11562868892nb2zdc2lyp.png" alt="" className="network-icon"/>
        </Link>

        <Link
          to="#"
          target='_blank'
          onClick={scrollToTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="network-icon" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </Link>

        <Link
          to="https://wa.me/0703720077."
          target='_blank'
          onClick={scrollToTop}
        >
          <img src="https://www.svgrepo.com/show/333535/facebook-circle.svg" alt="" className="network-icon"/>
        </Link>

        <Link
          to="https://wa.me/0703720077."
          target='_blank'
          onClick={scrollToTop}
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmXkTp-w0_kZvuxzezLYDXFWd4jzSolqyY6slaHfDZSbSHEUhRKnk58fO1vjiP3Ye1x8&usqp=CAU" alt="" className="network-icon"/>
        </Link>
      </div>

	  <div style={{ position: 'elative', overflow: 'hidden' }}>
  <a href="https://yandex.ru/maps/10309/bishkek/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Бишкек</a>
  <a href="https://yandex.ru/maps/10309/bishkek/house/Y00YcAdlSEQGQFpofXR3dn5nbA==/?ll=74.605366%2C42.867282&utm_medium=mapframe&utm_source=maps&z=17.62" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}></a>
  <iframe src="https://yandex.ru/map-widget/v1/?ll=74.605366%2C42.867282&mode=whatshere&whatshere%5Bpoint%5D=74.605014%2C42.867216&whatshere%5Bzoom%5D=17&z=17.62" width="1260" height="400" frameBorder="1" allowFullScreen="true" style={{ position: 'elative' }}></iframe>
</div>

    </div>
  );
};

export default Contact;
