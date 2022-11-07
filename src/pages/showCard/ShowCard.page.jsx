import './showCard.styles.scss'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cardsData.context'
import Card from '../../components/card/Card.component'

const ShowCard = () => {
  const { cardsInfo } = useContext(CardsDataContext)
  // console.log({ cardsInfo }) // !LOG
  const { id } = useParams()
  const showFields = {
    name: true,
    email: true,
    city: true,
    website: true,
    company: true,
  }

  // console.log({ id }) // !LOG
  const cardInfo = cardsInfo.find(card => card.id === +id)
  // console.log(cardInfo) // !LOG
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
