import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Send,
  FileSearch,
  Library,
  History,
  Settings,
  ChevronLeft,
  ChevronRight,
  Shield,
  ExternalLink,
  User,
  LogOut,
} from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { cn } from '../../lib/utils'

interface SidebarProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
  isMobileOpen: boolean
  onCloseMobile: () => void
}

const navItems = [
  {
    name: 'Overview',
    path: '/app',
    icon: LayoutDashboard,
    badge: null,
  },
  {
    name: 'Analyze Message',
    path: '/app/analyze',
    icon: Send,
    badge: 'Intake',
  },
  {
    name: 'Investigations',
    path: '/app/investigations',
    icon: FileSearch,
    badge: '8 Active',
  },
  {
    name: 'Evidence Library',
    path: '/app/evidence',
    icon: Library,
    badge: 'RAG',
  },
  {
    name: 'Scan History',
    path: '/app/history',
    icon: History,
    badge: null,
  },
  {
    name: 'Settings',
    path: '/app/settings',
    icon: Settings,
    badge: null,
  },
]

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
}) => {
  const location = useLocation()

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          'fixed md:static inset-y-0 left-0 z-50 flex flex-col',
          'bg-surface-light dark:bg-surface-dark border-r border-cyber-border-light dark:border-cyber-border-dark',
          'transition-all duration-300 ease-in-out',
          isCollapsed ? 'w-20' : 'w-64',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-cyber-border-light dark:border-cyber-border-dark shrink-0">
          <Link
            to="/app"
            className="flex items-center gap-3 overflow-hidden focus:outline-none"
            title="ScamShield Home"
          >
            <div className="w-9 h-9 rounded-xl bg-surface-dark-elevated border border-primary/40 flex items-center justify-center shrink-0 shadow-sm shadow-primary/20">
              <Shield className="w-5 h-5 text-primary" />
            </div>

            {!isCollapsed && (
              <div className="flex flex-col text-left">
                <span className="font-bold text-base tracking-tight text-cyber-text-light dark:text-cyber-text-dark flex items-center gap-1.5">
                  ScamShield
                  <span className="text-[10px] px-1.5 py-0.2 rounded font-mono font-semibold bg-primary/20 text-primary">
                    SOC
                  </span>
                </span>
                <span className="text-[10px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-mono tracking-tight truncate">
                  Cybercrime Intel PK
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={onToggleCollapse}
            type="button"
            className="hidden md:flex p-1.5 rounded-lg border border-cyber-border-light dark:border-cyber-border-dark hover:bg-slate-100 dark:hover:bg-surface-dark-elevated text-cyber-text-light-muted dark:text-cyber-text-dark-muted"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex-1 py-4 px-3 space-y-1.5 overflow-y-auto">
          <div className="px-3 mb-2">
            {!isCollapsed && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-semibold">
                Intelligence Platform
              </span>
            )}
          </div>

          {navItems.map((item) => {
            const Icon = item.icon
            const isActive =
              item.path === '/app'
                ? location.pathname === '/app'
                : location.pathname.startsWith(item.path)

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onCloseMobile}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all group relative',
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold border border-primary/20'
                    : 'text-cyber-text-light-muted dark:text-cyber-text-dark-muted hover:text-cyber-text-light dark:hover:text-cyber-text-dark hover:bg-slate-100 dark:hover:bg-surface-dark-elevated border border-transparent'
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon
                  className={cn(
                    'w-4 h-4 shrink-0 transition-colors',
                    isActive ? 'text-primary' : 'group-hover:text-cyber-text-light dark:group-hover:text-cyber-text-dark'
                  )}
                />

                {!isCollapsed && (
                  <span className="flex-1 truncate">{item.name}</span>
                )}

                {!isCollapsed && item.badge && (
                  <span
                    className={cn(
                      'text-[10px] font-mono px-1.5 py-0.5 rounded-full font-semibold shrink-0',
                      isActive
                        ? 'bg-primary/20 text-primary'
                        : 'bg-slate-200 dark:bg-surface-dark-elevated text-slate-500 dark:text-slate-400'
                    )}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Collapsed active dot */}
                {isCollapsed && isActive && (
                  <span className="absolute right-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </NavLink>
            )
          })}
        </div>

        {/* Portal switch button */}
        <div className="p-3 border-t border-cyber-border-light dark:border-cyber-border-dark space-y-2 shrink-0">
          <Link
            to="/"
            className={cn(
              'flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted hover:text-primary hover:bg-slate-100 dark:hover:bg-surface-dark-elevated transition-colors border border-dashed border-cyber-border-light dark:border-cyber-border-dark',
              isCollapsed && 'justify-center px-0'
            )}
            title="Return to Public Landing Page"
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span className="truncate">Public Website</span>}
          </Link>
        </div>

        {/* User profile & controls footer */}
        <div className="p-3 border-t border-cyber-border-light dark:border-cyber-border-dark shrink-0 bg-slate-50/50 dark:bg-surface-dark-card/40">
          <div className={cn('flex items-center justify-between gap-2', isCollapsed && 'flex-col items-center')}>
            {/* User info */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                <span>PK</span>
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-surface-light dark:ring-surface-dark" />
              </div>

              {!isCollapsed && (
                <div className="min-w-0 flex flex-col text-left">
                  <span className="text-xs font-semibold text-cyber-text-light dark:text-cyber-text-dark truncate">
                    Lead Analyst
                  </span>
                  <span className="text-[10px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-mono truncate">
                    analyst@scamshield.pk
                  </span>
                </div>
              )}
            </div>

            {/* Theme Toggle in sidebar */}
            <div className="shrink-0">
              <ThemeToggle className="p-1.5" />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
