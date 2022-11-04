import './users.styles.scss'
import CardsList from '../../components/cards-list/cardsList.component'

const Users = () => {
  const showCardInfo = {
    name: true,
    email: true,
    city: true,
    website: false,
    company: false,
  }
  return (
    <div className='users-container'>
      <CardsList showCardInfo={showCardInfo} />
    </div>
  )
}

export default Users
