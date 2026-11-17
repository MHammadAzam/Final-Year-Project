import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Menu, X, ArrowRight, UserCheck } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'

export const LandingNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why ScamShield', href: '#why' },
    { label: 'Message Types', href: '#supported-types' },
    { label: 'Privacy & AI', href: '#privacy' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-cyber-border-light dark:border-cyber-border-dark bg-surface-light/85 dark:bg-background-dark/85 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-9 h-9 rounded-xl bg-surface-dark-elevated border border-primary/40 flex items-center justify-center shrink-0 shadow-sm shadow-primary/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-cyber-text-light dark:text-cyber-text-dark flex items-center gap-1.5">
                ScamShield
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary/20 text-primary font-bold">
                  AI
                </span>
              </span>
              <span className="text-[10px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-mono tracking-tight">
                Cybercrime Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors hover:scale-105 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setShowSignInModal(true)}
              className="text-xs font-medium px-3 py-1.5 text-cyber-text-light dark:text-cyber-text-dark hover:text-primary transition-colors"
            >
              Sign In
            </button>

            <Link to="/app">
              <Button size="sm" variant="primary" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
                Launch Workspace
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-cyber-border-light dark:border-cyber-border-dark text-cyber-text-light dark:text-cyber-text-dark"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-cyber-border-light dark:border-cyber-border-dark bg-surface-light dark:bg-surface-dark px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 text-xs font-medium text-cyber-text-light dark:text-cyber-text-dark hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-cyber-border-light dark:border-cyber-border-dark flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setShowSignInModal(true)
                }}
                className="w-full text-center py-2 text-xs font-medium text-cyber-text-light dark:text-cyber-text-dark hover:text-primary border border-cyber-border-light dark:border-cyber-border-dark rounded-lg"
              >
                Sign In
              </button>
              <Link to="/app" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" variant="primary" className="w-full">
                  Launch Workspace
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Simple Sign In Modal for Prototype */}
      {showSignInModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark shadow-2xl relative">
            <button
              onClick={() => setShowSignInModal(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-3">
              <UserCheck className="w-5 h-5" />
            </div>

            <h3 className="font-bold text-base text-cyber-text-light dark:text-cyber-text-dark">
              ScamShield Intelligence Access
            </h3>
            <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1">
              For Milestone 1 review, session authentication is pre-authorized in Guest Analyst mode.
            </p>

            <div className="mt-5 space-y-3">
              <Link to="/app" onClick={() => setShowSignInModal(false)}>
                <Button variant="primary" className="w-full">
                  Continue as Guest Analyst
                </Button>
              </Link>
              <button
                onClick={() => setShowSignInModal(false)}
                className="w-full py-2 text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
