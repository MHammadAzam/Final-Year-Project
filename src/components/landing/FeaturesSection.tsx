import React from 'react'
import {
  Languages,
  Crosshair,
  Database,
  BrainCircuit,
  ShieldAlert,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { LANDING_FEATURES } from '../../data/mockData'

const iconMap: Record<string, React.ReactNode> = {
  Languages: <Languages className="w-6 h-6 text-primary" />,
  Crosshair: <Crosshair className="w-6 h-6 text-primary" />,
  Database: <Database className="w-6 h-6 text-primary" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-primary" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-primary" />,
}

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Analytical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
            Precision Intelligence for Modern Cybercrime
          </h2>
          <p className="text-sm sm:text-base text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
            Engineered specifically to solve the limitations of generic Western cyber tools when encountering Pakistani dialects, local payment gateways, and regional social engineering vectors.
          </p>
        </div>

        {/* Feature Cards Grid (5 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LANDING_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className={`rounded-2xl p-6 transition-all duration-300 relative group flex flex-col justify-between ${
                idx === 0
                  ? 'md:col-span-2 lg:col-span-1 bg-surface-light dark:bg-surface-dark border border-primary/40 shadow-card-light dark:shadow-card-dark'
                  : 'bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark hover:border-primary/40 shadow-subtle-light dark:shadow-subtle-dark'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[feature.iconName]}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-surface-dark-elevated text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-medium">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-cyber-text-light dark:text-cyber-text-dark mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              <div className="pt-3 border-t border-cyber-border-light/60 dark:border-cyber-border-dark/60 text-[11px] text-cyber-text-light dark:text-cyber-text-dark/90 font-mono bg-slate-50/50 dark:bg-surface-dark-card/40 p-2.5 rounded-lg">
                <span className="text-primary font-bold">Context:</span> {feature.detail}
              </div>
            </div>
          ))}

          {/* 6th Card: Scalable Architecture */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/10 via-surface-light dark:via-surface-dark to-surface-light dark:to-surface-dark border border-primary/30 flex flex-col justify-between shadow-subtle-light dark:shadow-subtle-dark">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-mono font-bold text-lg">
                  REST
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">
                  FastAPI Ready
                </span>
              </div>

              <h3 className="text-lg font-bold text-cyber-text-light dark:text-cyber-text-dark mb-2">
                Decoupled API Architecture
              </h3>

              <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted leading-relaxed mb-4">
                Structured to communicate seamlessly with asynchronous Python microservices, embedding stores (FAISS / Qdrant), and LLM inference endpoints.
              </p>
            </div>

            <div className="pt-3 border-t border-primary/20 text-[11px] font-mono text-primary flex items-center justify-between">
              <span>Next Milestone: Backend Hooks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
