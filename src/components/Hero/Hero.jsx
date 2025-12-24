import { useLanguage } from '../../context/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-pattern" />
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge"><span className="hero-badge-dot" />{t.hero.badge}</div>
          <h1>{t.hero.title} <span className="highlight">{t.hero.titleHighlight}</span> {t.hero.titleEnd}</h1>
          <p className="hero-text">{t.hero.subtitle}</p>
          <div className="hero-features">
            {[t.hero.feature1, t.hero.feature2, t.hero.feature3].map((f, i) => (
              <div key={i} className="hero-feature"><span className="hero-feature-icon">✓</span><span>{f}</span></div>
            ))}
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">{t.hero.ctaPrimary} →</a>
            <a href="#pricing" className="btn btn-outline">{t.hero.ctaSecondary}</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-image"><img src="https://dentanatura.com/wp-content/uploads/2025/11/dokt-scaled.png" alt="Doctor" /></div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="hero-stat-value">20+</div><div className="hero-stat-label">{t.hero.statYears}</div></div>
              <div className="hero-stat"><div className="hero-stat-value">5000+</div><div className="hero-stat-label">{t.hero.statPatients}</div></div>
              <div className="hero-stat"><div className="hero-stat-value">70%</div><div className="hero-stat-label">{t.hero.statSavings}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
