import './cards-list.styles.scss'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cards-data.context'
import Card from '../card/card.component'

const CardsList = ({ showCardInfo }) => {
  const { cardsInfo } = useContext(CardsDataContext)

  const cardsElement = cardsInfo.map(cardInfo => {
    // console.log({ cardInfo.id }) // LOG
    return (
      <Card
        key={cardInfo.id}
        cardId={cardInfo.id}
        showCardInfo={showCardInfo}
      />
    )
  })

  return <div className='cards-list-container'>{cardsElement}</div>
}

export default CardsList
