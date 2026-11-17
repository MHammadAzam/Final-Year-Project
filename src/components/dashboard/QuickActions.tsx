import React from 'react'
import { Link } from 'react-router-dom'
import { Send, FileSearch, Library, ArrowRight, Sparkles } from 'lucide-react'

export const QuickActions: React.FC = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark rounded-xl p-5 shadow-subtle-light dark:shadow-subtle-dark">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-cyber-text-light dark:text-cyber-text-dark text-base">
            Operational Quick Actions
          </h3>
          <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
            Rapid pathways into message intake, active forensic logs, and threat intelligence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Analyze New Message */}
        <Link
          to="/app/analyze"
          className="group relative p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all duration-200 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-lg bg-primary text-surface-dark font-bold">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
              Intake
            </span>
          </div>

          <div className="mt-3">
            <h4 className="font-semibold text-sm text-cyber-text-light dark:text-cyber-text-dark group-hover:text-primary transition-colors flex items-center justify-between">
              <span>Analyze Message</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-primary" />
            </h4>
            <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1">
              Submit Roman Urdu, Nastaliq, or English text for indicator extraction and threat scoring.
            </p>
          </div>
        </Link>

        {/* View Investigations */}
        <Link
          to="/app/investigations"
          className="group relative p-4 rounded-xl border border-cyber-border-light dark:border-cyber-border-dark bg-slate-50/60 dark:bg-surface-dark-card/60 hover:border-primary/50 transition-all duration-200 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-lg bg-info/10 text-info font-bold">
              <FileSearch className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-surface-dark-elevated text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
              Dossiers
            </span>
          </div>

          <div className="mt-3">
            <h4 className="font-semibold text-sm text-cyber-text-light dark:text-cyber-text-dark group-hover:text-info transition-colors flex items-center justify-between">
              <span>View Investigations</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-info" />
            </h4>
            <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1">
              Inspect archived case dossiers, evidence citations, and flagged Pakistani cybercrime rings.
            </p>
          </div>
        </Link>

        {/* Explore Evidence Library */}
        <Link
          to="/app/evidence"
          className="group relative p-4 rounded-xl border border-cyber-border-light dark:border-cyber-border-dark bg-slate-50/60 dark:bg-surface-dark-card/60 hover:border-primary/50 transition-all duration-200 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-lg bg-warning/10 text-warning font-bold">
              <Library className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-surface-dark-elevated text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
              RAG Base
            </span>
          </div>

          <div className="mt-3">
            <h4 className="font-semibold text-sm text-cyber-text-light dark:text-cyber-text-dark group-hover:text-warning transition-colors flex items-center justify-between">
              <span>Explore Evidence Library</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-warning" />
            </h4>
            <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1">
              Browse regulatory bulletins, PTA blocklists, and SBP circulars backing the RAG retrieval engine.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
