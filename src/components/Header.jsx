import { useState } from 'react'

export default function Header() {
  const [activeNav, setActiveNav] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Destinations', href: '#' },
    { name: 'Packages', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="relative z-50 flex items-center justify-between w-full h-[75px] md:h-[85px] px-6 md:px-12 lg:px-16 bg-transparent">
      {/* Brand Logo */}
      <a
        href="#"
        className="group flex items-center gap-2 font-serif text-2xl md:text-3xl font-bold text-dark-brown tracking-tight transition-opacity hover:opacity-95"
        aria-label="Travacations Home"
      >
        <span className="flex items-center justify-center">
          <img 
            src="/favicon.webp" 
            alt="Travacations Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" 
          />
        </span>
        <span>Travacations</span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-7 lg:gap-10" aria-label="Main Navigation">
        {navItems.map((item) => {
          const isActive = activeNav === item.name
          return (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                isActive ? 'text-dark-brown font-semibold' : 'text-dark-brown hover:text-warm-brown'
              }`}
              onClick={(e) => {
                e.preventDefault()
                setActiveNav(item.name)
              }}
            >
              {item.name}
              {isActive && (
                <span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-warm-brown rounded-full"
                  aria-hidden="true"
                />
              )}
            </a>
          )
        })}
      </nav>

      {/* Desktop Right Action CTA */}
      <div className="hidden md:flex items-center">
        <button
          type="button"
          className="bg-warm-brown hover:bg-warm-brown-dark text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          Book Now
        </button>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        type="button"
        className="md:hidden text-dark-brown p-2 rounded-lg focus:outline-none z-50 cursor-pointer"
        onClick={toggleMobileMenu}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-dark-brown/30 backdrop-blur-[2px] z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-[#F8F3ED] shadow-2xl p-8 pt-20 flex flex-col gap-5 z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-base font-medium py-2 border-b border-dark-brown/10 ${
              activeNav === item.name ? 'text-warm-brown font-semibold' : 'text-dark-brown'
            }`}
            onClick={(e) => {
              e.preventDefault()
              setActiveNav(item.name)
              closeMobileMenu()
            }}
          >
            {item.name}
          </a>
        ))}
        <div className="mt-4">
          <button
            type="button"
            className="w-full bg-warm-brown hover:bg-warm-brown-dark text-white py-3 rounded-full text-sm font-medium tracking-wide shadow-md transition-all cursor-pointer"
            onClick={closeMobileMenu}
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  )
}
