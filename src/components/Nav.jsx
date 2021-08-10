import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Nav = () => {
	const [open, setOpen] = useState(false)

	const initial = {
		opacity: 0,
	}
	const animate = {
		opacity: 1,
	}
	const transition = {
		duration: 0.5,
	}

	return (
		<header className="header">
			<motion.img
				initial={{ opacity: 0, scale: 0 }}
				animate={{
					opacity: 1,
					scale: 1,
					transition: { delay: 0.25, duration: 0.5 },
				}}
				src="./images/logo.svg"
				alt="sunnyside"
				className="header__logo"
			/>
			<nav>
				<ul>
					<motion.li
						initial={initial}
						animate={animate}
						transition={{ ...transition, delay: 0.5 }}
					>
						<a href="#">About</a>
					</motion.li>
					<motion.li
						initial={initial}
						animate={animate}
						transition={{ ...transition, delay: 0.75 }}
					>
						<a href="#">Services</a>
					</motion.li>
					<motion.li
						initial={initial}
						animate={animate}
						transition={{ ...transition, delay: 1 }}
					>
						<a href="#">Projects</a>
					</motion.li>
				</ul>

				{/* Desktop contact button */}
				<motion.button
					initial={initial}
					animate={animate}
					transition={{ ...transition, delay: 1.25 }}
					className="btn btn-contact"
				>
					CONTACT
				</motion.button>

				{/* Mobile menu button */}
				<motion.button
					initial={initial}
					animate={animate}
					transition={{ ...transition, delay: 0.25 }}
					className="btn btn-menu"
					onClick={() => setOpen(!open)}
				>
					<img src="./images/icon-hamburger.svg" alt="Open mobile menu" />
				</motion.button>

				<section
					className={open ? 'menu-mobile open' : 'menu-mobile'}
					role="menu"
				>
					<ul>
						<motion.li
							initial={initial}
							animate={animate}
							transition={{ ...transition, delay: 0.1 }}
						>
							<a href="#">About</a>
						</motion.li>
						<motion.li
							initial={initial}
							animate={animate}
							transition={{ ...transition, delay: 0.2 }}
						>
							<a href="#">Services</a>
						</motion.li>
						<motion.li
							initial={initial}
							animate={animate}
							transition={{ ...transition, delay: 0.3 }}
						>
							<a href="#">Projects</a>
						</motion.li>
					</ul>

					<motion.button
						initial={initial}
						animate={animate}
						transition={{ ...transition, delay: 0.4 }}
						className="btn btn-contact--mobile"
					>
						CONTACT
					</motion.button>
				</section>
			</nav>
		</header>
	)
}

export default Nav
