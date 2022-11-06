import './addUser.styles.scss'
import { Link } from 'react-router-dom'
import CardForm from '../../components/cardForm/CardForm.component'

const AddUser = () => {
  return (
    <div className='adduser-container'>
      <CardForm />
    </div>
  )
}

export default AddUser
