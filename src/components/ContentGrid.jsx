import { motion } from 'framer-motion'
import React from 'react'

const ContentGrid = () => {
	return (
		<section className="container__grid" role="group">
			<div className="container__grid__split">
				<div className="container__grid__split__content">
					<h1 className="title">Transform your brand</h1>
					<div className="text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
						obcaecati possimus similique consequatur, repudiandae quod tempore
						eius porro numquam rerum.
					</div>
					<a href="#" className="action action-yellow">
						LEARN MORE
					</a>
				</div>
				<div className="container__grid__split__image">
					<img src="./images/desktop/image-transform.jpg" alt="Image of egg" />
				</div>
			</div>

			<div className="container__grid__split">
				<div className="container__grid__split__image">
					<img
						src="./images/desktop/image-stand-out.jpg"
						alt="Image of glass"
					/>
				</div>
				<div className="container__grid__split__content">
					<h1 className="title">Stand out to the right audience</h1>
					<div className="text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
						obcaecati possimus similique consequatur, repudiandae quod tempore
						eius porro numquam rerum.
					</div>
					<a href="#" className="action action-red">
						LEARN MORE
					</a>
				</div>
			</div>

			<div className="container__grid__split">
				<div className="container__grid__split__image--background container__grid__split__image--graphic-design">
					<img
						src="./images/desktop/image-graphic-design.jpg"
						alt="Image of cherries"
					/>
					<div className="content">
						<h3 className="title">Graphic Design</h3>
						<div className="text">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
							quas vero minima ratione perspiciatis dignissimos laborum quis
							quaerat alias adipisci?
						</div>
					</div>
				</div>
				<div className="container__grid__split__image--background container__grid__split__image--photography">
					<img
						src="./images/desktop/image-photography.jpg"
						alt="Image of mandarin"
					/>
					<div className="content">
						<h3 className="title">Photography</h3>
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
