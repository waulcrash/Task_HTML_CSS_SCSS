import React from 'react'
import { CircleCard } from '../../shared/ui/CircleCard/CircleCard'
import firstImage from '../../shared/images/first.jpg'
import secondImage from '../../shared/images/second.jpg'
import thirdImage from '../../shared/images/third.jpg'
import './AboutWidget.scss'

export const AboutWidget: React.FC = () => {
  const cardsData = [
    {
      image: firstImage,
      title: 'WEB',
      description: [
        'Создание современных',
        'и адаптивных веб-сайтов',
        'с использованием передовых',
        'технологий и подходов'
      ]
    },
    {
      image: secondImage,
      title: 'IOS AND ANDROID',
      description: [
        'Разработка мобильных',
        'приложений для iOS и Android',
        'с единой кодовой базой',
        'и нативной производительностью'
      ]
    },
    {
      image: thirdImage,
      title: 'MARCETING',
      description: [
        'Продвижение вашего бизнеса',
        'в digital-среде, привлечение',
        'целевой аудитории и увеличение',
        'продаж через интернет'
      ]
    }
  ]

  return (
    <section className="about-widget">
      <div className="about-widget__container">
        <header className="about-widget__header">
          <h1 className="about-widget__title">ABOUT</h1>
          <div className="about-widget__underline"></div>
        </header>
        
        <div className="about-widget__description">
          <p>Мы создаем инновационные решения для бизнеса</p>
          <p>помогая компаниям расти и развиваться в цифровую эпоху</p>
        </div>
        
        <div className="about-widget__cards-wrapper">
          <div className="about-widget__cards">
            {cardsData.map((card, index) => (
              <div key={index} className="about-widget__card-wrapper">
                <CircleCard 
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
          
          {/* Линии только между кругами */}
          <div className="about-widget__line about-widget__line--1"></div>
          <div className="about-widget__line about-widget__line--2"></div>
        </div>
      </div>
    </section>
  )
}