import './cardsSearch.styles.scss'
import { useState } from 'react'

const CardsSearch = ({ names, setNames }) => {
  const [searchText, setSearchText] = useState('')
  // console.log(names) // !LOG

  const handleChange = event => {
    const typedChars = event.target.value.toLocaleLowerCase()
    setSearchText(typedChars)

    const filteredNames = names.filter(name =>
      name.toLocaleLowerCase().includes(typedChars)
    )
    console.log(filteredNames) // LOG

    // setNames(
    //   allNames.filter(name => filteredNames.includes(name.toLocaleLowerCase()))
    // )
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

export default CardsSearch
