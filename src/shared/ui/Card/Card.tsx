import React from 'react'
import './Card.css'

interface CardProps {
  title: string
  description: string
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </article>
  )
}