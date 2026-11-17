import React from 'react'
import { History, ShieldCheck, ArrowRight, Clock, CheckCircle2, RotateCcw } from 'lucide-react'
import { MOCK_INVESTIGATIONS } from '../data/mockData'
import { RiskBadge } from '../components/ui/RiskBadge'

export const ScanHistoryPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="pb-2 border-b border-cyber-border-light dark:border-cyber-border-dark">
        <div className="flex items-center gap-2 text-primary text-xs font-mono mb-1">
          <History className="w-3.5 h-3.5" />
          <span>USER AUDIT TRAIL</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
          Scan History & Activity Timeline
        </h1>
        <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
          Chronological record of all message validations performed across your account session.
        </p>
      </div>

      <div className="relative border-l border-cyber-border-light dark:border-cyber-border-dark ml-4 pl-6 space-y-6">
        {MOCK_INVESTIGATIONS.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-primary group-hover:scale-125 transition-transform" />

            <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark group-hover:border-primary/40 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-primary">{item.id}</span>
                  <RiskBadge level={item.riskLevel} size="sm" />
                </div>
                <span className="text-[11px] font-mono text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                  {item.date}
                </span>
              </div>

              <p className="text-xs font-mono text-cyber-text-light dark:text-cyber-text-dark bg-slate-50 dark:bg-surface-dark-card p-2 rounded border border-cyber-border-light/60 dark:border-cyber-border-dark/60 mb-2">
                "{item.previewText}"
              </p>

              <div className="flex items-center justify-between text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                <span>Category: {item.category}</span>
                <span className="text-emerald-500 font-mono">Verification: {item.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
