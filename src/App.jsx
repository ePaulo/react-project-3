import { useState } from 'react'
import { cardData } from './data/card-data.jsx'
import CardForm from './components/card-form/card-form.component'
import CardList from './components/card-list/card-list.component'
import './App.css'

function App() {
  const [cardInfo, setCardInfo] = useState(cardData)
  console.log(cardInfo)
  return (
    <div className='app'>
      <CardForm addCard={setCardInfo} />
      <CardList peopleInfo={cardInfo} />
    </div>
  )
}

export default App
