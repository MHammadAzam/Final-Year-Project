import React from 'react'
import { InvestigationsTable } from '../components/dashboard/InvestigationsTable'
import { FileSearch, Download, Share2, Filter, AlertOctagon } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const InvestigationsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-cyber-border-light dark:border-cyber-border-dark">
        <div>
          <div className="flex items-center gap-2 text-primary text-xs font-mono mb-1">
            <FileSearch className="w-3.5 h-3.5" />
            <span>CASE MANAGEMENT & DOSSIERS</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
            Forensic Investigations Registry
          </h1>
          <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
            Full record of identified phishing domains, impersonated shortcodes, and telecom fraud rings.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            icon={<Download className="w-3.5 h-3.5" />}
            onClick={() => alert('Exporting sanitized investigation logs as CSV (Prototype Simulation)')}
          >
            Export Log
          </Button>
        </div>
      </div>

      {/* Embedded Table Component */}
      <InvestigationsTable />
    </div>
  )
}
