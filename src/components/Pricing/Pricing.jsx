import { useLanguage } from '../../context/LanguageContext'
import { pricingData } from '../../data/pricing'
import './Pricing.css'

function Pricing() {
  const { lang, t } = useLanguage()
  
  const renderRow = (item) => (
    <div key={item.id} className="pricing-row">
      <div className="service-name">{item.name[lang]}{item.brand && <span className="service-brand">{item.brand}</span>}</div>
      <div className="price-germany">{item.germany}</div>
      <div className={item.price === 'free' ? 'price-free' : item.price === 'contact' ? 'price-contact' : 'price-clinic'}>
        {item.price === 'free' ? t.pricing.free : item.price === 'contact' ? t.pricing.contact : item.price}
      </div>
      <div className={`savings-badge ${item.savings === 'contact' ? 'contact' : ''}`}>
        {item.savings === 'contact' ? '📞' : item.savings}
      </div>
    </div>
  )

  return (
    <section id="pricing" className="section pricing">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">{t.pricing.tag}</div>
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-subtitle">{t.pricing.subtitle}</p>
        </div>
        
        <div className="pricing-category">
          <div className="category-header"><div className="category-icon">🦴</div><h3 className="category-title">{t.pricing.category1}</h3></div>
          <div className="pricing-table">
            <div className="pricing-header">
              <div>{t.pricing.headerTreatment}</div><div>{t.pricing.headerGermany}</div><div>{t.pricing.headerOur}</div><div>{t.pricing.headerSavings}</div>
            </div>
            {pricingData.implants.map(renderRow)}
          </div>
        </div>

        <div className="pricing-category">
          <div className="category-header"><div className="category-icon">💎</div><h3 className="category-title">{t.pricing.category2}</h3></div>
          <div className="pricing-table">
            <div className="pricing-header">
              <div>{t.pricing.headerTreatment}</div><div>{t.pricing.headerGermany}</div><div>{t.pricing.headerOur}</div><div>{t.pricing.headerSavings}</div>
            </div>
            {pricingData.crowns.map(renderRow)}
          </div>
        </div>

        <div className="disclaimer"><span className="disclaimer-icon">ℹ️</span><p className="disclaimer-text">{t.pricing.disclaimer}</p></div>
      </div>
    </section>
  )
}
export default Pricing
