import { motion } from 'framer-motion'
import React from 'react'

const Testimonials = () => {
	return (
		<section className="testimonials">
			<div className="testimonials">
				<header>
					<motion.h2 className="testimonials__title">
						CLIENT TESTIMONIALS
					</motion.h2>
				</header>

				<section className="testimonials__profiles">
					<section className="testimonials__profiles__profile">
						<div className="testimonials__profiles__profile__avatar">
							<img src="./images/image-emily.jpg" alt="Portrait of Emily" />
						</div>

						<div className="testimonials__profiles__profile__text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
							blanditiis qui facilis sed at provident natus fugiat, accusamus!
						</div>

						<div className="testimonials__profiles__profile__name">
							<h4 className="testimonials__profiles__profile__name__name">
								Emily R.
							</h4>
							<p className="testimonials__profiles__profile__name__role">
								Marketting Director
							</p>
						</div>
					</section>

					<section className="testimonials__profiles__profile">
						<div className="testimonials__profiles__profile__avatar">
							<img src="./images/image-thomas.jpg" alt="Portrait of Thomas" />
						</div>

						<div className="testimonials__profiles__profile__text">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
							veniam quaerat dolores. Dolorem, ratione. Impedit.
						</div>

						<div className="testimonials__profiles__profile__name">
							<h4 className="testimonials__profiles__profile__name__name">
								Thomas S.
							</h4>
							<p className="testimonials__profiles__profile__name__role">
								Chief Operating Officer
							</p>
						</div>
					</section>

					<section className="testimonials__profiles__profile">
						<div className="testimonials__profiles__profile__avatar">
							<img src="./images/image-jennie.jpg" alt="Portrait of Emily" />
						</div>

						<div className="testimonials__profiles__profile__text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
							blanditiis qui facilis sed at provident natus fugiat, accusamus?
						</div>

						<div className="testimonials__profiles__profile__name">
							<h4 className="testimonials__profiles__profile__name__name">
								Jennie F.
							</h4>
							<p className="testimonials__profiles__profile__name__role">
								Business Owner
							</p>
						</div>
					</section>
				</section>
			</div>
		</section>
	)
}

export default Testimonials
