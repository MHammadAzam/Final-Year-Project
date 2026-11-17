import React from 'react'
import { HOW_IT_WORKS_STEPS } from '../../data/mockData'
import { ArrowRight, CheckCircle2, Shield, Layers } from 'lucide-react'

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50/60 dark:bg-surface-dark-card/30 border-y border-cyber-border-light dark:border-cyber-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Forensic Workflow Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
            How ScamShield Analyzes Threat Vectors
          </h2>
          <p className="text-sm sm:text-base text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
            A transparent, multi-stage detection pipeline designed to eliminate hallucinations by backing every risk score with verifiable evidence.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark shadow-subtle-light dark:shadow-subtle-dark flex flex-col justify-between group hover:border-primary/40 transition-all duration-200"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono font-bold flex items-center justify-center text-sm">
                    0{step.step}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-surface-dark-elevated text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-cyber-text-light dark:text-cyber-text-dark mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Technical detail note */}
              <div className="pt-3 border-t border-cyber-border-light/60 dark:border-cyber-border-dark/60">
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold block mb-0.5">
                  Pipeline Mechanics
                </span>
                <p className="text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-mono leading-tight">
                  {step.technicalDetail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
