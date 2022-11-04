import './adduser.styles.scss'
import { Link } from 'react-router-dom'
import CardForm from '../../components/card-form/cardForm.component'

const AddUser = () => {
  return (
    <div className='adduser-container'>
      <CardForm />
    </div>
  )
}

export default AddUser
