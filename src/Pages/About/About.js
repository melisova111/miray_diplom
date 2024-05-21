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
			<FAQ></FAQ>
		</>
	);
}

export default About;
