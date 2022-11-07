import './addCard.styles.scss'
import { useState, useContext } from 'react'
import { CardsDataContext } from '../../contexts/cardsData.context'
import uuid from 'react-uuid'

const AddCard = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [website, setWebsite] = useState('')
  const [company, setCompany] = useState('')
  const [missingValues, setMissingValues] = useState([])

  const { cardsInfo, setCardsInfo } = useContext(CardsDataContext)

  const resetForm = () => {
    setName('')
    setEmail('')
    setCity('')
    setWebsite('')
    setCompany('')
  }

  const findEmptyInputs = () => {
    const emptyInputs = []
    if (!name) emptyInputs.push('name')
    if (!email) emptyInputs.push('email')
    if (!city) emptyInputs.push('city')
    if (!website) emptyInputs.push('website')
    if (!company) emptyInputs.push('company')
    setMissingValues(emptyInputs)
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    findEmptyInputs()

    if (name && email && city && website && company) {
      setCardsInfo(prevCards => [
        ...prevCards,
        {
          id: uuid(),
          name,
          email,
          city,
          website,
          company,
        },
      ])
      resetForm()
    }
  }

  const formElement = (
    <form className='card-form' onSubmit={handleFormSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='Full Name'
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='text'
        name='city'
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder='City'
      />
      <input
        type='url'
        name='website'
        value={website}
        onChange={e => setWebsite(e.target.value)}
        placeholder='Website'
      />
      <input
        type='text'
        name='Company'
        value={company}
        onChange={e => setCompany(e.target.value)}
        placeholder='Company'
      />
      <input className='button' type='submit' value='Add Card' />

      {missingValues.map((missingValue, index) => (
        <p className='missing-values' key={index}>
          Please insert a {missingValue} value
        </p>
      ))}
    </form>
  )

  return <div className='add-card-container'>{formElement}</div>
}

export default AddCard