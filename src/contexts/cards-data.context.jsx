import { useState, createContext } from 'react'
import { cardsData } from '../data/cards.data'

const CardsDataContext = createContext()

const CardsDataProvider = props => {
  const [cardsInfo, setCardsInfo] = useState(() => cardsData)

  const context = { cardsInfo, setCardsInfo }

  return <CardsDataContext.Provider value={context}>{props.children}</CardsDataContext.Provider>
}

export { CardsDataContext, CardsDataProvider }
