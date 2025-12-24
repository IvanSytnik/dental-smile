import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './Header.css'

const languages = [
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  { code: 'uk', flag: '🇺🇦', name: 'Українська' }
]

function Header() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen)
  }, [mobileMenuOpen])

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            <div className="logo-icon">🦷</div>
            <span className="logo-text">Dental <span>Smile</span></span>
          </a>

          <div className="nav-right">
            <ul className="nav-links">
              <li><a onClick={() => scrollToSection('about')}>{t.nav.about}</a></li>
              <li><a onClick={() => scrollToSection('services')}>{t.nav.services}</a></li>
              <li><a onClick={() => scrollToSection('pricing')}>{t.nav.pricing}</a></li>
              <li><a onClick={() => scrollToSection('team')}>{t.nav.team}</a></li>
              <li><a onClick={() => scrollToSection('contact')} className="nav-cta">{t.nav.cta}</a></li>
            </ul>

            <div className="lang-switcher">
              {languages.map(l => (
                <button
                  key={l.code}
                  className={`lang-btn ${lang === l.code ? 'active' : ''}`}
                  onClick={() => setLang(l.code)}
                >
                  <span>{l.flag}</span>
                  <span>{l.code.toUpperCase()}</span>
                </button>
              ))}
            </div>

            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <h3 className="mobile-menu-title">{t.nav.selectLanguage}</h3>
        <div className="mobile-lang-list">
          {languages.map(l => (
            <button
              key={l.code}
              className={`mobile-lang-btn ${lang === l.code ? 'active' : ''}`}
              onClick={() => { setLang(l.code); setMobileMenuOpen(false); }}
            >
              <span className="flag">{l.flag}</span>
              <span>{l.name}</span>
            </button>
          ))}
        </div>

        <div className="mobile-nav-links">
          <a onClick={() => scrollToSection('about')}>{t.nav.about}</a>
          <a onClick={() => scrollToSection('services')}>{t.nav.services}</a>
          <a onClick={() => scrollToSection('pricing')}>{t.nav.pricing}</a>
          <a onClick={() => scrollToSection('team')}>{t.nav.team}</a>
          <a onClick={() => scrollToSection('package')}>{t.nav.package}</a>
          <a onClick={() => scrollToSection('contact')}>{t.nav.contact}</a>
        </div>
      </div>
    </>
  )
}

export default Header
