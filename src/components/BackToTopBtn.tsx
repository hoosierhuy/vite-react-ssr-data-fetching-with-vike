import { FC, useState, useEffect } from 'react'

/**
 * Potentially there could be hundreds of products on the page, this "back to top" button component will help users to quickly navigate to the top of the page.
 */
const BackToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    setIsVisible(window.scrollY > 200)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top-btn"
      style={{
        display: isVisible ? 'block' : 'none',
      }}
    >
      Back to Top
    </button>
  )
}

export default BackToTopButton
