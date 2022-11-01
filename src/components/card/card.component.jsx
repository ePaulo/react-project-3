import './card.styles.scss'

const Card = ({ cardInfo }) => {
  const { name, email, address, website, company } = cardInfo

  const cardElement = (
    <div className='card-container'>
      <h2 className='name'>{name}</h2>
      <p className='email'>
        <b>Email:</b> {email}
      </p>
      <p className='city'>
        <b>City:</b> {address.city}
      </p>
      <p className='website'>
        <b>Website:</b> {website}
      </p>
      <p className='company'>
        <b>Company:</b> {company.name}
      </p>
    </div>
  )

  return cardElement
}

export default Card
