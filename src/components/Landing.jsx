import React from 'react'

const Landing = () => {
	return (
		<section className="landing">
			<img
				src="./images/desktop/image-header.jpg"
				className="landing__background"
				alt="Sunnyside"
			/>

			<section className="landing__content">
				<h1
					className="landing__content__title"
					data-aos="fade-down"
					data-aos-duration="1500"
				>
					WE ARE CREATIVES
				</h1>
				<img
					data-aos="fade-in"
					data-aos-duration="1000"
					data-aos-delay="750"
					className="landing__content__arrow"
					src="./images/icon-arrow-down.svg"
					alt="Scroll Below"
					aria-hidden="true"
				/>
			</section>
		</section>
	)
}

export default Landing
