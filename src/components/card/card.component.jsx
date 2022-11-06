import './card.styles.scss'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cards-data.context'

const Card = ({ cardId, showCardInfo }) => {
  const { cardsInfo } = useContext(CardsDataContext)
  console.count(cardId) // LOG
  // !LOG cardsInfo.length && console.log(cardsInfo)
  const cardInfo = cardsInfo?.find(card => card.id === cardId)
  // !LOG cardInfo && console.log(cardInfo)
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

// WHY? It appears that on page load (via browser refresh) the Card component is loading 6 times while I expected 2x.  But when I save the code in vscode, it loads twice...what I expected.  At this point, I assume it doesn't matter for React client-side SPA pages. - Paul, Nov 5, 2022
