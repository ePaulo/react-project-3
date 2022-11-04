import './card.styles.scss'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cards-data.context'

const Card = ({ cardId, showCardInfo }) => {
  const { cardsInfo } = useContext(CardsDataContext)
  console.log({ cardId }) // LOG
  // cardsInfo.length && console.log(cardsInfo) // LOG
  const cardInfo = cardsInfo?.find(card => card.id === cardId)
  // cardInfo && console.log(cardInfo) // LOG
  if (cardInfo) {
    const { name, email, address, website, company } = cardInfo
    const cardElement = (
      <div className='card-container'>
        <h2 className='name'>{name}</h2>
        {showCardInfo.email && (
          <p className='email'>
            <b>Email:</b> {email}
          </p>
        )}
        {showCardInfo.city && (
          <p className='city'>
            <b>City:</b> {address.city}
          </p>
        )}
        {showCardInfo.website && (
          <p className='website'>
            <b>Website:</b> {website}
          </p>
        )}
        {showCardInfo.company && (
          <p className='company'>
            <b>Company:</b> {company.name}
          </p>
        )}
      </div>
    )

    return cardElement
  } else {
    return null
  }
}

export default Card
