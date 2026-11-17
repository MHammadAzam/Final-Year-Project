import React, { useState } from 'react'
import {
  Search,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  CheckCircle2,
  Phone,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  Info,
  Shield,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { RiskBadge } from '../ui/RiskBadge'
import {
  SAMPLE_PRESET_MESSAGES,
  getMockAnalysisForText,
  DEMO_DATA_NOTICE,
} from '../../data/mockData'
import { AnalysisResult } from '../../types'

interface MessageCheckerProps {
  initialText?: string
  onChecked?: (result: AnalysisResult) => void
  showTitle?: boolean
}

export const MessageChecker: React.FC<MessageCheckerProps> = ({
  initialText = '',
  onChecked,
  showTitle = true,
}) => {
  const [inputText, setInputText] = useState(initialText)
  const [selectedChannel, setSelectedChannel] = useState<'SMS' | 'WhatsApp' | 'Social Media'>('SMS')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [copiedAdvice, setCopiedAdvice] = useState(false)

  const handleAnalyze = (textToAnalyze?: string) => {
    const text = (textToAnalyze ?? inputText).trim()
    if (!text) return

    setIsLoading(true)
    setResult(null)

    // Simulate friendly, quick check
    setTimeout(() => {
      const mockResult = getMockAnalysisForText(text, selectedChannel)
      setResult(mockResult)
      setIsLoading(false)
      if (onChecked) {
        onChecked(mockResult)
      }
    }, 650)
  }

  const handleSelectExample = (example: typeof SAMPLE_PRESET_MESSAGES[0]) => {
    setInputText(example.text)
    if (example.channel === 'WhatsApp' || example.channel === 'SMS') {
      setSelectedChannel(example.channel)
    }
    handleAnalyze(example.text)
  }

  const handleClear = () => {
    setInputText('')
    setResult(null)
  }

  const handleCopyAdvice = () => {
    if (!result) return
    const textToCopy = `ScamShield Safety Verdict: ${result.status} (${result.category})\n\nExplanation: ${result.plainExplanation}\n\nRecommended Actions:\n${result.safetyActions.map((a, i) => `${i + 1}. ${a}`).join('\n')}`
    navigator.clipboard.writeText(textToCopy)
    setCopiedAdvice(true)
    setTimeout(() => setCopiedAdvice(false), 2000)
  }

  return (
    <div className="w-full space-y-8">
      {/* 1. Header Section */}
      {showTitle && (
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-medium">
            <Shield className="w-3.5 h-3.5 text-teal-600" />
            <span>Free Scam Check for Pakistani Users</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Check a Suspicious Message
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Paste a message you received and understand whether it might be a scam.
          </p>
        </div>
      )}

      {/* 2. Input Container */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 sm:p-7 space-y-5">
        {/* Channel Selection & Clear */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Where did you receive it?</span>
            <div className="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5 text-xs">
              {(['SMS', 'WhatsApp', 'Social Media'] as const).map((ch) => (
                <button
                  key={ch}
                  type="button"
                  onClick={() => setSelectedChannel(ch)}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    selectedChannel === ch
                      ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {ch}
                </button>
              ))}
            </div>
          </div>

          {inputText && (
            <button
              onClick={handleClear}
              type="button"
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear text</span>
            </button>
          )}
        </div>

        {/* Large Text Area */}
        <div className="relative">
          <textarea
            rows={5}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste the SMS or WhatsApp message here... (for example: 'Benazir Income Support Program: Aapka 25,000 ka wazeefa manzoor ho gaya hai...')"
            className="w-full text-base sm:text-lg p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all leading-relaxed resize-y min-h-[140px]"
          />

          <div className="flex items-center justify-between mt-2 text-xs text-slate-400 dark:text-slate-500">
            <span>Supports Roman Urdu, Urdu script, and English</span>
            <span>{inputText.length} characters</span>
          </div>
        </div>

        {/* Analyze Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Your text is checked privately and not publicly shared.</span>
          </div>

          <Button
            size="lg"
            variant="primary"
            onClick={() => handleAnalyze()}
            disabled={!inputText.trim() || isLoading}
            className="w-full sm:w-auto text-base px-8 py-3.5 shadow-sm"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                <span>Checking Message...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>Analyze Message</span>
              </span>
            )}
          </Button>
        </div>

        {/* 3. Example Messages */}
        <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
            Or try one of these common real-world examples:
          </div>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_PRESET_MESSAGES.map((ex) => (
              <button
                key={ex.id}
                type="button"
                onClick={() => handleSelectExample(ex)}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700 transition-all font-medium text-left"
              >
                {ex.title}
                <span className="text-[10px] ml-1.5 text-slate-400 font-normal">({ex.language})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Simple Loading State */}
      {isLoading && (
        <div className="p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600">
            <span className="w-6 h-6 border-3 border-teal-600/30 border-t-teal-600 rounded-full animate-spin" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Checking for Scam Indicators...
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Comparing words and links against known Pakistani scam techniques and verified safety alerts.
          </p>
        </div>
      )}

      {/* 5. Results Card (When Available) */}
      {result && !isLoading && (
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8 space-y-6">
          {/* Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <RiskBadge level={result.status} size="lg" />
                <span className="text-xs text-slate-400">ID: {result.id}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                {result.category}
              </h2>
            </div>

            <button
              onClick={handleCopyAdvice}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors self-start sm:self-center"
            >
              {copiedAdvice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Share Advice</span>
                </>
              )}
            </button>
          </div>

          {/* Plain Language Explanation */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
              What This Means For You
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              {result.plainExplanation}
            </p>
          </div>

          {/* Suspicious Indicators / Words Highlighted */}
          {result.indicators.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Why It Was Flagged (Key Clues)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.indicators.map((ind, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                      ind.type === 'danger'
                        ? 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/50'
                        : ind.type === 'warning'
                        ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50'
                        : 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'
                    }`}
                  >
                    <div className="mt-0.5">
                      {ind.type === 'danger' && <AlertOctagon className="w-4 h-4 text-rose-600" />}
                      {ind.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                      {ind.type === 'info' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {ind.text}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                        {ind.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Supporting Evidence (in Plain Terms) */}
          <div className="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-800/50 space-y-1.5">
            <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Official Regulatory & Security Match</span>
            </div>
            <p className="text-xs text-teal-900/90 dark:text-teal-200 leading-relaxed">
              {result.evidenceNotes}
            </p>
          </div>

          {/* Recommended Safety Actions */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Recommended Actions (What You Should Do)
            </h3>
            <ul className="space-y-2.5">
              {result.safetyActions.map((action, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Helplines callout */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Need help?</span>
              <span>Forward fraud SMS to PTA: <strong className="text-slate-900 dark:text-white font-mono">9999</strong></span>
              <span>•</span>
              <span>FIA Cybercrime Helpline: <strong className="text-slate-900 dark:text-white font-mono">1991</strong></span>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={handleClear}
            >
              Check Another Message
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
