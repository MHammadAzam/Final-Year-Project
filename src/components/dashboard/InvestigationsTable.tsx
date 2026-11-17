import React, { useState } from 'react'
import { Investigation, RiskLevel } from '../../types'
import { MOCK_INVESTIGATIONS } from '../../data/mockData'
import { RiskBadge } from '../ui/RiskBadge'
import {
  Search,
  Filter,
  Eye,
  X,
  ShieldAlert,
  ArrowUpRight,
  Database,
  BrainCircuit,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'

export const InvestigationsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'All' | RiskLevel>('All')
  const [activeInvestigation, setActiveInvestigation] = useState<Investigation | null>(null)

  // Filter investigations
  const filteredData = MOCK_INVESTIGATIONS.filter((item) => {
    const matchesSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.previewText.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRisk = selectedFilter === 'All' || item.riskLevel === selectedFilter

    return matchesSearch && matchesRisk
  })

  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark rounded-xl shadow-subtle-light dark:shadow-subtle-dark overflow-hidden">
      {/* Header & Controls */}
      <div className="p-5 border-b border-cyber-border-light dark:border-cyber-border-dark">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-cyber-text-light dark:text-cyber-text-dark text-base">
                Recent Investigations & Threat Dossiers
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                Live Prototype Log
              </span>
            </div>
            <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
              Inspected SMS, WhatsApp, and social engineering communications with AI & RAG grounding.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-cyber-text-light-muted dark:text-cyber-text-dark-muted" />
              <input
                type="text"
                placeholder="Search ID, text, category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-cyber-border-light dark:border-cyber-border-dark bg-background-light dark:bg-surface-dark-card text-cyber-text-light dark:text-cyber-text-dark focus:outline-none focus:border-primary w-48 sm:w-60"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-surface-dark-elevated p-0.5 rounded-lg border border-cyber-border-light dark:border-cyber-border-dark text-xs">
              {(['All', 'Fraudulent', 'Suspicious', 'Legitimate'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedFilter(lvl)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedFilter === lvl
                      ? 'bg-surface-light dark:bg-surface-dark text-primary shadow-xs font-semibold'
                      : 'text-cyber-text-light-muted dark:text-cyber-text-dark-muted hover:text-cyber-text-light dark:hover:text-cyber-text-dark'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-cyber-border-light dark:border-cyber-border-dark bg-slate-50 dark:bg-surface-dark-card/60 text-cyber-text-light-muted dark:text-cyber-text-dark-muted uppercase font-mono tracking-wider">
              <th className="py-3 px-4">Identifier</th>
              <th className="py-3 px-4">Category & Preview</th>
              <th className="py-3 px-4">Risk Evaluation</th>
              <th className="py-3 px-4">Language & Channel</th>
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyber-border-light/60 dark:divide-cyber-border-dark/60 font-sans">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                  <div className="flex flex-col items-center justify-center">
                    <Filter className="w-8 h-8 stroke-1 text-slate-400 mb-2" />
                    <p className="font-medium">No investigations match your filter criteria.</p>
                    <button
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedFilter('All')
                      }}
                      className="mt-2 text-primary hover:underline text-xs"
                    >
                      Clear search & filters
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-surface-dark-elevated/50 transition-colors group cursor-pointer"
                  onClick={() => setActiveInvestigation(item)}
                >
                  {/* ID */}
                  <td className="py-3.5 px-4 font-mono font-medium text-primary">
                    <div className="flex items-center gap-1.5">
                      <span>{item.id}</span>
                    </div>
                  </td>

                  {/* Category & Preview */}
                  <td className="py-3.5 px-4 max-w-xs md:max-w-sm">
                    <div className="font-semibold text-cyber-text-light dark:text-cyber-text-dark">
                      {item.category}
                    </div>
                    <p className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted truncate mt-0.5 text-[11px]">
                      "{item.previewText}"
                    </p>
                  </td>

                  {/* Risk Level & Score */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <RiskBadge level={item.riskLevel} size="sm" />
                      <span className="font-mono text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                        {item.riskScore}/100
                      </span>
                    </div>
                  </td>

                  {/* Language & Channel */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-cyber-text-light dark:text-cyber-text-dark font-medium">
                      {item.language}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                      {item.channel}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-3.5 px-4 whitespace-nowrap font-mono text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                    {item.date}
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono ${
                        item.status === 'Completed'
                          ? 'bg-emerald-500/10 text-emerald-500'
                          : item.status === 'In Review'
                          ? 'bg-amber-500/10 text-amber-500'
                          : 'bg-rose-500/10 text-rose-500'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Quick Inspect Action */}
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveInvestigation(item)
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 dark:bg-surface-dark-elevated hover:bg-primary/20 text-cyber-text-light dark:text-cyber-text-dark hover:text-primary transition-colors text-xs font-medium"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="p-3 bg-slate-50 dark:bg-surface-dark-card/40 border-t border-cyber-border-light dark:border-cyber-border-dark flex items-center justify-between text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
        <span className="font-mono">
          Showing {filteredData.length} of {MOCK_INVESTIGATIONS.length} sample records
        </span>
        <span className="text-[11px]">
          Click any row to open the full simulated evidence dossier
        </span>
      </div>

      {/* Investigation Details Modal / Drawer */}
      {activeInvestigation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 border-b border-cyber-border-light dark:border-cyber-border-dark flex items-center justify-between bg-slate-50 dark:bg-surface-dark-card">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-primary">
                      {activeInvestigation.id}
                    </span>
                    <RiskBadge level={activeInvestigation.riskLevel} size="sm" />
                  </div>
                  <span className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                    {activeInvestigation.category} • {activeInvestigation.channel} ({activeInvestigation.language})
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveInvestigation(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-surface-dark-elevated"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4 overflow-y-auto text-xs">
              {/* Illustrative Notice */}
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                <div>
                  <p className="font-semibold text-xs">Milestone 1 Demonstration Dossier</p>
                  <p className="text-[11px] opacity-90">
                    This dossier displays the exact UX structure planned for Phase 2 AI & RAG grounding. The technical indicators and citations shown below illustrate production layout.
                  </p>
                </div>
              </div>

              {/* Message Payload */}
              <div>
                <label className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted block mb-1">
                  Inspected Raw Message Text
                </label>
                <div className="p-3 rounded-lg bg-background-light dark:bg-surface-dark-card border border-cyber-border-light dark:border-cyber-border-dark font-mono text-cyber-text-light dark:text-cyber-text-dark text-xs leading-relaxed">
                  {activeInvestigation.previewText}
                </div>
              </div>

              {/* Extracted Indicators */}
              <div>
                <label className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted block mb-1">
                  Extracted Suspicious Indicators
                </label>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-surface-dark-card border border-cyber-border-light dark:border-cyber-border-dark space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="font-semibold text-cyber-text-light dark:text-cyber-text-dark">
                      Key Threat Trigger:
                    </span>
                    <span className="text-rose-600 dark:text-rose-400 font-mono">
                      {activeInvestigation.keyIndicator}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                    <Database className="w-3.5 h-3.5 text-primary" />
                    <span>
                      RAG Verified Sources: {activeInvestigation.evidenceSourcesCount} matching threat bulletins indexed
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Grounded Explanation Preview */}
              <div>
                <label className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted block mb-1 flex items-center gap-1.5">
                  <BrainCircuit className="w-3.5 h-3.5 text-primary" />
                  Evidence-Grounded AI Explanation (Prototype Preview)
                </label>
                <div className="p-3 rounded-lg bg-background-light dark:bg-surface-dark-card border border-cyber-border-light dark:border-cyber-border-dark text-cyber-text-light dark:text-cyber-text-dark leading-relaxed">
                  {activeInvestigation.riskLevel === 'Legitimate' ? (
                    <p>
                      This message conforms to standard automated transaction notifications. It originated from an accredited institutional channel, contains no unauthorized credential harvest links, and exhibits no social engineering urgency patterns.
                    </p>
                  ) : (
                    <p>
                      This communication displays high-probability indicators of impersonation fraud. Official agencies (such as BISP, FBR, or commercial banks) never disburse funds via unsolicited personal cellular SIMs or require advance processing fees. The referenced links bypass legitimate domain registrar namespaces.
                    </p>
                  )}
                </div>
              </div>

              {/* Recommended Action */}
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-cyber-text-light dark:text-cyber-text-dark">
                <span className="font-bold text-primary block mb-0.5">Recommended Safety Protocol:</span>
                <p className="text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                  Do not dial back the sender, click embedded URLs, or transfer advance verification sums. Report the sender's SIM number to the PTA Cyber Fraud Helpline (9999) or the FIA Cyber Crime wing.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-50 dark:bg-surface-dark-card border-t border-cyber-border-light dark:border-cyber-border-dark flex items-center justify-between">
              <span className="text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-mono">
                Log reference: {activeInvestigation.id}
              </span>
              <button
                onClick={() => setActiveInvestigation(null)}
                className="px-3 py-1.5 rounded-lg bg-surface-light dark:bg-surface-dark-elevated text-cyber-text-light dark:text-cyber-text-dark text-xs border border-cyber-border-light dark:border-cyber-border-dark hover:border-primary/50"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
