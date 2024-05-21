import { Card } from 'antd';
import VideoComponent from '../../Components/Video/Video';
import './Home.css';




function Home() {
  return (
   <> 
   <VideoComponent />
   <Card/>
    <div className="container">
			<div className="plus_tit">
        < p className='zag'>shop you way</p>
				<h2 className="sec_tit">Why choose us
				</h2>
			</div>
			<div className="advan_cards flex">
				<div className="advan_card advan_card_1">
					<i className="advan_ic"></i>
          <h3 className='delivery_tit'>
Fast Shipping</h3>
					<p className="advan_text">Experience fast and efficient shipping, so that you can enjoy your new products as soon as possible.</p>
				</div>

				<div className="advan_card advan_card_2">
					<i className="advan_ic"></i>
        
          <h3 className='delivery_tit'>Free Samples</h3>
					<p className="advan_text">Enjoy the convenience of free samples with every order to try out our new products and find your perfect match</p>
				</div>


				<div className="advan_card advan_card_3">
					<i className="advan_ic"></i>
          <h3 className='delivery_tit'>
Secure Payment</h3>
					<p className="advan_text">Our website is secured with the latest technology to ensure that your personal and payment information is protected during checkout.</p>
				</div>


				<div className="advan_card advan_card_4">
					<i className="advan_ic"></i>
          <h3 className='delivery_tit'>Easy Returns</h3>
					<p className="advan_text">Our easy and hassle-free return policy ensures that if you're not completely satisfied with your purchase, you can send it back for a full refund.</p>
				</div>
			</div>
		</div>
    
   </>
  );
}

export default Home;
