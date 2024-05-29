import { Card } from 'antd';
import VideoComponent from '../../Components/Video/Video';
import './Home.css';
import ProductList from '../../Components/ProductList/ProductList';
import All from'../../Components/All/All'

function Home() {
//   const [categories, setCategories] = useState([]);
  
  return (
   <> 
   {/* <Slider/> */}
   <VideoComponent />
   <Card/>
<All/>
   <div class="container">
			<div class="provide_in2 flex">
				<div class="provide_left2 flex">
					<div class="provide_l1">
						<img src="https://i.pinimg.com/474x/47/92/a0/4792a099f73dc93f710cc73bca9246e9.jpg" className='fast_fast'></img>
					</div>
					<div class="provide_l2">
				<img src="https://i.pinimg.com/474x/2a/95/c7/2a95c74b43c71987862d39d724feb1d1.jpg" className='fast'></img>

				<img src="https://i.pinimg.com/474x/7b/70/11/7b7011db29009cd34c6e7f45742e4684.jpg" className='fast'></img>
					</div>
				</div>


				<div class="provide_right2">
					<h2 class="sec_sub-tit">Our cosmetics are the best in City</h2>
					<p class="ff_txt">Our visual designer lets you quickly and of drag a down your way to customapps for
						both keep desktop. </p>
					<div class="icons2">
						<a href="menu html">Delivery with in 30 minutes</a>
						<a href="menu html">Best cosmetics & Prices</a>
						<a href="menu html">Online Services Available</a>
					</div>
				</div>
			</div>
		</div>
		
    <div className="container">
			<div className="plus_tit">
        < p className='zag'>shop you way</p>
				<p className="sec_tit_home">Why choose us
				</p>
			</div>
			<div className="advan_cards flex">
				<div className="advan_card advan_card_1">
					<img src="https://img.icons8.com/?size=100&id=22128&format=png&color=000000" alt="" className="advan_ic" />
          <h3 className='delivery_tit'>
Fast Shipping</h3>
					<p className="advan_text">Experience fast and efficient shipping, so that you can enjoy your new products as soon as possible.</p>
				</div>

				<div className="advan_card advan_card_2">
				<img src="https://img.icons8.com/?size=100&id=19100&format=png&color=000000" alt="" className="advan_ic" />
        
          <h3 className='delivery_tit'>Free Samples</h3>
					<p className="advan_text">Enjoy the convenience of free samples with every order to try out our new products and find your perfect match</p>
				</div>


				<div className="advan_card advan_card_3">
				<img src="https://img.icons8.com/?size=100&id=f7Dk46mgoJZf&format=png&color=000000" alt="" className="advan_ic" />
          <h3 className='delivery_tit'>
Secure Payment</h3>
					<p className="advan_text">Our website is secured with the latest technology to ensure that your personal and payment information is protected during checkout.</p>
				</div>


				<div className="advan_card advan_card_4">
				<img src="https://img.icons8.com/?size=100&id=22128&format=png&color=000000" alt="" className="advan_ic" />
          <h3 className='delivery_tit'>Easy Returns</h3>
					<p className="advan_text">Our easy and hassle-free return policy ensures that if you're not completely satisfied with your purchase, you can send it back for a full refund.</p>
				</div>
			</div>
		</div>
    
   </>
  );
}

export default Home;
