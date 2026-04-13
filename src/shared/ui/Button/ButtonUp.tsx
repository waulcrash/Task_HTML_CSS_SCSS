import React, { useState, useEffect } from 'react'
import './ButtonUp.css'

export const ButtonUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Показываем кнопку после прокрутки 200px
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Проверяем при монтировании
    toggleVisibility()
    
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      className={`button-up ${isVisible ? 'button-up--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
      <span className="button-up__arrow"></span>
    </button>
  )
}