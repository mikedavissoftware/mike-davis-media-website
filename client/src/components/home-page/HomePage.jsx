import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import SkillsSection from "./sections/SkillsSection"
import ProjectsSection from "./sections/ProjectsSection"
import ContactSection from "./sections/ContactSection"


export default function HomePage() {



  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}