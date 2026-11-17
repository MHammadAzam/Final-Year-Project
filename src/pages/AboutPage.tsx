import React from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  PhoneCall,
  CheckCircle2,
  Lock,
  Languages,
  AlertTriangle,
  ArrowRight,
  Heart,
} from 'lucide-react'
import { Button } from '../components/ui/Button'

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-medium">
          <Shield className="w-3.5 h-3.5" />
          <span>About ScamShield Pakistan</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Protecting Pakistani Families from Digital Fraud
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          ScamShield is an AI-assisted public safety tool designed to help everyday citizens easily verify whether a suspicious message is a scam.
        </p>
      </div>

      {/* Why We Built This */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Why ScamShield was Created
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Every day, millions of people in Pakistan receive fraudulent SMS and WhatsApp messages claiming they won a lottery, asking them to claim a Benazir Income Support Program (BISP) grant, or warning that their JazzCash or EasyPaisa account is about to be blocked.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Most traditional security tools only work for corporate English emails. ScamShield was specifically trained to understand everyday Pakistani communications—including <strong>Roman Urdu</strong> (phonetic Urdu written with English letters), <strong>Urdu script</strong>, and local bilingual text.
        </p>
      </div>

      {/* 3 Core Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center">
            <Languages className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Understands Roman Urdu
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Reads messages like <em>"Aapka 25,000 ka wazeefa manzoor ho gaya hai"</em> and explains the scam in simple, everyday language.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            100% Free & Private
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Free for all Pakistani citizens. We never share your personal details, phone numbers, or private communications with third parties.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Official Guidance
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Safety advice aligns with verified consumer advisories from the Pakistan Telecommunication Authority (PTA), State Bank, and FIA.
          </p>
        </div>
      </div>

      {/* Official Helplines Directory */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <PhoneCall className="w-5 h-5 text-rose-500" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Official Pakistan Emergency Helplines
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="font-bold text-sm text-slate-900 dark:text-white block">PTA Anti-Scam SMS</span>
            <div className="text-2xl font-extrabold text-teal-600 font-mono">9999</div>
            <p className="text-slate-500">
              Forward any spam, fake prize, or lottery SMS for free to PTA shortcode 9999 to block the scammer.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="font-bold text-sm text-slate-900 dark:text-white block">FIA Cyber Crime</span>
            <div className="text-2xl font-extrabold text-rose-600 font-mono">1991</div>
            <p className="text-slate-500">
              Call the Federal Investigation Agency toll-free if you sent money or had bank accounts compromised.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="font-bold text-sm text-slate-900 dark:text-white block">State Bank Help</span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">111-727-273</div>
            <p className="text-slate-500">
              State Bank of Pakistan helpline for unauthorized Raast, banking, or mobile wallet deductions.
            </p>
          </div>
        </div>
      </div>

      {/* Project Background / Academic Attribution */}
      <div className="p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-2">
        <p>
          <strong>Academic Project:</strong> ScamShield is developed as an undergraduate Final Year Project (FYP) exploring AI-powered multilingual threat detection and evidence retrieval tailored for Pakistani cyber environments.
        </p>
        <p>
          ScamShield provides helpful safety assessments based on common scam patterns, but always exercise personal caution when dealing with unsolicited digital communications.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-2">
        <Link to="/check">
          <Button size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Check a Message Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
