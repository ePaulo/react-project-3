import './app.styles.scss'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav.component'

import ListCards from './pages/listCards/ListCards.page'
import ShowCard from './pages/showCard/ShowCard.page'
import AddCard from './pages/addCard/AddCard.page'
import NotFound from './pages/notFound/NotFound.page'

function App() {
  return (
    <div className='app-container'>
      <Nav />
      <Routes>
        <Route path='/' element={<ListCards />} />
        <Route path='/card'>
          <Route path='new' element={<AddCard />} />
          <Route path=':id' element={<ShowCard />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
