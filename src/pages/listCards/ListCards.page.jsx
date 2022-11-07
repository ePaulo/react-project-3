import './listCards.styles.scss'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CardsDataContext } from '../../contexts/cardsData.context'
import Card from '../../components/card/Card.component'

const showFields = {
  name: true,
  email: false,
  city: true,
  website: false,
  company: false,
}

const ListCards = () => {
  const [searchText, setSearchText] = useState('')
  const { cardsInfo } = useContext(CardsDataContext)

  // TODO get search feature working
  const searchElement = () => {
    const handleChange = event => {
      const typedChars = event.target.value.toLocaleLowerCase()
      setSearchText(typedChars)

      const filteredCards = cardsInfo.filter(cardInfo =>
        cardInfo.name.toLocaleLowerCase().includes(typedChars)
      )
    }

    return (
      <div className='cards-search-component'>
        <input
          type='search'
          value={searchText}
          onChange={handleChange}
          placeholder='Search for name: '
        />
      </div>
    )
  }

  const cardsElement = cardsInfo.map(cardInfo => (
    <Link key={cardInfo.id} className='card-link' to={`/card/${cardInfo.id}`}>
      <Card key={cardInfo.id} showFields={showFields} cardInfo={cardInfo} />
    </Link>
  ))

  if (cardsElement) {
    return (
      <div className='list-cards-container'>
        {searchElement()}
        {cardsElement}
      </div>
    )
  } else {
    return null
  }
}

export default ListCards
