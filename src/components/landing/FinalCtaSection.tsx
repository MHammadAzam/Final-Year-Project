import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-surface-light via-slate-50 to-emerald-50 dark:from-surface-dark dark:via-surface-dark-elevated dark:to-[#0F2938] border border-primary/30 shadow-2xl text-center space-y-6 relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Prototype Available</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-cyber-text-light dark:text-cyber-text-dark max-w-3xl mx-auto">
            Experience the Future of Local Cyber Threat Intelligence
          </h2>

          <p className="text-sm sm:text-base text-cyber-text-light-muted dark:text-cyber-text-dark-muted max-w-2xl mx-auto leading-relaxed">
            Test Roman Urdu and Pakistani phishing samples directly in our security operations dashboard. Review extracted indicators, RAG evidence logs, and safety recommendations.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link to="/app">
              <Button size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Launch Application Workspace
              </Button>
            </Link>

            <Link to="/app/analyze">
              <Button size="lg" variant="secondary">
                Analyze Sample Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
