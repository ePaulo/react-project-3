import { createContext, useState, useEffect } from 'react'
// import { cardsData } from '../data/cards.data'

const CardsDataContext = createContext()

const CardsDataProvider = props => {
  const [cardsInfo, setCardsInfo] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        // console.log(users)
        setCardsInfo(users)
      })
      .catch(errMsg => console.error(errMsg))
  }, [])

  const context = { cardsInfo, setCardsInfo }

  return <CardsDataContext.Provider value={context}>{props.children}</CardsDataContext.Provider>
}

export { CardsDataContext, CardsDataProvider }
