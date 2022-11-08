import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CardsDataProvider } from './contexts/cardsData.context'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardsDataProvider>
        <App />
      </CardsDataProvider>
    </BrowserRouter>
  </React.StrictMode>
)
