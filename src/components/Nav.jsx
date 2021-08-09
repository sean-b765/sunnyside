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
		<div className="header" role="banner">
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
			<nav role="navigation">
				<ul>
					<motion.li
						initial={initial}
						animate={animate}
						transition={{ ...transition, delay: 0.5 }}
					>
						About
					</motion.li>
					<motion.li
						initial={initial}
						animate={animate}
						transition={{ ...transition, delay: 0.75 }}
					>
						Services
					</motion.li>
					<motion.li
						initial={initial}
						animate={animate}
						transition={{ ...transition, delay: 1 }}
					>
						Projects
					</motion.li>
				</ul>

				<motion.button
					initial={initial}
					animate={animate}
					transition={{ ...transition, delay: 1.25 }}
					className="btn btn-contact"
					role="button"
				>
					CONTACT
				</motion.button>

				<motion.button
					initial={initial}
					animate={animate}
					transition={{ ...transition, delay: 0.25 }}
					className="btn btn-menu"
					role="button"
					onClick={() => setOpen(!open)}
				>
					<img src="./images/icon-hamburger.svg" alt="Open mobile menu" />
				</motion.button>

				<div className={open ? 'menu-mobile open' : 'menu-mobile'} role="menu">
					<ul>
						<motion.li
							initial={initial}
							animate={animate}
							transition={{ ...transition, delay: 0.1 }}
						>
							About
						</motion.li>
						<motion.li
							initial={initial}
							animate={animate}
							transition={{ ...transition, delay: 0.2 }}
						>
							Services
						</motion.li>
						<motion.li
							initial={initial}
							animate={animate}
							transition={{ ...transition, delay: 0.3 }}
						>
							Projects
						</motion.li>
						<motion.button
							initial={initial}
							animate={animate}
							transition={{ ...transition, delay: 0.4 }}
							className="btn btn-contact--mobile"
							role="button"
						>
							CONTACT
						</motion.button>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Nav
