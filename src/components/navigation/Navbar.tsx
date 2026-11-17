import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Shield, Menu, X, CheckCircle, ArrowRight } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Check Message', path: '/check' },
    { label: 'History', path: '/history' },
    { label: 'About', path: '/about' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs group-hover:bg-teal-700 transition-colors">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white leading-tight">
              ScamShield
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none">
              Scam Protection for Pakistan
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <Link to="/check">
            <Button size="sm" variant="primary" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
              Check Message
            </Button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link to="/check" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" variant="primary" className="w-full">
                Check a Message Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
