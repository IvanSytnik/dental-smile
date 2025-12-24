import { useLanguage } from '../../context/LanguageContext'
import './Team.css'

function Team() {
  const { t } = useLanguage()
  return (
    <section id="team" className="section team">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">{t.team.tag}</div>
          <h2 className="section-title">{t.team.title}</h2>
          <p className="section-subtitle">{t.team.subtitle}</p>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-image"><img src="https://dentanatura.com/wp-content/uploads/2025/11/dokt-scaled.png" alt={t.team.doctor.name} /></div>
            <div className="team-info"><h3>{t.team.doctor.name}</h3><p className="team-role">{t.team.doctor.role}</p><p>{t.team.doctor.desc}</p></div>
          </div>
          <div className="team-card">
            <div className="team-image"><img src="https://dentanatura.com/wp-content/uploads/2025/11/nat-scaled.png" alt={t.team.coordinator.name} /></div>
            <div className="team-info"><h3>{t.team.coordinator.name}</h3><p className="team-role">{t.team.coordinator.role}</p><p>{t.team.coordinator.desc}</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Team
