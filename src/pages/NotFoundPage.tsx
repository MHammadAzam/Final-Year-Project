import React from 'react'
import { Link } from 'react-router-dom'
import { HelpCircle, ArrowLeft, Home } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto">
      <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 flex items-center justify-center">
        <HelpCircle className="w-7 h-7" />
      </div>

      <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
        Page Not Found (404)
      </span>

      <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
        This page does not exist
      </h1>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        The link you clicked may be broken or the page may have been moved. Return to the home page to check a message.
      </p>

      <div className="pt-2 flex items-center gap-3">
        <Link to="/">
          <Button variant="primary" icon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
        </Link>
        <Link to="/check">
          <Button variant="secondary" icon={<ArrowLeft className="w-4 h-4" />}>
            Check a Message
          </Button>
        </Link>
      </div>
    </div>
  )
}
