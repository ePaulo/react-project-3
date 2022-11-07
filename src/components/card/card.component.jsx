import './card.styles.scss'

const Card = ({ showFields, cardInfo }) => {
  const { name, email, city, website, company } = cardInfo

  const cardElement = (
    <div className='card-component'>
      <h2>{name}</h2>
      {showFields.email && (
        <p>
          <b>Email:</b> {email}
        </p>
      )}
      {showFields.city && (
        <p>
          <b>City:</b> {city}
        </p>
      )}
      {showFields.website && (
        <p>
          <b>Website:</b> {website}
        </p>
      )}
      {showFields.company && (
        <p>
          <b>Company:</b> {company}
        </p>
      )}
    </div>
  )
  return cardElement
}

export default Card
