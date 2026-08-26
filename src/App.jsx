import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Drivers from './pages/Drivers'
import ScrollToHash from './ScrollToHash'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/drivers" element={<Drivers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App