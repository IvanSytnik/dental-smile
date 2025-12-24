import { useLanguage } from '../../context/LanguageContext'
import './Services.css'

function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" className="section services">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">{t.services.tag}</div>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-price">
                <span className="price-label">{t.services.priceFrom}</span>
                <span className="price-value">{s.price}</span>
                <span className="price-unit">{s.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services
