import './card.styles.scss'

const Card = ({ cardInfo }) => {
  const { name, job, country, age, netWorth } = cardInfo

  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>
        <b>Job:</b> {job}
      </p>
      <p>
        <b>Country:</b> {country}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>
      <p>
        <b>Net Worth:</b> {netWorth}M
      </p>
    </div>
  )
}

export default Card
