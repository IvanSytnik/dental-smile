import { useLanguage } from '../../context/LanguageContext'
import './Gallery.css'

const images = [
  'https://dentanatura.com/wp-content/uploads/2025/11/zespolowo-scaled.png',
  'https://dentanatura.com/wp-content/uploads/2025/10/pozy.png',
  'https://dentanatura.com/wp-content/uploads/2025/10/d1.png',
  'https://dentanatura.com/wp-content/uploads/2025/10/d2.png'
]

function Gallery() {
  const { t } = useLanguage()
  return (
    <section id="gallery" className="section gallery">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">{t.gallery.tag}</div>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item"><img src={img} alt={`Gallery ${i + 1}`} /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Gallery
