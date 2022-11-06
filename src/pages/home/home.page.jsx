import './home.styles.scss'
import CardsList from '../../components/cardsList/CardsList.component'

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
