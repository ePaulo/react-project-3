import './home.styles.scss'
import CardsList from '../../components/cards-list/cardsList.component'

const Home = () => {
  const showCardInfo = {
    name: true,
    email: false,
    city: true,
    website: false,
    company: false,
  }
  return (
    <div className='home-container'>
      <CardsList showCardInfo={showCardInfo} />
    </div>
  )
}

export default Home
