import React, { useState } from 'react'
import { Library, Database, Search, ExternalLink, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react'

const EVIDENCE_SOURCES = [
  {
    id: 'RAG-PTA-01',
    agency: 'PTA (Pakistan Telecommunication Authority)',
    title: 'Advisory on Fraudulent SIM Registration & Fake Lottery SMS',
    date: '2024-11',
    category: 'Telecom Regulation',
    excerpt:
      'All consumers are cautioned against entertaining unsolicited SMS regarding prize draws, vehicle allotments, and Benazir Income Support Program funds from private SIM numbers.',
    citationsCount: 142,
    badge: 'Regulatory Directives',
  },
  {
    id: 'RAG-FIA-04',
    agency: 'FIA Cyber Crime Wing',
    title: 'Public Warning on Online Task Scams & Telegram Investment Pools',
    date: '2024-10',
    category: 'Criminal Intelligence',
    excerpt:
      'Syndicates employing WhatsApp and Telegram channels promising daily salaries of PKR 5,000–10,000 for liking YouTube videos or booking hotel reviews are advance-fee pyramid operations.',
    citationsCount: 98,
    badge: 'Enforcement Alert',
  },
  {
    id: 'RAG-SBP-09',
    agency: 'State Bank of Pakistan (SBP)',
    title: 'Framework for Preventing Unauthorized Raast & Digital Wallet Transfers',
    date: '2024-09',
    category: 'Financial Guidelines',
    excerpt:
      'Commercial banks and EMI institutions (EasyPaisa, JazzCash, Nayapay, Sadapay) shall never solicit customer MPIN, OTP, or debit card CVV over phone or unofficial web portals.',
    citationsCount: 230,
    badge: 'Banking Circular',
  },
  {
    id: 'RAG-CERT-02',
    agency: 'PKCERT National Computer Emergency Response Team',
    title: 'Detection Indicators for Malicious Android APKs Masquerading as FBR Tax Portals',
    date: '2024-08',
    category: 'Technical Threat Intel',
    excerpt:
      'Threat actors distribute malware packages named "TaxRefund.apk" to intercept banking SMS 2FA tokens. Indicators include non-standard domains and accessibility permission abuse.',
    citationsCount: 64,
    badge: 'Technical Advisory',
  },
]

export const EvidenceLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSources = EVIDENCE_SOURCES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-cyber-border-light dark:border-cyber-border-dark">
        <div>
          <div className="flex items-center gap-2 text-primary text-xs font-mono mb-1">
            <Database className="w-3.5 h-3.5" />
            <span>KNOWLEDGE REPOSITORY // RAG GROUNDING</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
            Evidence Library & Threat Corpus
          </h1>
          <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
            Verified regulatory advisories and cyber threat intelligence indexed for Retrieval-Augmented Generation.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-cyber-text-light-muted dark:text-cyber-text-dark-muted" />
          <input
            type="text"
            placeholder="Search advisories, agencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-cyber-border-light dark:border-cyber-border-dark bg-surface-light dark:bg-surface-dark-card text-cyber-text-light dark:text-cyber-text-dark focus:outline-none focus:border-primary w-64"
          />
        </div>
      </div>

      {/* RAG Core Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark">
          <span className="text-[11px] font-mono text-cyber-text-light-muted dark:text-cyber-text-dark-muted uppercase">
            Indexed Bulletins
          </span>
          <div className="text-2xl font-bold font-mono text-primary mt-1">540+</div>
          <span className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1 block">
            PTA, FIA, SBP and CERT advisories
          </span>
        </div>
        <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark">
          <span className="text-[11px] font-mono text-cyber-text-light-muted dark:text-cyber-text-dark-muted uppercase">
            Retrieved Citations
          </span>
          <div className="text-2xl font-bold font-mono text-info mt-1">1,892</div>
          <span className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1 block">
            Evidence links grounded in LLM outputs
          </span>
        </div>
        <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark">
          <span className="text-[11px] font-mono text-cyber-text-light-muted dark:text-cyber-text-dark-muted uppercase">
            Vector Embeddings Model
          </span>
          <div className="text-2xl font-bold font-mono text-emerald-500 mt-1">BGE-M3</div>
          <span className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1 block">
            Dense multilingual semantic index
          </span>
        </div>
      </div>

      {/* Document Cards */}
      <div className="space-y-3">
        {filteredSources.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark hover:border-primary/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-cyber-border-light dark:border-cyber-border-dark">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary font-bold">{item.id}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-surface-dark-elevated font-medium text-cyber-text-light dark:text-cyber-text-dark">
                  {item.agency}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-mono">
                <span>Date: {item.date}</span>
                <span>•</span>
                <span className="text-primary font-semibold">{item.citationsCount} citations</span>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="font-bold text-sm text-cyber-text-light dark:text-cyber-text-dark">
                {item.title}
              </h3>
              <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1.5 leading-relaxed font-sans">
                {item.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
