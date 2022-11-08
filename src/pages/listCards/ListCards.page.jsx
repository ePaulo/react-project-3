import './listCards.styles.scss'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardsDataContext } from '../../contexts/cardsData.context'
import Card from '../../components/card/Card.component'

const showFields = {
  name: true,
  email: false,
  city: true,
  website: false,
  company: false,
}

// START ----------------------------------------------------
// TODO get search feature working... integrated into ListCards page.
// TODO remove CardsSearch component if/when no longer needed.
// const FilterCards = () => {
//   const [searchText, setSearchText] = useState('')
//   const { cardsInfo } = useContext(CardsDataContext)

//   const handleChange = event => {
//     const typedChars = event.target.value.toLocaleLowerCase()
//     setSearchText(typedChars)

//     const filteredCards = cardsInfo.filter(cardInfo =>
//       cardInfo.name.toLocaleLowerCase().includes(typedChars)
//     )
//   }

//   return (
//     <div className='filter-cards-component'>
//       <input
//         type='search'
//         value={searchText}
//         onChange={handleChange}
//         placeholder='Filter by name: '
//       />
//     </div>
//   )
// }
//END --------------------------------------------------------

const ListCards = () => {
  const [searchText, setSearchText] = useState('')
  const { cardsInfo } = useContext(CardsDataContext)

  if (cardsInfo) {
    const filteredCards = typedChars =>
      cardsInfo.filter(card =>
        card.name.toLocaleLowerCase().includes(typedChars.toLocaleLowerCase())
      )

    const displayCards = cards =>
      cards.map(card => (
        <Link key={card.id} className='card-link' to={`/card/${card.id}`}>
          <Card key={card.id} showFields={showFields} cardInfo={card} />
        </Link>
      ))

    const handleChange = event => {
      setSearchText(event.target.value)
    }

    const filterElement = (
      <input
        type='search'
        value={searchText}
        onChange={handleChange}
        placeholder='Filter by name: '
      />
    )

    const cardsElement = displayCards(filteredCards(searchText))

    return (
      <div className='list-cards-container'>
        <div className='filter'>{filterElement}</div>
        <div className='cards'>{cardsElement}</div>
      </div>
    )
  } else {
    return <div>loading...</div>
  }
}

export default ListCards
