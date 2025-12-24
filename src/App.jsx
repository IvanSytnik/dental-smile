import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TrustBar from './components/TrustBar/TrustBar'
import About from './components/About/About'
import Services from './components/Services/Services'
import Pricing from './components/Pricing/Pricing'
import Team from './components/Team/Team'
import Package from './components/Package/Package'
import Process from './components/Process/Process'
import Gallery from './components/Gallery/Gallery'
import CTA from './components/CTA/CTA'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Pricing />
        <Team />
        <Package />
        <Process />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
