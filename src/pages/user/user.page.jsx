import './user.styles.scss'
import Card from '../../components/card/card.component'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  const showCardInfo = {
    name: true,
    email: true,
    city: true,
    website: true,
    company: true,
  }

  return (
    <div className='user-container'>
      <Card cardId={+id} showCardInfo={showCardInfo} />
    </div>
  )
}

export default User

// DONE add card component
// DONE add code for capturing cardId from URL param
