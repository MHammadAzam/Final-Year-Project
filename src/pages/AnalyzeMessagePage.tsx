import React, { useState } from 'react'
import {
  Send,
  Sparkles,
  Info,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Languages,
  CheckCircle2,
  Copy,
  RotateCcw,
  Database,
  BrainCircuit,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { RiskBadge } from '../components/ui/RiskBadge'

const PRESET_MESSAGES = [
  {
    label: 'BISP Scam (Roman Urdu)',
    text: 'Benazir Income Support Program: Aapka 25,000 ka wazeefa manzoor ho gaya hai. Abhi call karein 0304-7891234 par apna CNIC register karein taake raqam transfer ki ja sakay.',
    channel: 'SMS',
  },
  {
    label: 'JazzCash Phishing (Roman Urdu)',
    text: 'Aapka JazzCash account temporary block kar diya gaya hai. Biometric verification ke liye is link par click karein: http://bit.ly/jazz-secure-verify',
    channel: 'SMS',
  },
  {
    label: 'Prize Advance Fee (Urdu)',
    text: 'مبارک ہو! جیتو پاکستان کی طرف سے آپ کی گاڑی نکلی ہے۔ انعام حاصل کرنے کے لیے 5000 رجسٹریشن فیس فوری بھیجیں۔ رابطہ: 0311-2345678',
    channel: 'WhatsApp',
  },
  {
    label: 'Legitimate Bank Alert (English)',
    text: 'HBL Alert: Your account was credited with PKR 15,000 from A. Khan via Raast. Current balance is PKR 42,310.',
    channel: 'SMS',
  },
]

export const AnalyzeMessagePage: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const [channel, setChannel] = useState<'SMS' | 'WhatsApp' | 'Telegram' | 'Email'>('SMS')
  const [analyzedResult, setAnalyzedResult] = useState<any | null>(null)
  const [isSimulating, setIsSimulating] = useState(false)

  const handleSimulateAnalysis = () => {
    if (!inputText.trim()) return

    setIsSimulating(true)
    setTimeout(() => {
      setIsSimulating(false)

      const isLegit =
        inputText.toLowerCase().includes('credited with pkr') ||
        inputText.toLowerCase().includes('google verification code')

      if (isLegit) {
        setAnalyzedResult({
          riskLevel: 'Legitimate',
          score: 5,
          category: 'Official Transaction Notification',
          indicators: [
            { name: 'Authorized Institutional Format', status: 'Passed', detail: 'Conforms to SBP banking SMS guidelines' },
            { name: 'Credential Harvesting Check', status: 'Passed', detail: 'No external links or OTP requests detected' },
          ],
          aiExplanation:
            'This message conforms to standard authorized transaction updates. No deceptive urgency, unverified phone callback numbers, or credential requests were identified.',
          recommendation: 'Safe to acknowledge. Normal banking alert.',
        })
      } else {
        setAnalyzedResult({
          riskLevel: 'Fraudulent',
          score: 96,
          category: 'Government / Financial Impersonation Scam',
          indicators: [
            { name: 'Spoofed Brand / Agency Mention', status: 'Violated', detail: 'Unverified party claiming government aid or telco authority' },
            { name: 'High-Risk Callback / Link', status: 'Violated', detail: 'Personal SIM cellular number / shortened redirect URL' },
            { name: 'Social Engineering Urgency Bait', status: 'Violated', detail: 'Pressure to call or pay upfront processing fees' },
          ],
          aiExplanation:
            'This communication exhibits classic Pakistani cyber fraud hallmarks: fraudulent claims of lottery/relief grants, unauthorized mobile numbers as helplines, and urgency triggers designed to compromise CNIC or digital wallet funds.',
          recommendation:
            'Do not reply or dial the provided number. Forward the SMS text to the PTA fraud shortcode 9999 and block the sender.',
        })
      }
    }, 600)
  }

  const handleApplyPreset = (preset: typeof PRESET_MESSAGES[0]) => {
    setInputText(preset.text)
    setChannel(preset.channel as any)
    setAnalyzedResult(null)
  }

  const handleReset = () => {
    setInputText('')
    setAnalyzedResult(null)
  }

  return (
    <div className="space-y-6">
      {/* Disclaimer */}
      <div className="p-3.5 rounded-xl border border-primary/20 bg-primary/5 text-xs text-cyber-text-light dark:text-cyber-text-dark flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-primary shrink-0" />
          <span>
            <strong>Interactive Prototype:</strong> This interface provides the exact user workflow and forensic view for the upcoming AI/RAG engine in Milestone 2.
          </span>
        </div>
        <span className="font-mono text-[10px] text-primary uppercase font-bold bg-primary/10 px-2 py-0.5 rounded">
          UI Mockup
        </span>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
          Analyze Suspicious Message
        </h1>
        <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1">
          Paste any SMS, WhatsApp alert, or direct message in Roman Urdu, Nastaliq, or English to inspect threat indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Input Form */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark rounded-xl p-5 shadow-subtle-light dark:shadow-subtle-dark">
            {/* Quick Test Presets */}
            <div className="mb-4">
              <label className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted block mb-2">
                Quick Test Samples (Click to populate)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {PRESET_MESSAGES.map((preset, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleApplyPreset(preset)}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-surface-dark-elevated hover:bg-primary/10 hover:text-primary border border-cyber-border-light dark:border-cyber-border-dark text-cyber-text-light dark:text-cyber-text-dark transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Channel Selection */}
            <div className="mb-4">
              <label className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted block mb-2">
                Message Channel Source
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['SMS', 'WhatsApp', 'Telegram', 'Email'] as const).map((ch) => (
                  <button
                    key={ch}
                    type="button"
                    onClick={() => setChannel(ch)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      channel === ch
                        ? 'border-primary bg-primary/10 text-primary font-bold shadow-xs'
                        : 'border-cyber-border-light dark:border-cyber-border-dark bg-slate-50 dark:bg-surface-dark-card text-cyber-text-light-muted dark:text-cyber-text-dark-muted hover:border-slate-400'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                  Message Content (Raw Text)
                </label>
                <span className="text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-mono">
                  {inputText.length} characters
                </span>
              </div>
              <textarea
                rows={6}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste message here... e.g. 'Aapka 25,000 ka wazeefa manzoor ho gaya hai...'"
                className="w-full p-3.5 rounded-lg border border-cyber-border-light dark:border-cyber-border-dark bg-background-light dark:bg-surface-dark-card text-cyber-text-light dark:text-cyber-text-dark text-xs font-mono focus:outline-none focus:border-primary leading-relaxed resize-none"
              />
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                disabled={!inputText && !analyzedResult}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-cyber-text-light-muted dark:text-cyber-text-dark-muted hover:bg-slate-100 dark:hover:bg-surface-dark-elevated disabled:opacity-40"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <Button
                variant="primary"
                onClick={handleSimulateAnalysis}
                disabled={!inputText.trim() || isSimulating}
                icon={<Sparkles className="w-4 h-4" />}
              >
                {isSimulating ? 'Inspecting Indicators...' : 'Run Forensic Analysis'}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Output / Inspection Dossier */}
        <div className="lg:col-span-5">
          {analyzedResult ? (
            <div className="bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark rounded-xl p-5 shadow-subtle-light dark:shadow-subtle-dark space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-cyber-border-light dark:border-cyber-border-dark">
                <div>
                  <span className="text-[10px] font-mono text-cyber-text-light-muted dark:text-cyber-text-dark-muted uppercase">
                    Forensic Verdict
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <RiskBadge level={analyzedResult.riskLevel} />
                    <span className="font-mono text-xs font-bold text-cyber-text-light dark:text-cyber-text-dark">
                      Risk Score: {analyzedResult.score}/100
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400">Class:</span>
                  <div className="text-xs font-semibold text-primary">{analyzedResult.category}</div>
                </div>
              </div>

              {/* Indicators */}
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted block mb-2">
                  Extracted Indicators
                </span>
                <div className="space-y-2">
                  {analyzedResult.indicators.map((ind: any, i: number) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-50 dark:bg-surface-dark-card border border-cyber-border-light dark:border-cyber-border-dark text-xs flex items-start gap-2"
                    >
                      {ind.status === 'Passed' ? (
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-semibold text-cyber-text-light dark:text-cyber-text-dark">
                          {ind.name}
                        </div>
                        <div className="text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                          {ind.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Explanation Preview */}
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted block mb-1.5 flex items-center gap-1.5">
                  <BrainCircuit className="w-3.5 h-3.5 text-primary" />
                  Grounded LLM Rationale
                </span>
                <div className="p-3 rounded-lg bg-background-light dark:bg-surface-dark-card border border-cyber-border-light dark:border-cyber-border-dark text-xs text-cyber-text-light dark:text-cyber-text-dark leading-relaxed">
                  {analyzedResult.aiExplanation}
                </div>
              </div>

              {/* Safety Recommendation */}
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-xs">
                <span className="font-bold text-primary block mb-0.5">Recommended Safety Protocol:</span>
                <p className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted text-[11px]">
                  {analyzedResult.recommendation}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[300px] border border-dashed border-cyber-border-light dark:border-cyber-border-dark rounded-xl p-8 flex flex-col items-center justify-center text-center bg-surface-light/40 dark:bg-surface-dark/40">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-surface-dark-elevated flex items-center justify-center text-slate-400 mb-3">
                <Send className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-sm text-cyber-text-light dark:text-cyber-text-dark">
                No Inspection Triggered
              </h4>
              <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted max-w-xs mt-1">
                Select one of the sample presets or paste a custom message to view the extracted indicators and AI-grounded verdict.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
