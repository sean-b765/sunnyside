import { motion } from 'framer-motion'
import React from 'react'

const Landing = () => {
	return (
		<div className="container__landing" role="group">
			<img
				src="./images/desktop/image-header.jpg"
				className="container__landing__background"
				alt="Sunnyside background image"
			/>

			<div className="container__landing__content">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 0.5 } }}
					className="container__landing__content__title"
				>
					WE ARE CREATIVES
				</motion.h1>
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 1 } }}
					className="container__landing__content__arrow"
					src="./images/icon-arrow-down.svg"
				/>
			</div>
		</div>
	)
}

export default Landing
