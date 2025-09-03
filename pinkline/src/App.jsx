import { useState, useEffect } from 'react'
import './App.css'

/**
 * Navigation Component
 * Responsive navigation bar with mobile menu functionality and scroll effects
 */
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-brand">
          <img 
            src="/images/Pinklogo.png" 
            alt="Pinkline Network" 
            className="nav-logo"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Register Button - Hidden on Mobile */}
        <div className="nav-actions">
          <a href="#register" className="nav-register">
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#register" 
            className="btn btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}

/**
 * Hero Section Component
 * Main landing section with background image and call-to-action
 */
const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome To Pinkline Network
        </h1>
        <p className="hero-subtitle">
          Training the next generation of filmmakers & content creators 
          for an intensive learning experience that transforms careers
        </p>
        <a href="#get-started" className="hero-cta">
          Get Started Today
        </a>
      </div>
    </section>
  )
}

/**
 * About Section Component
 * Showcases the mission, training programs, and founder information
 */
const AboutSection = () => {
  const programs = [
    {
      icon: "/images/filmmaking.png",
      title: "Film Making",
      description: "Comprehensive filmmaking training covering all aspects of production"
    },
    {
      icon: "/images/cinema.png",
      title: "Cinematography",
      description: "Master the art of visual storytelling and camera techniques"
    },
    {
      icon: "/images/directing.png",
      title: "Directing Movie",
      description: "Learn to lead film projects and bring creative visions to life"
    },
    {
      icon: "/images/editing.png",
      title: "Editing Video",
      description: "Professional video editing and post-production techniques"
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* About Us Header */}
        <div className="about-header">
          <div className="section-badge">About Us</div>
        </div>

        {/* About Content */}
        <div className="about-description">
          <p>
            Pinkline Network is the umbrella that unifies and represents both Pinkline 
            Films and Pinkline Academy, serving as the overarching identity under which 
            the creative, educational, and production arms operate. It provides a 
            <span className="highlight"> consolidated platform for all Pinkline initiatives, ensuring consistency in 
            brand presence, strategic alignment, and industry impact.</span>
          </p>
        </div>

        {/* Program & Training Section */}
        <div className="programs-section">
          <div className="section-badge">Program & Training</div>
          
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon">
                  <img src={program.icon} alt={program.title} />
                </div>
                <h4 className="program-title">{program.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="founder-section">
          <div className="founder-content">
            <div className="founder-image">
              <img src="/images/Aboutimg.png" alt="Director Pink - Founder" />
            </div>
            <div className="founder-info">
              <h3 className="founder-title">Founder – Director Pink (Praise Onyeagwalam)</h3>
              <p className="founder-bio">
                Born November 28, 1999, Director Pink rose from church-video editing beginnings to 
                becoming one of Afrobeats most sought-after music video directors by the age of 25. She 
                launched Pinkline Films, her all-female-led video production company, as a platform 
                empowering emerging creatives—particularly women in film.
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Features Section Component
 * Showcases academy offerings, education model, and vision
 */
const FeaturesSection = () => {
  const features = [
    {
      image: "/images/academy.png",
      title: "Academy Mission & Reach",
      description: "Pinkline Academy offers hands-on training in filmmaking, cinematography, directing, editing, and VFX—delivered through onsite classes in Lagos and virtual sessions to students globally...",
      link: "Read More"
    },
    {
      image: "/images/education.jpg",
      title: "Education Modal & Impact",
      description: "Blends traditional training with online VFX, offering a flexible and forward-thinking curriculum responsive to evolving digital demands.. the academy has nearly trained 200 alumni...",
      link: "Read More"
    },
    {
      image: "/images/vision and values.png",
      title: "Vision & Values",
      description: "Pinkline academy envisions a future where African stories are told authentically and powerfully through well- trained creators. The academy strongly emphasize...",
      link: "Read More"
    }
  ]

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        {/* Features Header */}
        <div className="features-header">
          <div className="section-badge">
            We Offer Various for Features<br />
            Training for our Upbringing Students
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-main">
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href="#" className="feature-link">{feature.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Cohort Classes Section Component
 * Showcases the quarterly cohort program with image and detailed description
 */
const CohortSection = () => {
  return (
    <section id="cohort" className="cohort-section">
      <div className="cohort-container">
        {/* Cohort Header */}
        <div className="cohort-header">
          <div className="section-badge">Our next Cohort Classes</div>
        </div>

        {/* Cohort Content */}
        <div className="cohort-content">
          <div className="cohort-image">
            <img src="/images/cohort.jpg" alt="Cohort Classes" />
          </div>
          
          <div className="cohort-info">
            <p className="cohort-description primary">
              Every three months, Pinkline Academy brings together a vibrant and talented 
              group of young creatives and tech enthusiasts for an intensive learning 
              experience that transforms careers and communities. This image captures a 
              moment from one of our recent Cohort Classes, where over 70 passionate 
              learners gathered in a fully immersive studio environment to gain real-world 
              skills in digital media, tech entrepreneurship, branding, and creative strategy.
            </p>
            
            <p className="cohort-description secondary">
              Our quarterly cohort program is more than just a class — it's a collaborative 
              hub of ideas, mentorship, and growth. With hands-on training, live project 
              sessions, and industry-led facilitators, students leave empowered and ready 
              to shape the future. Stay tuned for the next cohort. At Pinkline, we don't just 
              teach — we inspire.
            </p>
            
            <button className="register-btn">Register Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Gallery Section Component
 * Displays a filterable gallery of academy images with lightbox functionality
 */
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { id: 1, src: "/images/gallery1.jpg", alt: "Academy Session 1" },
    { id: 2, src: "/images/gallery2.jpg", alt: "Academy Session 2" },
    { id: 3, src: "/images/gallery3.jpg", alt: "Academy Session 3" },
    { id: 4, src: "/images/gallery4.jpg", alt: "Academy Session 4" },
    { id: 5, src: "/images/gallery5.jpg", alt: "Academy Session 5" },
    { id: 6, src: "/images/gallery6.jpg", alt: "Academy Session 6" }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto' // Restore scrolling
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
  }

  // Add keyboard event listener
  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress)
      return () => document.removeEventListener('keydown', handleKeyPress)
    }
  }, [selectedImage])

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Gallery Header */}
        <div className="gallery-header">
          <div className="section-badge">Filterable Gallery for the Academy</div>
        </div>

        {/* Gallery Content with Dark Background */}
        <div className="gallery-content">
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item" onClick={() => openLightbox(image)}>
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-icon">🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                ×
        </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                {selectedImage.alt}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/**
 * Footer Component
 * Complete footer with links, contact info, and social media
 */
const Footer = () => {
  const programLinks = [
    "Film Making",
    "Cinematography", 
    "Directing Movie",
    "Editing Video"
  ]

  const quickLinks = [
    "Home",
    "About Us",
    "Features", 
    "Gallery"
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Description */}
        <div className="footer-description">
          <p>
            Pinkline Academy is rapidly emerging as a creative education powerhouse in Africa, 
            passionately led by a new generation of storytellers. With industry relevance, vibrant 
            training programs, and a pan-African alumni base, the Academy is charting a promising 
            path toward redefining filmmaking and content creation across the continent.
          </p>
        </div>

        {/* Footer Content Grid */}
        <div className="footer-content">
          {/* Program & Training */}
          <div className="footer-section">
            <h3 className="footer-title">Program & Training</h3>
            <ul className="footer-links">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Link</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="footer-contact">
              <p className="footer-address">
                Nextthought Studio , Ikate, Lekki, Lagos Nigeria
              </p>
              <p className="footer-phone">08115633396</p>
            </div>
          </div>

          {/* Social Media & Logo */}
          <div className="footer-section footer-social-logo-section">
            {/* Social Media Icons */}
            <div className="footer-social">
              <a href="#" aria-label="Instagram" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="m16 11.37-4-2.37v4.74l4-2.37z"></path>
                  <circle cx="18" cy="6" r="1"></circle>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"></polygon>
                </svg>
              </a>
            </div>
            
            {/* Logo */}
            <div className="footer-logo-section">
              <img src="/images/Pinklogo.png" alt="Pinkline Network" className="footer-logo" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © 2025 [Pink Academy] — All Rights Reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  )
}

/**
 * Main App Component
 * Root component that renders the complete landing page
 */
function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CohortSection />
      <GallerySection />
      <Footer />
    </div>
  )
}

export default App