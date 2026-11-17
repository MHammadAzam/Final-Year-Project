import React, { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { MOCK_CLASSIFICATION_TRENDS } from '../../data/mockData'
import { useTheme } from '../../hooks/useTheme'
import { Calendar, Filter } from 'lucide-react'

export const ClassificationChart: React.FC = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d')

  // Visual grid & axis colors based on active theme
  const gridColor = isDark ? '#1E2D47' : '#E2E8F0'
  const textColor = isDark ? '#94A3B8' : '#64748B'

  // Custom polished tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg p-3 shadow-lg border text-xs font-sans bg-surface-light dark:bg-surface-dark border-cyber-border-light dark:border-cyber-border-dark min-w-[170px]">
          <p className="font-semibold text-cyber-text-light dark:text-cyber-text-dark mb-2 pb-1 border-b border-cyber-border-light dark:border-cyber-border-dark flex items-center justify-between">
            <span>Day: {label}</span>
            <span className="text-[10px] text-primary font-mono">Verified Timeline</span>
          </p>
          <div className="space-y-1.5 font-mono">
            <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                Legitimate:
              </span>
              <span className="font-bold">{payload[0]?.value}</span>
            </div>
            <div className="flex items-center justify-between text-amber-600 dark:text-amber-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                Suspicious:
              </span>
              <span className="font-bold">{payload[1]?.value}</span>
            </div>
            <div className="flex items-center justify-between text-rose-600 dark:text-rose-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                Fraudulent:
              </span>
              <span className="font-bold">{payload[2]?.value}</span>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark rounded-xl p-5 shadow-subtle-light dark:shadow-subtle-dark flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-cyber-text-light dark:text-cyber-text-dark text-base">
              Classification Activity Over Time
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              Sample Data
            </span>
          </div>
          <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
            Volumetric breakdown across legitimate, suspicious, and confirmed fraud vectors.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="inline-flex rounded-lg p-0.5 bg-slate-100 dark:bg-surface-dark-elevated border border-cyber-border-light dark:border-cyber-border-dark text-xs">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-surface-light dark:bg-surface-dark text-primary shadow-xs'
                    : 'text-cyber-text-light-muted dark:text-cyber-text-dark-muted hover:text-cyber-text-light dark:hover:text-cyber-text-dark'
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="p-1.5 rounded-lg border border-cyber-border-light dark:border-cyber-border-dark hover:bg-slate-100 dark:hover:bg-surface-dark-elevated text-cyber-text-light-muted dark:text-cyber-text-dark-muted"
            title="Filter by category"
          >
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legend summary pills */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-mono">
        <span className="flex items-center gap-1.5 text-cyber-text-light dark:text-cyber-text-dark">
          <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" />
          Legitimate (67.7%)
        </span>
        <span className="flex items-center gap-1.5 text-cyber-text-light dark:text-cyber-text-dark">
          <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block" />
          Suspicious (18.5%)
        </span>
        <span className="flex items-center gap-1.5 text-cyber-text-light dark:text-cyber-text-dark">
          <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block" />
          Fraudulent (13.8%)
        </span>
      </div>

      {/* Chart container */}
      <div className="w-full h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MOCK_CLASSIFICATION_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLegit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorSusp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorFraud" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <XAxis
              dataKey="date"
              stroke={textColor}
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: gridColor }}
            />
            <YAxis
              stroke={textColor}
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: gridColor }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="legitimate"
              stroke="#10B981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorLegit)"
              name="Legitimate"
            />
            <Area
              type="monotone"
              dataKey="suspicious"
              stroke="#F59E0B"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSusp)"
              name="Suspicious"
            />
            <Area
              type="monotone"
              dataKey="fraudulent"
              stroke="#EF4444"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorFraud)"
              name="Fraudulent"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
