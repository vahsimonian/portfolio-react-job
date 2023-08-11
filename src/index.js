import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import About from './components/About'
import Home from './components/Home'
import Experience from './components/Experience'
import Contact from './components/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <About />
    <Experience />
    <Contact />
  </React.StrictMode>
)

reportWebVitals()
