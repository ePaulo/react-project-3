import './nav.styles.scss'
import { Link } from 'react-router-dom'

const Nav = props => {
  return (
    <nav className='nav-component'>
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
    </nav>
  )
}

export default Nav
