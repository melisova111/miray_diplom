import './Delivery.css';

function Delivery() {
	return (
		<>
			<h1>Delivery</h1>
			

			<marquee behavior="scroll" direction="left" scrollamount="15">
			<p class="del_tit">Dear our customers, delivery is provided by the Courier Service.</p>
			</marquee>
			

			<p class="del_txt">Delivery within the city of Bishkek starts from 200 som, depending on the customer's address. Additional charges may apply for delivery to remote areas according to the courier service's tariff.</p>

			<p class="del_txt">For orders totaling 5000 som and above, delivery within the city of Bishkek is free, but additional charges may apply for delivery to remote areas due to distance.</p>

			<p class="del_txt">Delivery of certificates of any amount is always chargeable.</p>

			<p class="del_txt">Delivery to regions, regardless of the order amount, incurs a charge based on the courier service's tariff (from 250 som to 350 som). Delivery to regions is carried out after full payment for the order. <b> Orders are delivered within 24 to 48 hours.</b></p>

			<marquee behavior="scroll" direction="left" scrollamount="15">
				<p class="del_tit">On promotional days, delivery is chargeable regardless of the order amount.</p>
			</marquee>


			<p class="del_txt">Orders placed before 13:00 are delivered on the same day. If the order is placed later, delivery on the same day or the next day is possible by agreement with the customer (you can write all your delivery preferences in the comments).</p>

			<p class="del_txt">Orders for delivery are accepted until 17:30. Delivery is carried out from 11:00 to 20:00.</p>

			<p class="del_txt"> <b>Payment methods:</b> <br />
				Cash on delivery<br />
				Electronic payments through ELSOM 0500365555<br />
				Transfer to OptimaBank and DemirBank bank cards<br />
				Transfers to M-Bank</p>

		</>
	);
}

export default Delivery;
