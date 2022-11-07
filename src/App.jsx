import './app.styles.scss'
import { Routes, Route, Link } from 'react-router-dom'
import { useContext } from 'react'
import { CardsDataContext } from './contexts/cardsData.context'

// import CardsSearch from './components/cardsSearch/CardsSearch.component'
import ListCards from './pages/listCards/ListCards.page'
import ShowCard from './pages/showCard/ShowCard.page'
import AddCard from './pages/addCard/AddCard.page'
import NotFound from './pages/notFound/NotFound.page'

function App() {
  const { cardsInfo, setCardsInfo } = useContext(CardsDataContext)
  // console.log(cardsInfo) // !LOG

  const cardNames = cardsInfo.map(cardInfo => cardInfo.name)

  return (
    <div className='app-container'>
      <nav>
        <ul>
          <li>
            <Link className='nav-link' to='/'>
              List Cards
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/card/new'>
              Add Card
            </Link>
          </li>
        </ul>
        {/* <CardsSearch names={cardNames} setNames={setCardsInfo} /> */}
      </nav>
      <Routes>
        <Route path='/' element={<ListCards />} />
        <Route path='/card'>
          <Route path='new' element={<AddCard />} />
          <Route path=':id' element={<ShowCard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
