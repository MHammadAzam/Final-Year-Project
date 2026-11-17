import React from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Sparkles,
  Lock,
  Search,
  ExternalLink,
} from 'lucide-react'
import { Button } from '../ui/Button'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Pakistani Cyber Threat Intelligence System</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cyber-text-light dark:text-cyber-text-dark leading-[1.15]">
              Understand the Threat.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-teal-200">
                Trust the Evidence.
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-cyber-text-light-muted dark:text-cyber-text-dark-muted max-w-2xl leading-relaxed font-sans">
              AI-powered multilingual cybercrime analysis that helps identify suspicious messages, investigate potential threats, and understand the evidence behind every risk.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link to="/app/analyze" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto text-sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Analyze a Message
                </Button>
              </Link>

              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto text-sm"
                >
                  Explore How It Works
                </Button>
              </a>
            </div>

            {/* Trust / Dialect Highlights */}
            <div className="pt-6 border-t border-cyber-border-light dark:border-cyber-border-dark flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Roman Urdu & Nastaliq</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>RAG Evidence Grounding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>PTA / FIA Aligned Advice</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Cybersecurity Visual Simulation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-primary/30 via-cyber-border-light dark:via-cyber-border-dark to-transparent shadow-2xl">
                <div className="rounded-[14px] bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark overflow-hidden">
                  {/* Terminal Header */}
                  <div className="px-4 py-3 border-b border-cyber-border-light dark:border-cyber-border-dark bg-slate-100/70 dark:bg-surface-dark-card flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                        forensic-telemetry-node:pk-01
                      </span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-bold border border-rose-500/20">
                      THREAT CONFIRMED
                    </span>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-4 space-y-3.5 text-xs font-mono">
                    {/* Raw Packet Stream */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted mb-1">
                        <span>INCOMING PAYLOAD // SMS_TELCO_STREAM</span>
                        <span className="text-emerald-500">200 OK</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-background-light dark:bg-surface-dark-card border border-cyber-border-light dark:border-cyber-border-dark text-cyber-text-light dark:text-cyber-text-dark leading-relaxed">
                        "Aapka JazzCash account temporary block kar diya gaya hai. Biometric verification ke liye{' '}
                        <span className="bg-rose-500/20 text-rose-500 px-1 py-0.5 rounded font-bold underline decoration-rose-500">
                          http://bit.ly/jazz-secure-verify
                        </span>{' '}
                        par click karein..."
                      </div>
                    </div>

                    {/* Threat Extraction Grid */}
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-50 dark:bg-surface-dark-elevated border border-cyber-border-light dark:border-cyber-border-dark">
                        <span className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted block text-[10px]">
                          Phishing Vector
                        </span>
                        <span className="font-semibold text-rose-500">Shortened Bit.ly Link</span>
                      </div>

                      <div className="p-2 rounded bg-slate-50 dark:bg-surface-dark-elevated border border-cyber-border-light dark:border-cyber-border-dark">
                        <span className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted block text-[10px]">
                          Targeted Brand
                        </span>
                        <span className="font-semibold text-primary">JazzCash Telco Wallet</span>
                      </div>
                    </div>

                    {/* RAG Grounding Citation */}
                    <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20 text-[11px] space-y-1">
                      <div className="flex items-center justify-between text-primary font-bold">
                        <span className="flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          RAG Evidence Citation
                        </span>
                        <span className="text-[10px] opacity-80">SBP Advisory BPRD-2023</span>
                      </div>
                      <p className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted leading-tight font-sans">
                        "Financial institutions never request biometric credentials via external URL shorteners."
                      </p>
                    </div>

                    {/* Metric Gauge */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[11px] font-bold">
                        <span className="text-cyber-text-light dark:text-cyber-text-dark">Fraud Probability</span>
                        <span className="text-rose-500">98.4% (CRITICAL)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-surface-dark-elevated overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full w-[98%]" />
                      </div>
                    </div>

                    {/* Verification Status */}
                    <div className="pt-2 border-t border-cyber-border-light dark:border-cyber-border-dark flex items-center justify-between text-[10px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                      <span>Dialect Engine: Roman Urdu v2.4</span>
                      <span className="text-primary font-bold">SHA-256 Verified Log</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
