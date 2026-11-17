import React, { useState } from 'react'
import { Settings, Shield, Moon, Sun, Server, Languages, Sliders, CheckCircle } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { Button } from '../components/ui/Button'

export const SettingsPage: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [apiUrl, setApiUrl] = useState('http://127.0.0.1:8000/api/v1')
  const [dialect, setDialect] = useState('multilingual')
  const [sensitivity, setSensitivity] = useState(85)
  const [savedNotice, setSavedNotice] = useState(false)

  const handleSave = () => {
    setSavedNotice(true)
    setTimeout(() => setSavedNotice(false), 3000)
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="pb-2 border-b border-cyber-border-light dark:border-cyber-border-dark">
        <div className="flex items-center gap-2 text-primary text-xs font-mono mb-1">
          <Settings className="w-3.5 h-3.5" />
          <span>CONFIGURATION</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-cyber-text-light dark:text-cyber-text-dark">
          System Preferences & Architecture Settings
        </h1>
        <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
          Tune dialect thresholds, interface themes, and preparation for future FastAPI inference servers.
        </p>
      </div>

      {savedNotice && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span>Preferences updated successfully (saved locally).</span>
        </div>
      )}

      {/* Theme Section */}
      <div className="p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark space-y-4">
        <div>
          <h3 className="font-semibold text-sm text-cyber-text-light dark:text-cyber-text-dark flex items-center gap-2">
            <span>Visual Theme Mode</span>
          </h3>
          <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
            Switch between cybersecurity high-contrast dark mode and clean white administrative light mode.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-md">
          <button
            type="button"
            onClick={() => setTheme('dark')}
            className={`p-3 rounded-xl border flex items-center gap-3 text-xs font-medium transition-all ${
              theme === 'dark'
                ? 'border-primary bg-primary/10 text-primary font-bold shadow-xs'
                : 'border-cyber-border-light dark:border-cyber-border-dark hover:border-slate-400'
            }`}
          >
            <Moon className="w-4 h-4 text-amber-400" />
            <div className="text-left">
              <div>Dark Mode (Default)</div>
              <span className="text-[10px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-normal">
                #0B1220 Deep Navy
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setTheme('light')}
            className={`p-3 rounded-xl border flex items-center gap-3 text-xs font-medium transition-all ${
              theme === 'light'
                ? 'border-primary bg-primary/10 text-primary font-bold shadow-xs'
                : 'border-cyber-border-light dark:border-cyber-border-dark hover:border-slate-400'
            }`}
          >
            <Sun className="w-4 h-4 text-amber-500" />
            <div className="text-left">
              <div>Light Mode</div>
              <span className="text-[10px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted font-normal">
                #F5F7FA Soft Clean
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Language / Dialect */}
      <div className="p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark space-y-4">
        <div>
          <h3 className="font-semibold text-sm text-cyber-text-light dark:text-cyber-text-dark flex items-center gap-2">
            <Languages className="w-4 h-4 text-primary" />
            <span>Target Dialect Priority</span>
          </h3>
          <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
            Optimizes tokenizer heuristics for specific regional script varieties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'multilingual', name: 'Code-Mixed Urdu/English', desc: 'Standard Pakistani mobile communication' },
            { id: 'roman_urdu', name: 'Roman Urdu Script', desc: 'Latin alphabet phonetic Urdu spelling' },
            { id: 'nastaliq', name: 'Nastaliq Urdu Script', desc: 'Native Urdu Persian-Arabic script' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setDialect(item.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                dialect === item.id
                  ? 'border-primary bg-primary/10 text-primary font-bold'
                  : 'border-cyber-border-light dark:border-cyber-border-dark'
              }`}
            >
              <div className="text-xs font-semibold">{item.name}</div>
              <p className="text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-1">
                {item.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* FastAPI Backend Target */}
      <div className="p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-cyber-border-light dark:border-cyber-border-dark space-y-4">
        <div>
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm text-cyber-text-light dark:text-cyber-text-dark">
              FastAPI Inference Backend Endpoint
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
              Future Hook
            </span>
          </div>
          <p className="text-xs text-cyber-text-light-muted dark:text-cyber-text-dark-muted mt-0.5">
            Ready for integration with local or cloud FastAPI ML server in Milestone 2.
          </p>
        </div>

        <div className="max-w-md space-y-2">
          <input
            type="text"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-cyber-border-light dark:border-cyber-border-dark bg-background-light dark:bg-surface-dark-card text-cyber-text-light dark:text-cyber-text-dark focus:outline-none focus:border-primary"
          />
          <span className="text-[11px] text-cyber-text-light-muted dark:text-cyber-text-dark-muted">
            Default endpoint: <code className="font-mono text-primary">/api/v1/detect</code> and <code className="font-mono text-primary">/api/v1/rag-evidence</code>
          </span>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-2">
        <Button variant="primary" onClick={handleSave}>
          Save Configuration
        </Button>
      </div>
    </div>
  )
}
