import React from 'react'
import { Check, X, ShieldAlert, Sparkles, Scale } from 'lucide-react'

export const WhyScamShieldSection: React.FC = () => {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <Scale className="w-3.5 h-3.5" />
            <span>The Regional Cyber Gap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
            Why Generic Security Tools Fail in Pakistan
          </h2>
          <p className="text-sm sm:text-base text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
            Global cybersecurity platforms are trained predominantly on English business emails. They miss Roman Urdu nuances, fake BISP subsidies, and EasyPaisa/JazzCash lures.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark rounded-2xl shadow-subtle-light dark:shadow-subtle-dark overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-cyber-border-light dark:divide-cyber-border-dark">
            {/* Generic Tools */}
            <div className="p-6 sm:p-8 space-y-5 bg-slate-50/50 dark:bg-surface-dark-card/30">
              <div className="flex items-center justify-between pb-3 border-b border-cyber-border-light dark:border-cyber-border-dark">
                <div>
                  <h3 className="font-bold text-base text-cyber-text-light dark:text-cyber-text-dark">
                    Standard Western Filters
                  </h3>
                  <span className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                    Conventional spam filters & LLM wrappers
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-semibold">
                  Ineffective Locally
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Cannot parse Roman Urdu slang (e.g. "wazeefa", "inam", "lottery", "fauri rabta").
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Zero awareness of Pakistani public institutions like BISP, Ehsaas, or FBR.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Hallucinates generic security advice unaligned with PTA or State Bank of Pakistan rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Blackbox scoring with no verifiable regulatory evidence or citations.
                  </span>
                </li>
              </ul>
            </div>

            {/* ScamShield */}
            <div className="p-6 sm:p-8 space-y-5 bg-primary/5 dark:bg-primary/10">
              <div className="flex items-center justify-between pb-3 border-b border-primary/20">
                <div>
                  <h3 className="font-bold text-base text-primary flex items-center gap-1.5">
                    <span>ScamShield Intelligence</span>
                    <Sparkles className="w-4 h-4 text-primary" />
                  </h3>
                  <span className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                    Engineered for Pakistani threat vectors
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">
                  Targeted Architecture
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-cyber-text-light dark:text-cyber-text-dark">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 font-bold" />
                  <span>
                    Custom multilingual tokenization for Roman Urdu, Nastaliq, and code-mixed formats.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 font-bold" />
                  <span>
                    Accurate identification of Raast, EasyPaisa, JazzCash, and commercial banking impersonations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 font-bold" />
                  <span>
                    Grounded RAG retrieval connecting findings directly to official PTA and FIA advisories.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 font-bold" />
                  <span>
                    Explainable AI providing exact justifications and localized emergency safety steps.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
