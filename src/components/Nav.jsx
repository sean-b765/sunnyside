import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Nav = () => {
	const [open, setOpen] = useState(false)

	return (
		<header className="header">
			<img
				data-aos="zoom-in"
				data-aos-duration="500"
				data-aos-delay="1000"
				src="./images/logo.svg"
				alt="sunnyside"
				className="header__logo"
			/>
			<nav>
				<ul>
					<li data-aos="fade-in" data-aos-delay="1250">
						<a href="#">About</a>
					</li>
					<li data-aos="fade-in" data-aos-delay="1500">
						<a href="#">Services</a>
					</li>
					<li data-aos="fade-in" data-aos-delay="1750">
						<a href="#">Projects</a>
					</li>
				</ul>

				{/* Desktop contact button */}
				<button
					className="btn btn-contact"
					data-aos="fade-in"
					data-aos-delay="2000"
				>
					CONTACT
				</button>

				{/* Mobile menu button */}
				<button className="btn btn-menu" onClick={() => setOpen(!open)}>
					<img src="./images/icon-hamburger.svg" alt="Open mobile menu" />
				</button>

				<section
					className={open ? 'menu-mobile open' : 'menu-mobile'}
					role="menu"
				>
					<ul>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
					</ul>

					<button className="btn btn-contact--mobile">CONTACT</button>
				</section>
			</nav>
		</header>
	)
}

export default Nav
