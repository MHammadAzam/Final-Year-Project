import React from 'react'
import { CheckCircle2, AlertTriangle, AlertOctagon } from 'lucide-react'
import { RiskStatus, RiskLevel } from '../../types'
import { cn } from '../../lib/utils'

interface RiskBadgeProps {
  level: RiskLevel | string
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({
  level,
  showIcon = true,
  size = 'md',
  className,
}) => {
  // Normalize to Safe | Suspicious | High Risk
  const isSafe = level === 'Safe' || level === 'Legitimate'
  const isSuspicious = level === 'Suspicious'
  const isHighRisk = level === 'High Risk' || level === 'Fraudulent'

  let config = {
    bg: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
    dot: 'bg-emerald-500',
    icon: CheckCircle2,
    label: 'Safe Message',
  }

  if (isSuspicious) {
    config = {
      bg: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
      dot: 'bg-amber-500',
      icon: AlertTriangle,
      label: 'Suspicious',
    }
  } else if (isHighRisk) {
    config = {
      bg: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
      dot: 'bg-rose-500',
      icon: AlertOctagon,
      label: 'High Risk (Scam)',
    }
  }

  const Icon = config.icon

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-xs font-medium gap-1.5',
    lg: 'px-3.5 py-1.5 text-sm font-semibold gap-2',
  }[size]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border tracking-normal select-none',
        config.bg,
        sizeStyles,
        className
      )}
    >
      <span className={cn('w-2 h-2 rounded-full shrink-0', config.dot)} />
      {showIcon && <Icon className={size === 'lg' ? 'w-4 h-4 shrink-0' : 'w-3.5 h-3.5 shrink-0'} />}
      <span>{config.label}</span>
    </span>
  )
}
