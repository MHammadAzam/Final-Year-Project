import React from 'react'
import { LandingNavbar } from '../components/landing/LandingNavbar'
import { HeroSection } from '../components/landing/HeroSection'
import { FeaturesSection } from '../components/landing/FeaturesSection'
import { HowItWorksSection } from '../components/landing/HowItWorksSection'
import { WhyScamShieldSection } from '../components/landing/WhyScamShieldSection'
import { SupportedTypesSection } from '../components/landing/SupportedTypesSection'
import { PrivacyResponsibleAiSection } from '../components/landing/PrivacyResponsibleAiSection'
import { FinalCtaSection } from '../components/landing/FinalCtaSection'
import { LandingFooter } from '../components/landing/LandingFooter'

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-cyber-text-light dark:text-cyber-text-dark font-sans transition-colors selection:bg-primary/20 selection:text-primary">
      <LandingNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyScamShieldSection />
        <SupportedTypesSection />
        <PrivacyResponsibleAiSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </div>
  )
}
