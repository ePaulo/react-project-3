import './app.styles.scss'
import { CardsDataProvider } from './contexts/cardsData.context'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home.page'
import User from './pages/user/User.page'
import AddUser from './pages/addUser/AddUser.page'
import NotFound from './pages/notFound/NotFound.page'
import Search from './components/search/Search.component'

function App() {
  return (
    <CardsDataProvider>
      <div className='app-container'>
        <nav>
          <ul>
            <li>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/user/new'>
                Add User
              </Link>
            </li>
          </ul>
          <Search />
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user'>
            <Route path='new' element={<AddUser />} />
            <Route path=':id' element={<User />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CardsDataProvider>
  )
}

export default App
