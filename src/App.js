import { useState } from 'react'
import ContentGrid from './components/ContentGrid'
import Footer from './components/Footer'
import ImageGrid from './components/ImageGrid'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Testimonials from './components/Testimonials'

function App() {
	const [y, setY] = useState(0)

	window.addEventListener('scroll', () => {
		setY(window.scrollY)
	})

	return (
		<>
			<Nav />
			<main className="container">
				<Landing />
				<ContentGrid scrollY={y} />
				<Testimonials />
				<ImageGrid />
			</main>
			<Footer />
		</>
	)
}

export default App
