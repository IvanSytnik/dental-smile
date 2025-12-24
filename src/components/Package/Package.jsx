import { useLanguage } from '../../context/LanguageContext'
import './Package.css'

function Package() {
  const { t } = useLanguage()
  return (
    <section id="package" className="package">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag package-tag">{t.package.tag}</div>
          <h2 className="section-title package-title">{t.package.title}</h2>
          <p className="section-subtitle package-subtitle">{t.package.subtitle}</p>
        </div>
        <div className="package-grid">
          {t.package.items.map((p, i) => (
            <div key={i} className="package-item">
              <div className="package-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="package-note" dangerouslySetInnerHTML={{ __html: t.package.note }} />
      </div>
    </section>
  )
}
export default Package
