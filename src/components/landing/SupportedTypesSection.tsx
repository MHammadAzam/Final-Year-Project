import React from 'react'
import { SUPPORTED_MESSAGE_TYPES } from '../../data/mockData'
import { MessageSquare, Smartphone, Mail, AlertTriangle } from 'lucide-react'

const typeIcons = [
  <Smartphone className="w-5 h-5 text-primary" />,
  <MessageSquare className="w-5 h-5 text-primary" />,
  <Mail className="w-5 h-5 text-primary" />,
  <AlertTriangle className="w-5 h-5 text-primary" />,
]

export const SupportedTypesSection: React.FC = () => {
  return (
    <section id="supported-types" className="py-20 md:py-28 bg-slate-50/60 dark:bg-surface-dark-card/30 border-y border-cyber-border-light dark:border-cyber-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <span>Attack Surface Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
            Supported Message Formats & Channels
          </h2>
          <p className="text-sm sm:text-base text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
            From SMS shortcode scams to WhatsApp pyramid funnels, ScamShield handles everyday digital communications across platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUPPORTED_MESSAGE_TYPES.map((type, index) => (
            <div
              key={type.title}
              className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark shadow-subtle-light dark:shadow-subtle-dark flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  {typeIcons[index]}
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-surface-dark-elevated text-primary uppercase">
                  {type.badge}
                </span>
                <h3 className="text-base font-bold text-cyber-text-light dark:text-cyber-text-dark mt-2 mb-2">
                  {type.title}
                </h3>
                <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted leading-relaxed">
                  {type.examples}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cyber-border-light/60 dark:border-cyber-border-dark/60 text-[10px] font-mono text-primary flex items-center gap-1">
                <span>Verified by dialect tokenizer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
