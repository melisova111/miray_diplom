import './About.css';
import FAQ from '../../Components/FAQ/FAQ'

function About() {
	return (
		<>

			<div className="container">
				<div className="about_in flex">
					<div className="about_left">
						<img src="https://i.pinimg.com/564x/fb/4b/5f/fb4b5f7a63d8293335ba0cee69e76094.jpg" alt="" className='about_img' />
					</div>
					<div className="about_right">
						<h2 className="about_tit">Welcome to our cosmetic world</h2>
						<p className="about_txt">
							Welcome to MirAy Cosmetics Store!

							MirAy is the place where your boldest cosmetic dreams come true. Our store offers a wide range of cosmetic products designed to enhance your natural beauty and express your individuality. <br />

							We provide high-quality cosmetic products that combine innovative formulas and the latest beauty trends. From vibrant pigments to subtle shades, from skincare essentials to makeup products, we have everything you need to create your perfect look. <br />

							Our team of beauty experts is always ready to help you choose products that suit your needs and desires. We strive to create a pleasant atmosphere and a cozy space where every customer can feel special and inspired.
							<br />
							Whether you are a professional makeup artist or just love experimenting with makeup, at MirAy, you will surely find something special for yourself. Come visit us and let's create a world of beauty together, where everyone can feel confident and beautiful!
						</p>

					</div>
				</div>
			</div>

			<div class="container">
				<h2 class="sec_tit">What Our Customers Say</h2>
				<div class="our_cards flex">
					<div class="our_card">
						<div>
							<h4 class="our_tit">
								“The best restaurant”
							</h4>
							<p class="our_txt">
								Last night, we dined at place and were simply blown away. From the moment we stepped in, we were
								enveloped in an inviting atmosphere and greeted with warm smiles

							</p>
						</div>
						<div class="our_customer flex">
							<div class="our_img">
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYNWyKBbun6mL-S4HTSJ2JyH9HdHRI5PITkJ-lXlBbQ&s" alt="" />
							</div>
							<div class="our_info">
								<span class="our_name"> Sophire Robson</span>
								<span class="our_address">Los Angeles, CA</span>
							</div>
						</div>
					</div>

					<div class="our_card">
						<div>
							<h4 class="our_tit">“Simply delicious”
							</h4>
							<p class="our_txt">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed,
								making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully
								presented.
							</p>
						</div>
						<div class="our_customer flex">
							<div class="our_img">
								<img src="https://people.com/thmb/IfjWMKhodGNtpx11DvN1M0M3r1c=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(349x0:351x2)/clarissa-cruz-headshot-people-f4197aa2a3b44efb90f907198d950c8d.jpg" alt="" />
							</div>
							<div class="our_info">
								<span class="our_name"> <b>Matt Cannon</b></span>
								<span class="our_address">San Diego, CA</span>
							</div>
						</div>
					</div>

					<div class="our_card">
						<div>
							<h4 class="our_tit">“One of a kind restaurant”
							</h4>
							<p class="our_txt">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed,
								making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully
								presented.
							</p>
						</div>
						<div class="our_customer flex">
							<div class="our_img">
								<img src="https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg" alt="" />
							</div>
							<div class="our_info">
								<span class="our_name"> <b>Andy Smith</b></span>
								<span class="our_address">San Francisco, CA</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FAQ></FAQ>
		</>
	);
}

export default About;
