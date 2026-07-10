import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Guidelines from './components/Guidelines.jsx'
import Timeline from './components/Timeline.jsx'
import Finalists from './components/Finalists.jsx'
import Team from './components/Team.jsx'
import Resources from './components/Resources.jsx'
import Faq from './components/Faq.jsx'
import Sponsors from './components/Sponsors.jsx'
import Footer from './components/Footer.jsx'
import './styles/App.css'

export default function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <Intro />
      <Guidelines />
      <Timeline />
      <Finalists />
      <Team />
      <Resources />
      <Faq />
      <section id="end">
        <Sponsors />
        <Footer />
      </section>
    </>
  )
}
