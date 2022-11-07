import './showCard.styles.scss'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cardsData.context'
import Card from '../../components/card/Card.component'

const showFields = {
  name: true,
  email: true,
  city: true,
  website: true,
  company: true,
}

const ShowCard = () => {
  const { cardsInfo } = useContext(CardsDataContext)
  const { id } = useParams()

  const cardInfo = cardsInfo.find(card => card.id === +id)
  if (cardInfo) {
    return (
      <div className='show-card-container'>
        <Card key={+id} showFields={showFields} cardInfo={cardInfo} />
      </div>
    )
  } else {
    return null
  }
}

export default ShowCard

// HACK added '+' to id to convert string to number
