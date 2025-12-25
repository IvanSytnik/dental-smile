import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './Contact.css'

// ⚠️ ЗАМЕНИ НА СВОЙ URL ПОСЛЕ ДЕПЛОЯ НА RENDER!
const API_URL = 'https://dental-smile-backend.onrender.com'

function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message
        })
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  const getButtonText = () => {
    if (status === 'loading') return '⏳...'
    if (status === 'success') return '✓'
    if (status === 'error') return '✗'
    return t.contact.submit + ' →'
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
              <div className="form-group"><label>{t.contact.firstName} *</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required disabled={status === 'loading'} /></div>
              <div className="form-group"><label>{t.contact.lastName} *</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required disabled={status === 'loading'} /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label>{t.contact.email} *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={status === 'loading'} /></div>
              <div className="form-group"><label>{t.contact.phone} *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required disabled={status === 'loading'} /></div>
            </div>
            <div className="form-group">
              <label>{t.contact.treatment}</label>
              <select name="service" value={formData.service} onChange={handleChange} disabled={status === 'loading'}>{t.contact.treatmentOptions.map((opt, i) => <option key={i} value={i === 0 ? '' : opt}>{opt}</option>)}</select>
            </div>
            <div className="form-group"><label>{t.contact.message}</label><textarea rows="4" name="message" value={formData.message} onChange={handleChange} disabled={status === 'loading'}></textarea></div>
            <button type="submit" className={`form-submit ${status}`} disabled={status === 'loading'}>{getButtonText()}</button>
            {status === 'success' && <p className="form-message success">✓ Danke! Wir melden uns bald.</p>}
            {status === 'error' && <p className="form-message error">✗ Fehler. Bitte versuchen Sie es erneut.</p>}
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
