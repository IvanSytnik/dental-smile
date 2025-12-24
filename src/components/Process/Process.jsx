import { useLanguage } from '../../context/LanguageContext'
import './Process.css'

function Process() {
  const { t } = useLanguage()
  return (
    <section className="section process">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">{t.process.tag}</div>
          <h2 className="section-title">{t.process.title}</h2>
          <p className="section-subtitle">{t.process.subtitle}</p>
        </div>
        <div className="process-timeline">
          {t.process.steps.map((step, i) => (
            <div key={i} className="process-step">
              <div className="step-number">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Process
