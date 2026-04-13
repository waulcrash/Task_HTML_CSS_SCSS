import React, { useState } from 'react'
import './Tooltip.css'

interface TooltipProps {
  children: React.ReactNode
  content: string
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div 
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="tooltip__content">
          {content}
        </div>
      )}
    </div>
  )
}