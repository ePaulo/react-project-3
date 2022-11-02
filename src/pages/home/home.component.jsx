import './home.styles.scss'
import { Link } from 'react-router-dom'
import CardsList from '../../components/cards-list/cards-list.component'

const Home = () => {
  const isDisplayed = {
    name: true,
    email: false,
    city: true,
    website: false,
    company: false,
  }
  return (
    <div className='home-container'>
      <CardsList isDisplayed={isDisplayed} />
      <Link className='nav-link' to='/adduser'>
        Add User
      </Link>
    </div>
  )
}

export default Home
