import React from 'react'
import './Section3.css'
import Section3_card_img1 from '../../../img/Section3_card-img1.svg'
import Section3_card_img2 from '../../../img/Section3_card-img2.svg'
import Section3_card_img3 from '../../../img/Section3_card-img3.svg'

const Section3 = () => {
  return (
	<div className='Section3'>
		<div className="container">
			<div className="container">
				<p>Category</p>
				<h1>We Offer Best Service</h1>
				<div className="row">
					<div className="col-4">
						<img src={Section3_card_img1} alt="Section3-card-img" />
						<h3>Information & Education</h3>
						<p>Built Wicket longer admire do barton vanity itself do in it.</p>
					</div>
					<div className="col-4">
						<img src={Section3_card_img2} alt="Section3-card-img" />
						<h3>Course & Training</h3>
						<p>Built Wicket longer admire do barton vanity itself do in it.</p>
					</div>
					<div className="col-4">
						<img src={Section3_card_img3} alt="Section3-card-img" />
						<h3>Waste Recycling</h3>
						<p>Built Wicket longer admire do barton vanity itself do in it.</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
  )
}

export default Section3