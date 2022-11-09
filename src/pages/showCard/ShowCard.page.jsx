import './showCard.styles.scss'
import { Navigate, useParams } from 'react-router-dom'
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

const ShowCard = props => {
  const { id } = useParams()
  const { cardsInfo } = useContext(CardsDataContext)

  if (!cardsInfo) return null

  const cardInfo = cardsInfo.find(card => card.id === +id)

  if (cardInfo) {
    return (
      <div className='show-card-container'>
        <Card key={+id} showFields={showFields} cardInfo={cardInfo} />
      </div>
    )
  } else {
    return <Navigate to='notfound' />
  }
}

export default ShowCard

// HACK added '+' to param id to convert string to number
