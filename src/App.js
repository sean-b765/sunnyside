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
			<div className="container" role="group">
				<Landing />
				<ContentGrid />
				<Testimonials />
				<ImageGrid />
			</div>
			<Footer />
		</>
	)
}

export default App
