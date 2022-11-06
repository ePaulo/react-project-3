import './app.styles.scss'
import { CardsDataProvider } from './contexts/cards-data.context'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/home.page'
import User from './pages/user/user.page'
import AddUser from './pages/adduser/adduser.page'
import NotFound from './pages/notfound/notfound.page'

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
            <li>
              <input type='text' placeholder='enter search name' />
            </li>
          </ul>
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
