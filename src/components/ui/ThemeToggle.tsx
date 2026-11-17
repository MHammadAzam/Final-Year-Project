import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/utils'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabel = false }) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={cn(
        'inline-flex items-center justify-center p-2 rounded-xl transition-colors duration-150',
        'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700',
        'text-slate-600 dark:text-slate-300',
        'focus:outline-none focus:ring-2 focus:ring-teal-500/40',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700" />
        )}
      </div>
      {showLabel && (
        <span className="ml-2 text-xs font-medium text-slate-700 dark:text-slate-300">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  )
}
