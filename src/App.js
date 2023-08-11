import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import SocialLinks from './components/SocialLinks'
import '../src/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<Navbar />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='portfolio/:protfolioId' element={<Portfolio />} />
          <Route index element={<SocialLinks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
