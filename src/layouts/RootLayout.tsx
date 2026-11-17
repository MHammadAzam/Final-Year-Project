import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/navigation/Footer'

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors antialiased">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
