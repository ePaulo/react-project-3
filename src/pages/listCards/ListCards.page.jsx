import './listCards.styles.scss'
import { useState, useContext } from 'react'
import Select from 'react-select'
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

const ListCards = () => {
  const [searchName, setSearchName] = useState('')
  const [selectCity, setSelectCity] = useState('')
  const { cardsInfo } = useContext(CardsDataContext)

  if (cardsInfo) {
    // ---------- Filter Cards ----------
    const filterByName = inputChars =>
      cardsInfo.filter(card =>
        card.name.toLocaleLowerCase().includes(inputChars.toLocaleLowerCase())
      )

    const handleInputChange = input => {
      setSearchName(input.target.value.toLocaleLowerCase())
    }

    const filterElement = (
      <>
        <input
          type='search'
          value={searchName}
          onChange={handleInputChange}
          placeholder='Filter by name: '
        />
        <span>{`Cards: ${filterByName(searchName).length || 'none'}`}</span>
      </>
    )

    // ---------- Select City ----------
    const options = cards =>
      cards.map(card => {
        return {
          id: card.id,
          value: card.city,
          label: card.city,
        }
      })

    const handleSelectChange = selectedCity => {
      setSelectCity(selectedCity.value.toLocaleLowerCase())
    }

    const selectElement = (
      <Select
        defaultValue={{ id: 0, value: '', label: 'Select City:' }}
        options={options(filterByName(searchName))}
        onChange={handleSelectChange}
      />
    )

    // ---------- Display Cards ----------
    const displayCards = cards =>
      cards.map(card => (
        <Link key={card.id} className='card-link' to={`/card/${card.id}`}>
          <Card key={card.id} showFields={showFields} cardInfo={card} />
        </Link>
      ))

    const filteredCards = () => {
      let cards = Array.from(cardsInfo)
      if (searchName) {
        cards = cards.filter(card =>
          card.name.toLocaleLowerCase().includes(searchName)
        )
      }
      if (selectCity) {
        cards = cards.filter(
          card => card.city.toLocaleLowerCase() === selectCity
        )
      }

      return cards
    }

    const cardsElement = displayCards(filteredCards())

    // ---------- Reset Card Search ----------
    const handleResetClick = event => {
      setSearchName('')
      setSelectCity('')
    }

    const buttonElement = (
      <button type='button' onClick={handleResetClick}>
        Reset Filters
      </button>
    )

    // ---------- End of page elements ----------

    return (
      <div className='list-cards-container'>
        <div className='filter'>{filterElement}</div>
        <div className='select'>{selectElement}</div>
        <div className='reset-button'>{buttonElement}</div>
        <div className='cards'>{cardsElement}</div>
      </div>
    )
  } else {
    return <div>loading...</div>
  }
}

export default ListCards
