import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import InternshipSection from './components/InternshipSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import FeedbackSection from './components/FeedbackSection'

export default function App() {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <InternshipSection />
      <ServicesSection />
      <ProjectsSection />
      <FeedbackSection />
    </div>
  )
}
