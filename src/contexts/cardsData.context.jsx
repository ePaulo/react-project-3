import { createContext, useState, useEffect } from 'react'

const CardsDataContext = createContext()

const CardsDataProvider = props => {
  const [cardsInfo, setCardsInfo] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersData => {
        const cardsData = usersData.map(userData => {
          return {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            city: userData.address.city,
            website: userData.website,
            company: userData.company.name,
          }
        })
        setCardsInfo(cardsData)
      })
      .catch(errMsg => console.error(errMsg))
  }, [])

  const context = { cardsInfo, setCardsInfo }
  // console.log(context.cardsInfo) // !LOG

  return (
    <CardsDataContext.Provider value={context}>
      {props.children}
    </CardsDataContext.Provider>
  )
}

export { CardsDataContext, CardsDataProvider }
