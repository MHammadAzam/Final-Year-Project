import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  Search,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react'
import { MOCK_STATS, MOCK_RECENT_CHECKS, DEMO_DATA_NOTICE } from '../data/mockData'
import { RiskBadge } from '../components/ui/RiskBadge'
import { Button } from '../components/ui/Button'

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 1. Welcome Message */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROTECTION DASHBOARD</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Welcome to ScamShield
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Your simple, friendly tool to stay safe from SMS, WhatsApp, and digital scams in Pakistan.
          </p>
        </div>

        <span className="text-[11px] px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium self-start sm:self-center">
          {DEMO_DATA_NOTICE}
        </span>
      </div>

      {/* 2. Large Check Message Action Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent border border-teal-500/20 dark:border-teal-500/30 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
            <Search className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Have a suspicious message in your phone?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Paste it into ScamShield to understand if it's an impersonation, fake prize, or dangerous link. We explain the risk in plain, simple language.
          </p>
        </div>

        <Link to="/check" className="shrink-0 w-full md:w-auto">
          <Button size="lg" variant="primary" className="w-full text-base px-8 py-4 shadow-sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Check a Message Now
          </Button>
        </Link>
      </div>

      {/* 3. Number of Messages Checked (Clean Stats) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-center">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total Checked</span>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            {MOCK_STATS.totalChecked.toLocaleString()}
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">Messages reviewed</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-center">
          <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Safe Messages</span>
          <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
            {MOCK_STATS.safeCount.toLocaleString()}
          </div>
          <span className="text-[11px] text-emerald-600/70 dark:text-emerald-400/70 mt-1 block">
            67.7% legitimate
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-center">
          <span className="text-xs text-amber-800 dark:text-amber-400 font-medium">Suspicious</span>
          <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">
            {MOCK_STATS.suspiciousCount.toLocaleString()}
          </div>
          <span className="text-[11px] text-amber-700/70 dark:text-amber-400/70 mt-1 block">
            18.5% needed caution
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-center">
          <span className="text-xs text-rose-700 dark:text-rose-400 font-medium">High Risk (Scams)</span>
          <div className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 mt-1">
            {MOCK_STATS.highRiskCount.toLocaleString()}
          </div>
          <span className="text-[11px] text-rose-600/70 dark:text-rose-400/70 mt-1 block">
            13.8% confirmed fraud
          </span>
        </div>
      </div>

      {/* 4. Simple Threat Summary */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Simple Threat Summary
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Breakdown of scam patterns commonly encountered by users in Pakistan.
          </p>
        </div>

        {/* Visual Multi-segment Bar */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
            <div className="h-full bg-emerald-500" style={{ width: '67.7%' }} title="Safe (67.7%)" />
            <div className="h-full bg-amber-500" style={{ width: '18.5%' }} title="Suspicious (18.5%)" />
            <div className="h-full bg-rose-500" style={{ width: '13.8%' }} title="High Risk (13.8%)" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-300">Safe (869)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-300">Suspicious (237)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-300">High Risk (178)</span>
            </div>
          </div>
        </div>

        {/* Top scam modalities */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Most Common Threat</span>
            <strong className="text-slate-900 dark:text-white mt-0.5 block">Fake Wallet Block SMS</strong>
            <span className="text-[11px] text-slate-400">Targeting JazzCash / EasyPaisa</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Second Most Common</span>
            <strong className="text-slate-900 dark:text-white mt-0.5 block">Fake BISP 25,000 Wazeefa</strong>
            <span className="text-[11px] text-slate-400">Calling personal 03xx numbers</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Rising WhatsApp Threat</span>
            <strong className="text-slate-900 dark:text-white mt-0.5 block">Online YouTube Video Job</strong>
            <span className="text-[11px] text-slate-400">Advance-fee pyramid scheme</span>
          </div>
        </div>
      </div>

      {/* 5. Recent Checks Table / List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Recent Message Checks
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              History of messages recently reviewed on this system.
            </p>
          </div>

          <Link to="/history">
            <Button size="sm" variant="secondary" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
              View All History
            </Button>
          </Link>
        </div>

        <div className="space-y-3">
          {MOCK_RECENT_CHECKS.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <RiskBadge level={item.status} size="sm" />
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {item.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
                    • {item.channel}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 line-clamp-1">
                  "{item.previewText}"
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Safety guidance:</strong> {item.plainReason}
                </p>
              </div>

              <div className="text-slate-400 shrink-0 sm:text-right">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
