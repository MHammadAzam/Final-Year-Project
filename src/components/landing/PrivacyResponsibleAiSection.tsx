import React from 'react'
import { Shield, EyeOff, Lock, FileCheck, CheckCircle2, AlertCircle } from 'lucide-react'

export const PrivacyResponsibleAiSection: React.FC = () => {
  return (
    <section id="privacy" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <Lock className="w-3.5 h-3.5" />
            <span>Ethical AI & Data Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
            Privacy-First & Responsible AI Principles
          </h2>
          <p className="text-sm sm:text-base text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
            Cybersecurity tooling must adhere to the highest privacy standards. ScamShield is designed with strict data minimization and transparent probabilistic reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-cyber-text-light dark:text-cyber-text-dark">
              Automated PII Redaction
            </h3>
            <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted leading-relaxed">
              Before message text is parsed by NLP or semantic retrieval models, telephone numbers, CNICs, and sensitive identifiers are masked to prevent inadvertent data leakage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark space-y-3">
            <div className="w-10 h-10 rounded-xl bg-info/10 text-info flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-cyber-text-light dark:text-cyber-text-dark">
              Evidence Grounding (No Hallucinations)
            </h3>
            <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted leading-relaxed">
              Language models are strictly constrained by Retrieval-Augmented Generation (RAG). Explanations cite verified regulatory archives rather than generating unverified assumptions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark space-y-3">
            <div className="w-10 h-10 rounded-xl bg-warning/10 text-warning flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-cyber-text-light dark:text-cyber-text-dark">
              Transparent Probabilistic Scoring
            </h3>
            <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted leading-relaxed">
              We never claim "100% guaranteed immunity" or infallibility. Detection scores reflect calibrated risk probabilities intended to assist human judgment, not replace critical vigilance.
            </p>
          </div>
        </div>

        {/* Responsible Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100/70 dark:bg-surface-dark-card border border-cyber-border-light dark:border-cyber-border-dark max-w-3xl mx-auto flex items-start gap-3 text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
          <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p>
            <strong>Academic Project Notice:</strong> ScamShield is developed as an academic Final Year Project (FYP) focused on advancing Urdu dialect NLP and cyber forensic analysis. For active financial fraud or stolen funds, immediately notify your bank and the FIA Cyber Crime Circle helpline (1991).
          </p>
        </div>
      </div>
    </section>
  )
}
