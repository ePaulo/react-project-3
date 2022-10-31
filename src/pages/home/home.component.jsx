import './home.styles.scss'
import { Link } from 'react-router-dom'
import CardsList from '../../components/cards-list/cards-list.component'

const Home = () => {
  return (
    <div className='home-container'>
      <CardsList />
      <Link className='nav-link' to='/adduser'>
        Add User
      </Link>
    </div>
  )
}

export default Home
