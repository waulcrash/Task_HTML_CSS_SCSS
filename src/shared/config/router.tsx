import { Routes, Route } from 'react-router-dom'
import ButtonUpPage from '../../pages/ButtonUpPage'
import TooltipPage from '../../pages/TooltipPage'
import GridVsFlexPage from '../../pages/GridVsFlexPage'
import AboutPage from '../../pages/AboutPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ButtonUpPage />} />
      <Route path="/button-up" element={<ButtonUpPage />} />
      <Route path="/tooltip" element={<TooltipPage />} />
      <Route path="/grid-flex" element={<GridVsFlexPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}