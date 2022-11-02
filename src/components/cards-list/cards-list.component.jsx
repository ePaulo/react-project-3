import './cards-list.styles.scss'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cards-data.context'
import Card from '../card/card.component'

const CardsList = ({ isDisplayed }) => {
  const { cardsInfo } = useContext(CardsDataContext)

  const cardsElement = cardsInfo.map(cardInfo => {
    // console.log(cardInfo)
    return (
      <Card key={cardInfo.id} cardInfo={cardInfo} isDisplayed={isDisplayed} />
    )
  })

  return <div className='cards-list-container'>{cardsElement}</div>
}

export default CardsList

// <Card key={cardInfo.id} cardInfo={cardInfo} />
