import './cards-list.styles.scss'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cards-data.context'
import Card from '../card/card.component'

const CardsList = () => {
  const { cardsInfo } = useContext(CardsDataContext)
  const showDetails = []

  const cardsElement = cardsInfo.map(cardInfo => <Card key={cardInfo.id} cardInfo={cardInfo} />)

  return <div className='cards-list-container'>{cardsElement}</div>
}

export default CardsList
