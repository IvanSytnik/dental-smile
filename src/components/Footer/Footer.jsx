import { useLanguage } from '../../context/LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo"><div className="footer-logo-icon">🦷</div><span>Dental Smile Germany</span></div>
          <div className="footer-links"><a href="#">{t.footer.imprint}</a><a href="#">{t.footer.privacy}</a><a href="#">{t.footer.terms}</a></div>
        </div>
        <div className="footer-bottom"><p>© 2024 Dental Smile Germany. {t.footer.rights}</p></div>
      </div>
    </footer>
  )
}
export default Footer
