import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MOCK_RECENT_CHECKS,
  DEMO_DATA_NOTICE,
  getMockAnalysisForText,
} from '../data/mockData'
import { RiskBadge } from '../components/ui/RiskBadge'
import { Button } from '../components/ui/Button'
import {
  Search,
  Filter,
  ArrowRight,
  Clock,
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  Copy,
  Check,
  X,
  Plus,
} from 'lucide-react'
import { MessageCheckItem, RiskStatus } from '../types'

export const HistoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'All' | RiskStatus>('All')
  const [selectedItem, setSelectedItem] = useState<MessageCheckItem | null>(null)
  const [copied, setCopied] = useState(false)

  const filteredChecks = MOCK_RECENT_CHECKS.filter((item) => {
    const matchesSearch =
      item.previewText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === 'All' || item.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400 mb-1">
            <Clock className="w-4 h-4" />
            <span>ACTIVITY LOG</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Recent Message Checks
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Browse messages previously checked for scam patterns and review their plain-language safety advice.
          </p>
        </div>

        <Link to="/check">
          <Button variant="primary" size="md" icon={<Plus className="w-4 h-4" />}>
            Check New Message
          </Button>
        </Link>
      </div>

      {/* Demo Notice */}
      <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
        <span>
          Showing <strong>{DEMO_DATA_NOTICE}</strong> to demonstrate how previous message checks are stored and reviewed.
        </span>
        <span className="font-medium text-teal-700 dark:text-teal-400">Sample Archive</span>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by keywords, bank name, or message ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {(['All', 'High Risk', 'Suspicious', 'Safe'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                statusFilter === st
                  ? 'bg-teal-600 text-white font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Checks List */}
      <div className="space-y-3">
        {filteredChecks.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
            <p className="text-sm font-medium">No checks match your search or filter.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setStatusFilter('All')
              }}
              className="mt-2 text-xs text-teal-600 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredChecks.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/60 dark:hover:border-teal-600/60 shadow-xs hover:shadow transition-all cursor-pointer group space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <RiskBadge level={item.status} size="sm" />
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    ({item.id})
                  </span>
                </div>

                <span className="text-xs text-slate-400">{item.date}</span>
              </div>

              {/* Message text */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 leading-relaxed font-sans">
                "{item.previewText}"
              </p>

              {/* Plain reason */}
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Explanation:</strong> {item.plainReason}
                </span>

                <span className="text-teal-600 dark:text-teal-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                  View safety details
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Detail Modal for Selected Check */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-7 space-y-5 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <RiskBadge level={selectedItem.status} size="md" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                {selectedItem.category}
              </h2>
              <span className="text-xs text-slate-400">
                Channel: {selectedItem.channel} • Language: {selectedItem.language} • {selectedItem.date}
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                Original Message
              </span>
              <p className="text-xs sm:text-sm p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200/60 dark:border-slate-800 leading-relaxed font-sans">
                {selectedItem.previewText}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                Safety Guidance
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedItem.plainReason}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-900 text-xs text-teal-900 dark:text-teal-200 space-y-1">
              <strong className="block font-semibold">Official Pakistan Helplines:</strong>
              <div>PTA Free Anti-Scam SMS: Forward to <strong>9999</strong></div>
              <div>FIA Cybercrime Wing: Call <strong>1991</strong></div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
