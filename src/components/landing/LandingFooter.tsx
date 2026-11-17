import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, PhoneCall, ExternalLink, Heart } from 'lucide-react'

export const LandingFooter: React.FC = () => {
  return (
    <footer className="border-t border-cyber-border-light dark:border-cyber-border-dark bg-surface-light dark:bg-background-dark py-12 md:py-16 text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-cyber-border-light dark:border-cyber-border-dark">
          {/* Col 1: Brand & FYP Context */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-surface-dark-elevated border border-primary/40 flex items-center justify-center text-primary">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-cyber-text-light dark:text-cyber-text-dark">
                ScamShield
              </span>
            </div>
            <p className="text-xs leading-relaxed">
              AI-powered multilingual cybercrime detection and evidence-based analysis system designed for Pakistani digital users.
            </p>
            <div className="text-[11px] font-mono text-primary pt-1">
              Final Year Project (FYP) • CS/AI
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-cyber-text-light dark:text-cyber-text-dark font-mono uppercase tracking-wider text-xs">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/app" className="hover:text-primary transition-colors">
                  Overview Dashboard
                </Link>
              </li>
              <li>
                <Link to="/app/analyze" className="hover:text-primary transition-colors">
                  Analyze Message
                </Link>
              </li>
              <li>
                <Link to="/app/investigations" className="hover:text-primary transition-colors">
                  Investigations Dossiers
                </Link>
              </li>
              <li>
                <Link to="/app/evidence" className="hover:text-primary transition-colors">
                  Evidence Library (RAG)
                </Link>
              </li>
              <li>
                <Link to="/app/settings" className="hover:text-primary transition-colors">
                  Dialect Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Regulatory Corpus */}
          <div className="space-y-3">
            <h4 className="font-bold text-cyber-text-light dark:text-cyber-text-dark font-mono uppercase tracking-wider text-xs">
              Knowledge Base
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Roman Urdu NLP Heuristics
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">
                  Vector Retrieval Pipeline
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-primary transition-colors">
                  Regional Attack Surfaces
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-primary transition-colors">
                  Data Governance & PII Shield
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Pakistan Cyber Incident Contacts */}
          <div className="space-y-3">
            <h4 className="font-bold text-cyber-text-light dark:text-cyber-text-dark font-mono uppercase tracking-wider text-xs flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-rose-500" />
              <span>Official Pakistani Helplines</span>
            </h4>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-surface-dark-card border border-cyber-border-light dark:border-cyber-border-dark space-y-1.5 text-[11px] font-mono">
              <div className="flex items-center justify-between">
                <span>PTA Anti-Fraud SMS:</span>
                <span className="font-bold text-primary">9999</span>
              </div>
              <div className="flex items-center justify-between">
                <span>FIA Cyber Crime:</span>
                <span className="font-bold text-rose-500">1991</span>
              </div>
              <div className="flex items-center justify-between">
                <span>State Bank Help:</span>
                <span className="font-bold text-cyber-text-light dark:text-cyber-text-dark">111-727-273</span>
              </div>
            </div>
            <p className="text-[10px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
              Report urgent financial loss or SIM identity theft to verified regulatory channels immediately.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            © {new Date().getFullYear()} ScamShield Project. All rights reserved. Milestone 1 Frontend Architecture.
          </div>
          <div className="font-mono text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
            Built with React 19 • Vite • TypeScript • Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}
