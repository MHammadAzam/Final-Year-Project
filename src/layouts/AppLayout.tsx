import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Sidebar } from '../components/navigation/Sidebar'
import {
  Menu,
  Bell,
  Search,
  Shield,
  Radio,
  ExternalLink,
  HelpCircle,
} from 'lucide-react'
import { ThemeToggle } from '../components/ui/ThemeToggle'

export const AppLayout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  // Dynamic page title based on path
  const getPageTitle = () => {
    const path = location.pathname
    if (path === '/app') return 'Intelligence Overview'
    if (path.startsWith('/app/analyze')) return 'Analyze Message'
    if (path.startsWith('/app/investigations')) return 'Active Investigations'
    if (path.startsWith('/app/evidence')) return 'Evidence Library & RAG Corpus'
    if (path.startsWith('/app/history')) return 'Historical Threat Logs'
    if (path.startsWith('/app/settings')) return 'System Settings'
    return 'Cybercrime Intelligence Workspace'
  }

  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark text-cyber-text-light dark:text-cyber-text-dark font-sans">
      {/* Sidebar Navigation */}
      <Sidebar
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header Bar */}
        <header className="h-16 border-b border-cyber-border-light dark:border-cyber-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md sticky top-0 z-30 px-4 md:px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            {/* Mobile menu hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 rounded-lg border border-cyber-border-light dark:border-cyber-border-dark text-cyber-text-light dark:text-cyber-text-dark"
              aria-label="Open sidebar menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Breadcrumb / Title */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-primary hidden sm:inline">
                  SOC // PK-REGION
                </span>
                <span className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted hidden sm:inline">
                  /
                </span>
                <h1 className="text-sm md:text-base font-bold text-cyber-text-light dark:text-cyber-text-dark">
                  {getPageTitle()}
                </h1>
              </div>
            </div>
          </div>

          {/* Right Header items */}
          <div className="flex items-center gap-2.5">
            {/* Live Operational Status */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sensors Online (FIA/PTA Synced)</span>
            </div>

            {/* Header Theme Toggle */}
            <ThemeToggle className="p-1.5" />

            {/* Public site link */}
            <Link
              to="/"
              className="p-1.5 rounded-lg border border-cyber-border-light dark:border-cyber-border-dark text-cyber-text-light-muted dark:text-cyber-text-dark-muted hover:text-primary transition-colors hidden sm:flex items-center gap-1 text-xs"
              title="Landing page"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden md:inline">Portal</span>
            </Link>
          </div>
        </header>

        {/* Dynamic Outlet */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
