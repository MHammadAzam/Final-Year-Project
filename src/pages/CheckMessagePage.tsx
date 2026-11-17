import React from 'react'
import { MessageChecker } from '../components/checker/MessageChecker'
import { ShieldCheck, PhoneCall, HelpCircle } from 'lucide-react'

export const CheckMessagePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Centered Message Checker */}
      <MessageChecker showTitle={true} />

      {/* Quick FAQ / Guidance for non-technical users */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <HelpCircle className="w-5 h-5 text-teal-600" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-600 dark:text-slate-400">
          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
              Can I paste messages written in Roman Urdu?
            </h3>
            <p className="leading-relaxed">
              Yes! ScamShield is built specifically for Pakistani users and understands Roman Urdu (like <em>"Aapka account block ho gaya hai"</em>), Urdu script, and English.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
              Is my message private?
            </h3>
            <p className="leading-relaxed">
              Yes. We do not store or publicly publish your personal telephone numbers or personal names. Your message is checked strictly for scam wording and suspicious links.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
              What should I do if a message is flagged High Risk?
            </h3>
            <p className="leading-relaxed">
              Do not click any web links, do not call the sender, and never transfer money. You can safely block the sender or forward the SMS to PTA at 9999.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
              What if I already sent money to a scammer?
            </h3>
            <p className="leading-relaxed">
              Immediately call your bank or mobile wallet (JazzCash 4444 / EasyPaisa 3737) to block unauthorized transactions, and report the fraud to the FIA Cyber Crime Circle helpline at <strong>1991</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
