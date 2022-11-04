import './app.styles.scss'
import { CardsDataProvider } from './contexts/cards-data.context'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/home.page'
import Users from './pages/users/users.page'
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
              <Link className='nav-link' to='/users'>
                Users
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/adduser'>
                Add User
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CardsDataProvider>
  )
}

export default App
