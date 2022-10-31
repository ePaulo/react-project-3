import Card from './../card/card.component'
import './card-list.styles.scss'

const CardList = ({ peopleInfo }) => {
  const cardElements = peopleInfo.map(personInfo => (
    <Card key={personInfo.id} personInfo={personInfo} />
  ))

  return <div className='card-list'>{cardElements}</div>
}

export default CardList
