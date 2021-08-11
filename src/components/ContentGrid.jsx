import React from 'react'

const ContentGrid = () => {
	return (
		<section className="grid">
			<div className="grid__split">
				<div className="grid__split__content">
					<header data-aos="fade-right">
						<h2 className="title">Transform your brand</h2>
					</header>
					<p className="text" data-aos="fade-right" data-aos-delay="100">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
						obcaecati possimus similique consequatur, repudiandae quod tempore
						eius porro numquam rerum.
					</p>
					<footer data-aos="fade-right" data-aos-delay="200">
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
					<header data-aos="fade-left">
						<h2 className="title">Stand out to the right audience</h2>
					</header>
					<p className="text" data-aos="fade-left" data-aos-delay="100">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
						obcaecati possimus similique consequatur, repudiandae quod tempore
						eius porro numquam rerum.
					</p>
					<footer data-aos="fade-left" data-aos-delay="200">
						<a href="#" className="action action-red">
							LEARN MORE
						</a>
					</footer>
				</div>
			</div>

			<div className="grid__split">
				<div className="grid__split__image--background grid__split__image--graphic-design">
					<img
						data-aos="fade-in"
						data-aos-delay="200"
						src="./images/desktop/image-graphic-design.jpg"
						alt="Image of cherries"
					/>
					<div className="content">
						<header data-aos="fade-in" data-aos-delay="500">
							<h3 className="title">Graphic Design</h3>
						</header>
						<p className="text" data-aos="fade-in" data-aos-delay="700">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
							quas vero minima ratione perspiciatis.
						</p>
					</div>
				</div>
				<div className="grid__split__image--background grid__split__image--photography">
					<img
						data-aos="fade-in"
						data-aos-delay="500"
						src="./images/desktop/image-photography.jpg"
						alt="Image of mandarin"
					/>
					<div className="content">
						<header data-aos="fade-in" data-aos-delay="500">
							<h3 className="title">Photography</h3>
						</header>
						<p className="text" data-aos="fade-in" data-aos-delay="700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur assumenda explicabo, repellat?
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentGrid
