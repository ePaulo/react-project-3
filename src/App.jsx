import { CardsDataProvider } from './contexts/cards-data.context'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.component'
import AddUser from './pages/adduser/adduser.component'

function App() {
  return (
    <CardsDataProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='adduser' element={<AddUser />} />
      </Routes>
    </CardsDataProvider>
  )
}

export default App
