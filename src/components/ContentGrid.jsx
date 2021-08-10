import { motion } from 'framer-motion'
import React from 'react'

const ContentGrid = () => {
	return (
		<section className="grid">
			<div className="grid__split">
				<div className="grid__split__content">
					<header>
						<h2 className="title">Transform your brand</h2>
					</header>
					<div className="text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
						obcaecati possimus similique consequatur, repudiandae quod tempore
						eius porro numquam rerum.
					</div>
					<footer>
						<a href="#" className="action action-yellow">
							LEARN MORE
						</a>
					</footer>
				</div>
				<div className="grid__split__image">
					<img
						src="./images/desktop/image-transform.jpg"
						alt="Image of an egg"
					/>
				</div>
			</div>

			<div className="grid__split">
				<div className="grid__split__image">
					<img
						src="./images/desktop/image-stand-out.jpg"
						alt="Image of a glass"
					/>
				</div>
				<div className="grid__split__content">
					<header>
						<h2 className="title">Stand out to the right audience</h2>
					</header>
					<div className="text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
						obcaecati possimus similique consequatur, repudiandae quod tempore
						eius porro numquam rerum.
					</div>
					<footer>
						<a href="#" className="action action-red">
							LEARN MORE
						</a>
					</footer>
				</div>
			</div>

			<div className="grid__split">
				<div className="grid__split__image--background grid__split__image--graphic-design">
					<img
						src="./images/desktop/image-graphic-design.jpg"
						alt="Image of cherries"
					/>
					<div className="content">
						<header>
							<h3 className="title">Graphic Design</h3>
						</header>
						<div className="text">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
							quas vero minima ratione perspiciatis dignissimos laborum quis
							quaerat alias adipisci?
						</div>
					</div>
				</div>
				<div className="grid__split__image--background grid__split__image--photography">
					<img
						src="./images/desktop/image-photography.jpg"
						alt="Image of mandarin"
					/>
					<div className="content">
						<header>
							<h3 className="title">Photography</h3>
						</header>
						<div className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur assumenda explicabo, repellat, pariatur et velit
							distinctio, quas quae veniam ex aliquam ratione iste vel quo.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentGrid
