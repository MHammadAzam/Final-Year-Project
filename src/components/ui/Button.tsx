import React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl select-none'

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold shadow-xs',
    }

    const variantStyles = {
      primary:
        'bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow active:scale-[0.99]',
      secondary:
        'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 active:scale-[0.99] shadow-xs',
      outline:
        'border border-teal-600/30 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 active:scale-[0.99]',
      ghost:
        'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
      danger:
        'bg-rose-600 hover:bg-rose-700 text-white shadow-sm active:scale-[0.99]',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
