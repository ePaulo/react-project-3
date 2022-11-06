import './user.styles.scss'
import Card from '../../components/card/Card.component'
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

// HACK added '+' to id to convert string to number
// DONE use Card component
// DONE add code to capture cardId from URL param
