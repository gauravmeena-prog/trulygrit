'use client'

import { useEffect, useState } from 'react'

export function MissingToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched tabs or minimized window
        setIsLeaving(true)
        setTimeout(() => {
          setIsVisible(true)
        }, 1000) // Show toast after 1 second
      } else {
        // User returned to tab
        setIsVisible(false)
        setIsLeaving(false)
      }
    }

    const handleBeforeUnload = () => {
      // User is about to leave the page
      setIsLeaving(true)
      setTimeout(() => {
        setIsVisible(true)
      }, 500) // Show toast faster when leaving
    }

    const handleMouseLeave = () => {
      // User moved mouse away from window
      setIsLeaving(true)
      setTimeout(() => {
        setIsVisible(true)
      }, 2000) // Show toast after 2 seconds of mouse being away
    }

    const handleMouseEnter = () => {
      // User moved mouse back to window
      setIsVisible(false)
      setIsLeaving(false)
    }

    // Listen for tab visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    // Listen for page unload
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    // Listen for mouse leaving/entering the window
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl transform transition-all duration-500 ease-out pointer-events-auto animate-bounce">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">😞</span>
          <span className="text-lg font-medium">Missing you already</span>
        </div>
      </div>
    </div>
  )
}
