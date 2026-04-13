import React from 'react'
import './CircleCard.scss'

interface CircleCardProps {
  image: string
  title: string
  description: string[]
}

export const CircleCard: React.FC<CircleCardProps> = ({ image, title, description }) => {
  return (
    <article className="circle-card">
      <div className="circle-card__image-wrapper">
        <img src={image} alt={title} className="circle-card__image" />
      </div>
      <h3 className="circle-card__title">{title}</h3>
      <div className="circle-card__description">
        {description.map((line, index) => (
          <p key={index} className="circle-card__line">{line}</p>
        ))}
      </div>
    </article>
  )
}