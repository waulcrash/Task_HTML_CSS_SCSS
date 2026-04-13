import React from 'react'
import { Tooltip } from '../../shared/ui/Tooltip/Tooltip'
import './TooltipWidget.css'

export const TooltipWidget: React.FC = () => {
  return (
    <div className="page">
      <h1>2. Tooltip</h1>
      
      <div className="tooltip-demo">
        <Tooltip content="Ваша подсказка здесь">
          <span className="tooltip-trigger">Наведите для подсказки</span>
        </Tooltip>
      </div>
    </div>
  )
}