import { useLanguage } from '../../context/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()
  const features = [
    { icon: '🦷', title: t.about.feature1Title, desc: t.about.feature1Desc },
    { icon: '👑', title: t.about.feature2Title, desc: t.about.feature2Desc },
    { icon: '🔧', title: t.about.feature3Title, desc: t.about.feature3Desc },
    { icon: '🌍', title: t.about.feature4Title, desc: t.about.feature4Desc }
  ]
  return (
    <section id="about" className="section about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-main"><img src="https://dentanatura.com/wp-content/uploads/2025/11/mav-scaled.png" alt="Clinic" /></div>
            <div className="about-badge"><span className="about-badge-number">20+</span><span className="about-badge-text">{t.about.badgeText}</span></div>
          </div>
          <div className="about-content">
            <div className="section-tag">{t.about.tag}</div>
            <h3>{t.about.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
            <div className="about-features">
              {features.map((f, i) => (
                <div key={i} className="about-feature">
                  <div className="about-feature-icon">{f.icon}</div>
                  <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
