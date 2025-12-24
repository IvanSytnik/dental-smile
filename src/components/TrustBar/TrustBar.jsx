import { useLanguage } from '../../context/LanguageContext'
import './TrustBar.css'

function TrustBar() {
  const { t } = useLanguage()
  const items = [
    { icon: '🏛️', title: t.trust.ministry, desc: t.trust.ministryDesc },
    { icon: '🌍', title: t.trust.tourism, desc: t.trust.tourismDesc },
    { icon: '🇩🇪', title: t.trust.german, desc: t.trust.germanDesc },
    { icon: '🇨🇭', title: t.trust.swiss, desc: t.trust.swissDesc }
  ]
  return (
    <section className="trust-bar">
      <div className="trust-container">
        {items.map((item, i) => (
          <div key={i} className="trust-item">
            <div className="trust-icon">{item.icon}</div>
            <div className="trust-text"><strong>{item.title}</strong><span>{item.desc}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default TrustBar
