import { useCallback, useEffect, useRef, useState } from 'react'

// Custom hook for checking if the element (ref) is in view
const useInView = () => {
	const ref = useRef()
	const [isInView, setIsInView] = useState(false)

	const checkIfInView = () => {
		if (!ref?.current) return false

		const { top, height } = ref.current.getBoundingClientRect()

		const isVisible = top + height <= window.innerHeight

		if (isVisible) return true

		return false
	}

	useEffect(() => {
		const updateIfInView = () => {
			!isInView && setIsInView(checkIfInView())
		}

		// on initial effect, check if this element is in view and set the state accordingly
		!isInView && setIsInView(checkIfInView())

		window.addEventListener('scroll', updateIfInView)

		// Cleanup
		return () => {
			window.removeEventListener('scroll', updateIfInView)
		}
	}, [])

	// return the ref for use in component
	//  isInView to use with framer-motion to animate
	return [ref, isInView]
}

export default useInView
