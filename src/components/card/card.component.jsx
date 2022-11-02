import './card.styles.scss'

const Card = ({ cardInfo, isDisplayed }) => {
  const { name, email, address, website, company } = cardInfo

  const cardElement = (
    <div className='card-container'>
      <h2 className='name'>{name}</h2>
      {isDisplayed.email && (
        <p className='email'>
          <b>Email:</b> {email}
        </p>
      )}
      <p className='city'>
        <b>City:</b> {address.city}
      </p>
      {isDisplayed.website && (
        <p className='website'>
          <b>Website:</b> {website}
        </p>
      )}
      {isDisplayed.company && (
        <p className='company'>
          <b>Company:</b> {company.name}
        </p>
      )}
    </div>
  )

  return cardElement
}

export default Card
