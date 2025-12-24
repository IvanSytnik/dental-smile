import { useLanguage } from '../../context/LanguageContext'
import './CTA.css'

function CTA() {
  const { t } = useLanguage()
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.subtitle}</p>
        <a href="#contact" className="btn btn-primary">{t.cta.button} →</a>
      </div>
    </section>
  )
}
export default CTA
