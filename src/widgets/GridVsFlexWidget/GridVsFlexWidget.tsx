import React from 'react'
import { Card } from '../../shared/ui/Card/Card'
import './GridVsFlexWidget.css'

const cardsData = [
  { title: 'Карточка 1', description: 'Содержимое карточки 1' },
  { title: 'Карточка 2', description: 'Содержимое карточки 2' },
  { title: 'Карточка 3', description: 'Содержимое карточки 3' },
  { title: 'Карточка 4', description: 'Содержимое карточки 4' },
  { title: 'Карточка 5', description: 'Содержимое карточки 5' }
]

export const GridVsFlexWidget: React.FC = () => {
  return (
    <div className="page">
      <h1>3. Grid vs Flex</h1>
      
      <div className="demo-grid">
        <h2>Grid</h2>
        <div className="grid-container">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
      
      <div className="demo-flex">
        <h2>Flex</h2>
        <div className="flex-container">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  )
}