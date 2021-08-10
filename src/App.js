import ContentGrid from './components/ContentGrid'
import Footer from './components/Footer'
import ImageGrid from './components/ImageGrid'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Testimonials from './components/Testimonials'

function App() {
	return (
		<>
			<Nav />
			<main className="container">
				<Landing />
				<ContentGrid />
				<Testimonials />
				<ImageGrid />
			</main>
			<Footer />
		</>
	)
}

export default App
