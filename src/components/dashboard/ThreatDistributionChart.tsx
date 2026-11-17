import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { MOCK_THREAT_DISTRIBUTION, MOCK_CATEGORY_BREAKDOWN } from '../../data/mockData'
import { Shield, AlertCircle } from 'lucide-react'

export const ThreatDistributionChart: React.FC = () => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="rounded-lg p-2.5 shadow-lg border text-xs font-sans bg-surface-light dark:bg-surface-dark border-cyber-border-light dark:border-cyber-border-dark min-w-[140px]">
          <p className="font-semibold text-cyber-text-light dark:text-cyber-text-dark">{data.name}</p>
          <div className="mt-1 flex items-center justify-between font-mono">
            <span className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted">Count:</span>
            <span className="font-bold">{data.value}</span>
          </div>
          <div className="flex items-center justify-between font-mono">
            <span className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted">Share:</span>
            <span className="font-bold text-primary">{data.percentage}%</span>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark rounded-xl p-5 shadow-subtle-light dark:shadow-subtle-dark flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-cyber-text-light dark:text-cyber-text-dark text-base">
            Threat Distribution
          </h3>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-surface-dark-elevated text-slate-500">
            Current Dataset
          </span>
        </div>
        <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
          Aggregated risk proportions across all scanned messages.
        </p>

        {/* Donut Chart with center label */}
        <div className="relative w-full h-48 my-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={MOCK_THREAT_DISTRIBUTION}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {MOCK_THREAT_DISTRIBUTION.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center stats */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold font-mono text-cyber-text-light dark:text-cyber-text-dark">
              1,284
            </span>
            <span className="text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted uppercase tracking-wider">
              Evaluated
            </span>
          </div>
        </div>

        {/* Breakdown bars */}
        <div className="space-y-2.5 mt-2">
          {MOCK_THREAT_DISTRIBUTION.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-cyber-text-light dark:text-cyber-text-dark font-medium">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
                  {item.value}
                </span>
                <span className="font-semibold text-cyber-text-light dark:text-cyber-text-dark w-12 text-right">
                  {item.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Attack Vectors in sample */}
      <div className="mt-5 pt-4 border-t border-cyber-border-light dark:border-cyber-border-dark">
        <span className="text-xs font-semibold text-cyber-text-light-muted dark:text-cyber-text-dark-muted uppercase tracking-wider block mb-2">
          Prominent Local Scam Modalities
        </span>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {MOCK_CATEGORY_BREAKDOWN.map((cat) => (
            <div
              key={cat.name}
              className="p-2 rounded-lg bg-slate-50 dark:bg-surface-dark-card border border-cyber-border-light/70 dark:border-cyber-border-dark/70 flex flex-col"
            >
              <span className="text-cyber-text-light-muted dark:text-cyber-text-dark-muted text-[11px] truncate">
                {cat.name}
              </span>
              <span className="font-mono font-bold text-cyber-text-light dark:text-cyber-text-dark mt-0.5">
                {cat.count} cases
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
