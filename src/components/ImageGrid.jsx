import React from 'react'

const ImageGrid = () => {
	return (
		<div className="image-grid" aria-hidden="true">
			<div className="img img1">
				<img
					src="./images/desktop/image-gallery-milkbottles.jpg"
					alt="Milkbottles"
				/>
			</div>
			<div className="img img2">
				<img src="./images/desktop/image-gallery-orange.jpg" alt="Orange" />
			</div>
			<div className="img img3">
				<img
					src="./images/desktop/image-gallery-cone.jpg"
					alt="Icecream Cone"
				/>
			</div>
			<div className="img img4">
				<img
					src="./images/desktop/image-gallery-sugarcubes.jpg"
					alt="Sugarcubes"
				/>
			</div>
		</div>
	)
}

export default ImageGrid
