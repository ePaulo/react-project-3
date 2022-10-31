import './adduser.styles.scss'
import { Link } from 'react-router-dom'
import CardForm from '../../components/card-form/card-form.component'

const AddUser = () => {
  return (
    <div className='adduser-container'>
      <CardForm />
      <Link className='nav-link' to='/'>
        Home
      </Link>
    </div>
  )
}

export default AddUser
