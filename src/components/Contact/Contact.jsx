import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">{t.contact.tag}</div>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label>{t.contact.firstName} *</label><input type="text" required /></div>
              <div className="form-group"><label>{t.contact.lastName} *</label><input type="text" required /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label>{t.contact.email} *</label><input type="email" required /></div>
              <div className="form-group"><label>{t.contact.phone}</label><input type="tel" /></div>
            </div>
            <div className="form-group">
              <label>{t.contact.treatment}</label>
              <select>{t.contact.treatmentOptions.map((opt, i) => <option key={i} value={i === 0 ? '' : opt}>{opt}</option>)}</select>
            </div>
            <div className="form-group"><label>{t.contact.message}</label><textarea rows="4"></textarea></div>
            <button type="submit" className="form-submit">{submitted ? '✓' : t.contact.submit + ' →'}</button>
          </form>
          <div className="contact-info">
            <div className="contact-card"><div className="contact-icon">📞</div><div><h4>{t.contact.phoneTitle}</h4><p>+49 123 456 789 00</p></div></div>
            <div className="contact-card"><div className="contact-icon">✉️</div><div><h4>{t.contact.emailTitle}</h4><p>info@dentalsmile.de</p></div></div>
            <div className="contact-card"><div className="contact-icon">📍</div><div><h4>{t.contact.locationTitle}</h4><p>Antalya, Turkey</p></div></div>
            <div className="contact-card"><div className="contact-icon">⏰</div><div><h4>{t.contact.hoursTitle}</h4><p>{t.contact.hours}</p></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
