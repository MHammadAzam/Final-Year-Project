import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, PhoneCall, ExternalLink, Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12 text-sm text-slate-600 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-slate-900 dark:text-white">
                ScamShield
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              A free, accessible AI tool designed to help everyday Pakistani citizens identify digital scams, fake lottery prizes, and phishing alerts in Roman Urdu, Urdu, and English.
            </p>
            <div className="text-xs text-teal-700 dark:text-teal-400 font-medium">
              Final Year Project (FYP) • Computer Science
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" className="hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/check" className="hover:text-teal-600 transition-colors">
                  Check a Message
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-teal-600 transition-colors">
                  Recent Checks
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-600 transition-colors">
                  About & Helplines
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Helplines */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-rose-500" />
              <span>Official Emergency Helplines</span>
            </h4>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span>PTA Fraud SMS:</span>
                <strong className="text-slate-900 dark:text-white font-mono">Forward to 9999</strong>
              </div>
              <div className="flex justify-between">
                <span>FIA Cybercrime Helpline:</span>
                <strong className="text-rose-600 dark:text-rose-400 font-mono">Call 1991</strong>
              </div>
              <div className="flex justify-between">
                <span>State Bank Helpline:</span>
                <strong className="text-slate-900 dark:text-white font-mono">111-727-273</strong>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              For active theft or stolen bank funds, call your bank and FIA immediately.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} ScamShield. Designed for Pakistani digital safety.
          </div>
          <div>
            Built with React, Vite & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}
