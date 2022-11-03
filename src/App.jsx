import './app.styles.scss'
import { CardsDataProvider } from './contexts/cards-data.context'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/home.component'
import AddUser from './pages/adduser/adduser.component'

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
              <Link className='nav-link' to='/adduser'>
                Add User
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<AddUser />} />
        </Routes>
      </div>
    </CardsDataProvider>
  )
}

export default App
