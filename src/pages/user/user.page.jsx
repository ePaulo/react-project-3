import './user.styles.scss'
import Card from '../../components/card/card.component'

const User = () => {
  const showCardInfo = {
    name: true,
    email: true,
    city: true,
    website: true,
    company: true,
  }

  // HACK set cardId to 1 to initially see something
  const cardId = 1

  return (
    <div className='user-container'>
      <Card cardId={cardId} showCardInfo={showCardInfo} />
    </div>
  )
}

export default User

// DONE add card component
// TODO add code for setting cardId
