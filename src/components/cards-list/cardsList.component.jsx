import './cards-list.styles.scss'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cards-data.context'
import Card from '../card/card.component'

const CardsList = ({ showCardInfo }) => {
  const { cardsInfo } = useContext(CardsDataContext)
  // console.log(cardsInfo) // !LOG
  if (cardsInfo) {
    const cardsElement = cardsInfo.map(cardInfo => {
      // !LOG console.log({ cardInfo.id })
      return (
        <Card
          key={cardInfo.id}
          cardId={cardInfo.id}
          showCardInfo={showCardInfo}
        />
      )
    })

    return <div className='cards-list-container'>{cardsElement}</div>
  } else {
    return null
  }
}

export default CardsList
