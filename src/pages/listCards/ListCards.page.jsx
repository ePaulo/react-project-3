import './listCards.styles.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CardsDataContext } from '../../contexts/cardsData.context'
import Card from '../../components/card/Card.component'

const ListCards = () => {
  const { cardsInfo } = useContext(CardsDataContext)
  // console.log(cardsInfo) // !LOG

  const showFields = {
    name: true,
    email: false,
    city: true,
    website: false,
    company: false,
  }

  const cardsElement = cardsInfo.map(cardInfo => {
    return (
      <Link key={cardInfo.id} className='card-link' to={`/card/${cardInfo.id}`}>
        <Card key={cardInfo.id} showFields={showFields} cardInfo={cardInfo} />
      </Link>
    )
  })
  if (cardsElement) {
    return <div className='list-cards-container'>{cardsElement}</div>
  } else {
    return null
  }
}

export default ListCards
