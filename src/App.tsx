import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { RootLayout } from './layouts/RootLayout'
import { HomePage } from './pages/HomePage'
import { CheckMessagePage } from './pages/CheckMessagePage'
import { HistoryPage } from './pages/HistoryPage'
import { AboutPage } from './pages/AboutPage'
import { DashboardOverview } from './pages/DashboardOverview'
import { NotFoundPage } from './pages/NotFoundPage'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            {/* Core Simplified Navigation */}
            <Route path="/" element={<HomePage />} />
            <Route path="/check" element={<CheckMessagePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Minimal Dashboard (Accessible via /dashboard or /app) */}
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/app" element={<DashboardOverview />} />
            <Route path="/app/*" element={<Navigate to="/dashboard" replace />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
