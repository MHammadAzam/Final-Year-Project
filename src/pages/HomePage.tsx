import React from 'react'
import { Link } from 'react-router-dom'
import { MessageChecker } from '../components/checker/MessageChecker'
import {
  ShieldCheck,
  AlertTriangle,
  Smartphone,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Info,
  Clock,
  Sparkles,
} from 'lucide-react'
import { MOCK_STATS, MOCK_RECENT_CHECKS, DEMO_DATA_NOTICE } from '../data/mockData'
import { RiskBadge } from '../components/ui/RiskBadge'
import { Button } from '../components/ui/Button'

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 1. Main Welcoming Experience: Large Checker Area */}
      <section>
        <MessageChecker />
      </section>

      {/* 2. Minimal Community Overview (Clean Numbers) */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Community Scam Protection Summary
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Overview of messages checked and scam attempts identified across Pakistan.
            </p>
          </div>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium self-start sm:self-center">
            {DEMO_DATA_NOTICE}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-center">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Messages Checked</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {MOCK_STATS.totalChecked.toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Total analyzed</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-center">
            <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Safe Messages</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
              {MOCK_STATS.safeCount.toLocaleString()}
            </div>
            <span className="text-[11px] text-emerald-600/70 dark:text-emerald-400/70 mt-0.5 block">
              Genuine alerts & receipts
            </span>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 text-center">
            <span className="text-xs text-amber-800 dark:text-amber-400 font-medium">Suspicious</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">
              {MOCK_STATS.suspiciousCount.toLocaleString()}
            </div>
            <span className="text-[11px] text-amber-700/70 dark:text-amber-400/70 mt-0.5 block">
              Required caution
            </span>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 text-center">
            <span className="text-xs text-rose-700 dark:text-rose-400 font-medium">High Risk (Scams)</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 dark:text-rose-400 mt-1">
              {MOCK_STATS.highRiskCount.toLocaleString()}
            </div>
            <span className="text-[11px] text-rose-600/70 dark:text-rose-400/70 mt-0.5 block">
              Confirmed fraud vectors
            </span>
          </div>
        </div>
      </section>

      {/* 3. Common Pakistani Scams Explained Simply */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Common Scams in Pakistan You Should Know
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Scammers use these tricks every day. Here is what to look out for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              BISP & Government Aid Scams
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              SMS claiming you have a "25,000 wazeefa" and telling you to call a mobile phone number. Real BISP only contacts beneficiaries via shortcode <strong>8171</strong>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              JazzCash / EasyPaisa Block Alerts
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              SMS warning that your wallet account is blocked and providing a strange web link. The link takes you to a fake page to steal your secret MPIN.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Prize Wins & Advance Fees
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              WhatsApp messages claiming you won a car or gold from Jeeto Pakistan or a lottery, asking you to transfer Rs 5,000 for "delivery fees".
            </p>
          </div>
        </div>
      </section>

      {/* 4. Recent Checks Snapshot */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Recently Checked Messages
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sample of recent scam checks and their safety verdicts.
            </p>
          </div>

          <Link to="/history">
            <Button size="sm" variant="secondary" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
              View All History
            </Button>
          </Link>
        </div>

        <div className="space-y-3">
          {MOCK_RECENT_CHECKS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <RiskBadge level={item.status} size="sm" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    • {item.channel} ({item.language})
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1">
                  "{item.previewText}"
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Why:</strong> {item.plainReason}
                </p>
              </div>

              <div className="text-xs text-slate-400 shrink-0 sm:text-right">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 3 Golden Safety Rules for Ordinary Users */}
      <section className="bg-teal-50/70 dark:bg-teal-950/30 rounded-2xl border border-teal-200/70 dark:border-teal-900/50 p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-teal-600" />
          <h2 className="text-lg font-bold text-teal-950 dark:text-teal-200">
            3 Simple Rules to Stay Safe from Scams in Pakistan
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-teal-100 dark:border-teal-900 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white text-sm block">1. Never Share Your OTP</span>
            <p className="text-slate-600 dark:text-slate-300">
              Your bank, JazzCash, or EasyPaisa will never call or message to ask for your login code or 4-digit PIN.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-teal-100 dark:border-teal-900 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white text-sm block">2. Never Send Money to Win</span>
            <p className="text-slate-600 dark:text-slate-300">
              Genuine prize schemes and jobs never ask you to send advance processing fees or registration charges.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-teal-100 dark:border-teal-900 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white text-sm block">3. Report Free to 9999</span>
            <p className="text-slate-600 dark:text-slate-300">
              Forward any spam or fake lottery SMS to the Pakistan Telecommunication Authority (PTA) shortcode 9999.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
