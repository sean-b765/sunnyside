import { motion } from 'framer-motion'
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
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 0.5 } }}
					className="landing__content__title"
				>
					WE ARE CREATIVES
				</motion.h1>
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 1 } }}
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
