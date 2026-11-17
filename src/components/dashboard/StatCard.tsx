import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface StatCardProps {
  title: string
  value: string | number
  subtext: string
  icon: LucideIcon
  accent?: 'teal' | 'amber' | 'red' | 'blue'
  trend?: {
    value: string
    isPositive?: boolean
    label: string
  }
  isDemo?: boolean
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtext,
  icon: Icon,
  accent = 'teal',
  trend,
  isDemo = true,
}) => {
  const accentStyles = {
    teal: {
      border: 'hover:border-primary/40',
      iconBg: 'bg-primary/10 text-primary',
      indicator: 'bg-primary',
    },
    amber: {
      border: 'hover:border-warning/40',
      iconBg: 'bg-warning/10 text-warning',
      indicator: 'bg-warning',
    },
    red: {
      border: 'hover:border-danger/40',
      iconBg: 'bg-danger/10 text-danger',
      indicator: 'bg-danger',
    },
    blue: {
      border: 'hover:border-info/40',
      iconBg: 'bg-info/10 text-info',
      indicator: 'bg-info',
    },
  }[accent]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl p-5 transition-all duration-200',
        'bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark',
        'shadow-subtle-light dark:shadow-subtle-dark',
        accentStyles.border
      )}
    >
      {/* Top subtle accent bar */}
      <div className={cn('absolute top-0 left-0 right-0 h-0.5', accentStyles.indicator)} />

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-cyber-text-light-muted dark:text-cyber-text-dark-muted uppercase tracking-wider">
              {title}
            </span>
            {isDemo && (
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-surface-dark-elevated text-slate-500 font-mono">
                Sample
              </span>
            )}
          </div>
          <div className="mt-2 text-2xl lg:text-3xl font-bold tracking-tight text-cyber-text-light dark:text-cyber-text-dark font-mono">
            {value}
          </div>
        </div>

        <div className={cn('p-2.5 rounded-lg shrink-0', accentStyles.iconBg)}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-cyber-border-light/60 dark:border-cyber-border-dark/60 flex items-center justify-between text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
        <span>{subtext}</span>
        {trend && (
          <span
            className={cn(
              'font-medium inline-flex items-center gap-1',
              trend.isPositive ? 'text-emerald-500' : 'text-rose-500'
            )}
          >
            {trend.value}
          </span>
        )}
      </div>
    </div>
  )
}
